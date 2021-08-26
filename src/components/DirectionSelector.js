import React, { useRef } from "react";
import { getStops } from "../utils/getters";


export const DirectionSelector = ({directions, setStops, routeRef}) => {

    const directionRef = useRef();
    
    const updateStops = () => {
        var selectRoute = routeRef.current;
        var route = selectRoute.options[selectRoute.selectedIndex].value;
        var selectDir = directionRef.current;
        var direction = selectDir.options[selectDir.selectedIndex].value;
        getStops(route, direction, setStops);
    }

    return directions ? (
      <div className="selection">
        <label htmlFor="directions">
            Choose a direction:
        </label>
        <select
            ref={directionRef}
            name="directions"
            id="directions"
            onChange={() => setStops(null)}
        >
            {directions && directions.map((item, index) => {
                return (
                    <option
                        value={item.Value}
                        key={index}
                    >
                        {`${item.Text} - ${item.Value}`}
                    </option>
                )
            })}
        </select>
        <button onClick={updateStops}>
            Get Stops
        </button>
      </div>
    ) : null
}
