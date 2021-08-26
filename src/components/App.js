import React, { useEffect, useState, useRef } from "react";
import { getRoutes } from "../utils/getters";
import { RouteSelector } from './RouteSelector';
import { DirectionSelector } from "./DirectionSelector";
import { StopsDisplay } from "./StopsDisplay";

export const App = ({name}) => {
    const [routes, setRoutes] = useState();
    const [directions, setDirections] = useState();
    const [stops, setStops] = useState();
    const [error, setError] = useState(null);

    const clearAll = () => {
        setDirections(null);
        setStops(null);
    };

    const routeRef = useRef();

    useEffect(() => {
        clearAll();
        getRoutes(setRoutes, setError)
    }, []);

    return !error ? (
      <>
        <h1>
          {`${name}'s NexTrip Application`}
        </h1>
        <RouteSelector
            routes={routes}
            setDirections={setDirections}
            clearAll={clearAll}
            routeRef={routeRef}
        />
        <DirectionSelector
            directions={directions}
            setStops={setStops}
            routeRef={routeRef}
        />
        <StopsDisplay
            stops={stops}
            clearAll={clearAll}
        />
      </>
    ) : 
    <p>
        Encountered an error, likely due to CORS.  Consider CORS blocking or a local proxy.
    </p>;
}

export default App;