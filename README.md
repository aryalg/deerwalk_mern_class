## Deerwalk MERN Class


Middlewares:

- When client hit some api (req) -> (Processing) [We introduce various middleware to process that request also manuplate it] -> (res)

- There can be chain of middleware. Req => Middleware1 -> next() -> Middleware2 ..... (we can have multiple middleware) -> Req (Req to Res cycle is over).

- We apply middleware with `app.use(middlewareFunction)`



### You Assignments For 3 Feb
1. Study HTTP Status Codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

2. Study and experiment with npm package: 
https://www.npmjs.com/package/express-async-handler

3. Error Handling Middleware
https://expressjs.com/en/guide/error-handling.html


### Questions Need to Resolve?
Adding additional field to mongoose returned data (obj) not updating that doc.