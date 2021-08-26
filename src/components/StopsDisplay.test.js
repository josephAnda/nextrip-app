import { StopsDisplay } from './StopsDisplay';
import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";

const dom = new JSDOM();

let stops;
let clearAll;
let setStops;

describe('StopsDisplay', () => {

    beforeAll(() =>{
        global.window = dom.window;
        global.document = dom.window.document;
        
    }, [])
    beforeEach(() => {
        
        stops = [
            {
                Text: 'Stops 1'
            }
        ];
        clearAll = jest.fn(() => true);

    })
    it('mounts the display if there are stops', () => {
        
        const stopsDisplay = mount(<StopsDisplay stops={stops} />);
        expect(stopsDisplay.find('ul.stops-display')).toBeDefined();
        
    })
    it('calls clear all if the button is clicked', () => {

        const stopsDisplay = mount(<StopsDisplay stops={stops} clearAll={clearAll}/>);
        stopsDisplay.find('button').simulate('click');
        expect(clearAll).toHaveBeenCalledTimes(1);
        
    })

})