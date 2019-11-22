# Express mircoservice template

- Express template with swagger-express-middleware to handle request verification
- Docker file included to use docker
- Config lib included to manage your variables
- Basic Router configuration
- EsLint configuration included for basic lint rules


####To add new Routes just add them in the routes.js file like this:

```javascript
// Inside the function addRoutes you can add them like this:
addRoutes(app) {
	// Note the this.baseUrl, it's used to include in the path /api/v1 for API version
	app.use(this.baseUrl, YourRouter);
  }
```
