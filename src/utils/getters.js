const nextTripUrl = 'http://svc.metrotransit.org/NexTrip/';

export const getRoutes = (setRoutes, setError) => {
    fetch(nextTripUrl + 'Routes', {
        method: 'GET',
        headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data=>{
        setRoutes(data);
    })
    .catch(err=> {
        console.log(err);
        setError(true);
    })
}

export const getDirections = (route, setDirections) => {
    fetch(`${nextTripUrl}directions/${route}`, {
        method: 'GET',
        headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data=>{
        setDirections(data);
    })
    .catch(err=>console.log(err))
}

export const getStops = (route, direction, setStops) => {
    fetch(`${nextTripUrl}stops/${route}/${direction}`, {
        method: 'GET',
        headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data=>{
        setStops(data);
    })
    .catch(err=>console.log(err))
}