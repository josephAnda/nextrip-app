# Joseph's NexTrip Application
_A case study exploring the Metro Transit NexTrip API_ 
### Building and running locally with CORS blocking

To make successful fetch requests to the Metro Transit API, this application is best run in [Google Chrome](https://www.google.com/chrome/?brand=FHFK&geo=US&gclid=CjwKCAjw95yJBhAgEiwAmRrutFrK4-11RfXtFjDJ5hjW_UTcbi_gAEGBASPYheAjHicbnzUtF0TLjBoCOMEQAvD_BwE&gclsrc=aw.ds) with the [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) extension activated.

To run, simply clone the app into a directory of your choice, install the dependencies and devDependencies and start the server, and navigate to http://localhost:8000/dist/index.html.  

```sh
git clone https://github.com/josephAnda/nextrip-app.git
cd nextrip-app
npm i && npm run build-dev && npm run start
```

To execute the unit testing suite ...

```sh
npm i && npm run test
```

To evaluate code coverage, use the following script:

```sh
npm run test:coverage
```

Or to run jest directly . . . 

```sh
npm i jest --global
jest
```

### Development Assumptions and Potential Enhancements
In this application, we make a few assumptions about what a production version may look like, namely:
* API/services will be accessed via same-orign requests (https://)
* User input that alters a route or direction will clear/reset any shown stops
* HTTP requests for a given set of stops will need to be routed to separate page(s) to enable forward/back browser navigation that accurately reflects query history
