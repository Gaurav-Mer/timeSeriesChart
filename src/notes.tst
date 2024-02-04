CORS is a safety measurement for the api that mean not giving permission to all request to get the resoure
if both frontend and backend are on same port with same orgin then will not get cors error
If origin change if throws error of CORS even if the port change it throws error;

CORS can be handled in both frontend and backend 
1: IN BACKEND  => make frontEnd url as whitelist for example in node js ==>  app.use((cors{orgin:["https://llocalhpst..."]});

2: IN FRONTEND => Apply proxy (proxy in vite);
  => package.json in case of cra add proxy : "https://localhost" //do google to check how to do proxy in cra 
  => we have VITE =>  vite,  config.js => add server 
     => proxy : { 
        api: "http://localhost:300"  //server url
      }

 example => fetch("/api/getTodos");  => here it means that api ke starting m add kar do "http://localhost:3000" OR server url  but it is must to have "/api/..." in front of api call 
 here it means that proxy add kr do form the url this 



