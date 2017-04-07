# installation
in a shell:
* `npm i`
* `dotnet restore`

# launch the server
* Open the solution (server.sln)
* Run the web project (CTRL+F5)

# launch the client and see the issue
* In index.js, the 2nd http request should be commented
```javascript
// ******  Should be commented at startup ********
//httpGetAsync('api/Home/action1?toto=boom', handler);
```
* start the client: in a shell: `npm start`
* navigate to http://localhost:1234 (the port is defined in devServer.js)
* In index.js, uncomment the index.js
* auto-refresh... and boom! (authentication popup)
