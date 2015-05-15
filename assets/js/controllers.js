var app = angular.module('app', ["ngResource"])
.run(function($rootScope) {
    $rootScope.active = '';
    $rootScope.host = "tul1wwptc1.corporate.local";
    $rootScope.name = "TeamCity Production";
})
.controller('ParentController', ["$resource","$scope",function($resource,$scope){   
    $scope.host = $rootScope.host;
    $scope.name = $rootScope.name;

    $scope.$watch('active', function(newVal, oldVal, scope) {
      if (oldVal === "tul1wwptc1.corporate.local") {
            $scope.host = "tul1wwptc2.corporate.local:8111";
            $scope.name = "TeamCity SandBox";
        } else {
            $scope.host = "tul1wwptc1.corporate.local";
            $scope.name = "TeamCity Production";
        }
    });
}]); 

app.controller('ChildController', ["$resource","$scope",function($resource,$scope){
    var projectsCollection = $resource("http://{{ host }}/guestAuth/app/rest/projects");
    $scope.projects = [];
    $scope.projects = projectsCollection.query(function(){});
}]); 

