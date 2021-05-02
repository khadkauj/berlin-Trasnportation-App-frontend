Live Demo: <a href="https://khadkauj.github.io/berlin-Trasnportation-App-frontend/" > Berlin Transportation APP- Guide </a>

I was asked to do this small project where the task is to:

Create a simple web app that uses the public transport API of Berlin
(https://v5.vbb.transport.rest/api.html) to search through stops. When showing results, show
which transport options are available in the resulting stop(s). Example transport options are:
bus/tram/ferry/suburban/express/regional.
  
    ➡hafas client method(https://github.com/public-transport/hafas-client/blob/5/docs/readme.md) was used to retrieve data. 
     We use an express application to query our data and provide it to our ReactJs application which then displays all our data
    in a table

If the user selects a stop, route the user to the detail page of that stop where the user can see
the departures from the stop. Use the API provided results to show as much useful information
about the selected stop and its departures as possible to make the app helpful.

    ➡On clicking "see more" users are routed to another component. Depending on available data, user can see all departures
    from their selected stop with scheduled date, platform number and mode of transportation.

Users should be able to mark some stops favorite so that they can quickly access them instead
of searching every time. This information needs to be client-side only.

    ➡Users can also mark the stops as favourite, and if it has any availability it will be rendered in Favourite stops
      component. These datas are stores in local storage; I did some engineering to set the array of stops in local storage.
    ➡ We might have also used firebase or similar services with login/logout functionalities where users can save all his data
    speicific to them, but I though it will be unnecessary.


Stacks used : ReactJs, Express, Axios.
