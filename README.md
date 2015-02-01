# angular-rest
Simple Angular rest call example with Sails.

The example demonstrates angular $http calls to
rest services. To run the examples install Sails

```sh
npm install -g sails 
```

and create a project

```sh
sails new ngSails
cd ngSails
```

in config/cors.js change allRoutes: true
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
http://getbootstrap.com/examples/jumbotron/  
