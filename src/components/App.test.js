import { App } from './App';
import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";

const dom = new JSDOM();

jest.mock("../utils/getters", () => {

    return {
        getRoutes: jest.fn(() => {
            return [
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
    }
})

describe('App', () => {

    beforeAll(() =>{
        jest.clearAllMocks();
        global.window = dom.window;
        global.document = dom.window.document;
    }, [])
    it('successfully mounts the app with the correct heading', () => {
        const TEST_NAME = 'developer'
        const expectedHeading = `${TEST_NAME}'s NexTrip Application`;
        const app = mount(<App name={TEST_NAME} />);
        expect(app.find('h1').text()).toBe(expectedHeading);
    })

    it('shows calls get routes when mounting', () => {
        const gettersMock = require('../utils/getters');
        gettersMock.getRoutes.mockImplementationOnce((setroutes, seterror) => {
            seterror(true);
        })
        const app = mount(<App />);
        expect(gettersMock.getRoutes).toHaveBeenCalled();
    })
})