# angular-rest
Simple Angular rest call example with Sails.

The example demonstrates angular $http calls to
rest services. To run the examples create a Sails project

sails new ngSails
cd ngSails

in config/cors.js change allRoutes: true
generate the user api and start the server

sails generate api user
sails lift

from http://localhost:1337/user/create?name=John create 
more users. Now clone the git repository

git clone https://github.com/pkral3/angular-rest.git

and open simple.html with Browser. bstrap.html contains
an example with angularjs and bootstrap. 
