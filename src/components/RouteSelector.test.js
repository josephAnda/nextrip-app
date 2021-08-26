import { RouteSelector } from './RouteSelector';
import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";

const dom = new JSDOM();

jest.mock("../utils/getters", () => {

    return {
        getDirections: jest.fn(() => true)
    }
})

let routes;

describe('RouteSelector', () => {

    beforeAll(() =>{
        global.window = dom.window;
        global.document = dom.window.document;
        
    }, [])
    beforeEach(() => {
        jest.clearAllMocks();
        routes = [
            {
                Description: "Metro Blue Line",
                Route: "901"
            },
            {
                Description: "Metro Green Line",
                Route: "902"
            }
        ]
    })
    it('mounts the selector', () => {
        
        const routeSelector = mount(<RouteSelector routes={routes} />);
        const expectedText = 'Choose a route:'
        expect(routeSelector.find('label').text()).toBe(expectedText);
        
    })
    it('gets directions when the button is clicked', () => {
        const getterMock = require('../utils/getters');
        const routeRefMock = {
            current: {
                options: [
                    { value: 'something' }
                ],
                selectedIndex: 0
            }
        }
        const routeSelector = mount(<RouteSelector routes={routes} routeRef={routeRefMock}/>);
        routeSelector.find('button').simulate('click');
        expect(getterMock.getDirections).toHaveBeenCalledTimes(1);
        
    })

})