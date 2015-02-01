
function UserController($scope, $http) {
$http.get( 
  'http://localhost:1337/user').
  success(function(data, status, headers, config) {
    $scope.users = data;
  }).
  error(function(data, status, headers, config) {
    alert('error');
  });
}
