import React, { useRef } from "react";
import { getDirections } from "../utils/getters";


export const RouteSelector = ({routes, setDirections, clearAll, routeRef}) => {
    

    const updateDirections = () => {
        var select = routeRef.current;
        var route = select.options[select.selectedIndex].value;
        getDirections(route, setDirections);
    }

    

    return routes ? (
      <div className="selection">
        <label htmlFor="routes">
            Choose a route:
        </label>
        <select ref={routeRef} name="routes" id="routes" onChange={clearAll}>
            {routes && routes.map((item, index) => {
                return (
                    <option
                        value={item.Route}
                        key={index}
                    >
                        {`${item.Description} - ${item.Route}`}
                    </option>
                )
            })}
        </select>
        <button onClick={updateDirections}>
            Get Route Directions
        </button>
      </div>
    ) : <p>Loading routes . . . </p>;
  
}