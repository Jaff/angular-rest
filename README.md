# angular-rest-sails
Simple [Angularjs](https://angularjs.org) rest call example with [Sails](http://sailsjs.org).

The examples demonstrate angular $http and $resource calls to
rest services. To run the examples install Sails

```sh
npm install -g sails 
```

and create the server project

```sh
sails new ngSails
cd ngSails
```

in config/cors.js change 
```sh
allRoutes: true
```
generate the user api and start the server

```sh
sails generate api user
sails lift
```

from 

```sh
http://localhost:1337/user/create?name=John
```

create more users. Now clone the git repository

```sh
git clone https://github.com/pkral3/angular-rest.git
```

and open simple.html with web-browser. bstrap.html contains
an example with angularjs and bootstrap template from 
http://getbootstrap.com/examples/jumbotron/ . resource.html
is an example with $resource from angular-resource.js.
