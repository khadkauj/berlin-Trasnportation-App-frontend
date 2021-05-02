Live Demo: <a href="https://khadkauj.github.io/berlin-Trasnportation-App-frontend/" > Berlin Transportation APP- Guide </a>

Stacks used : ReactJs, Express, Axios.

This repository contains the frontend part of application(reactjs.) The corresponding express backend is available
at git repository: https://github.com/khadkauj/berlin-Trasnportation-App-expressBackend

***********************************************************************************************

I was asked to do this small project where the task is to:

Create a simple web app that uses the public transport API of Berlin
(https://v5.vbb.transport.rest/api.html) to search through stops. When showing results, show
which transport options are available in the resulting stop(s). Example transport options are:
bus/tram/ferry/suburban/express/regional.
  
    ➡The hafas client method(https://github.com/public-transport/hafas-client/blob/5/docs/readme.md)
    which gets all data for us is written in express application. Axios is used to fetch corresponding
    data using the rest APIs written in the express application and use in reactJs. On providing input
    fields, user can see matching stops and the availability of corresponding transport options in a table.

If the user selects a stop, route the user to the detail page of that stop where the user can see
the departures from the stop. Use the API provided results to show as much useful information
about the selected stop and its departures as possible to make the app helpful.

    ➡On clicking "see more" users are routed to another component.
    Depending on available data, user can see all departures
    from their selected stop with scheduled date, platform number 
    and mode of transportation.

Users should be able to mark some stops favorite so that they can quickly access them instead
of searching every time. This information needs to be client-side only.

    ➡ Users can also mark stops as favourite, and if it has any
    availability it will be rendered in Favourite stops component.
    
    ➡ In the application, I engineered local storage
    to store client-side data. The data, however, will be specific to 
    the browser and not the user and get erased if the user clears the local
    storage. We could have instead used firebase Gmail authentication and 
    firestore to store the data really  from the client-side perspective,
    but I though it will be unnecessary.
