import { DirectionSelector } from './DirectionSelector';
import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";

const dom = new JSDOM();

jest.mock("../utils/getters", () => {

    return {
        getStops: jest.fn(() => true)
    }
})

let directions;
let setStops;

describe('DirectionSelector', () => {

    beforeAll(() =>{
        global.window = dom.window;
        global.document = dom.window.document;
        
    }, [])
    beforeEach(() => {
        jest.clearAllMocks();
        setStops = jest.fn(() => true);
        directions = [
            {
                Text: "Northbound",
                Value: "0"
            },
            {
                Text: "Southbound",
                Value: "1"
            }
        ]
    })
    it('mounts the selector', () => {
        
        const directionSelector = mount(<DirectionSelector directions={directions} />);
        const expectedText = 'Choose a direction:'
        expect(directionSelector.find('label').text()).toBe(expectedText);
        
    })
    it('gets stops when the button is clicked', () => {
        const getterMock = require('../utils/getters');
        const routeRefMock = {
            current: {
                options: [
                    { value: 'something' }
                ],
                selectedIndex: 0
            }
        }
        const directionSelector = mount(
            <DirectionSelector
                directions={directions}
                routeRef={routeRefMock}
            />
        );
        directionSelector.find('button').simulate('click');
        expect(getterMock.getStops).toHaveBeenCalledTimes(1);
        
    })

    it('sets stops with null if selectction is changed', () => {

        const directionSelector = mount(
            <DirectionSelector
                directions={directions}
                setStops={setStops}
            />
        );
        directionSelector.find('select').simulate('change');
        expect(setStops).toHaveBeenCalledTimes(1);
        expect(setStops).toHaveBeenCalledWith(null);
        
    })

})