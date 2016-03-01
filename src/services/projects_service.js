app.factory('ProjectsService', function ($q, $http) {
  var deferred = $q.defer();
  var projects = $http.get('http://localhost:3000/src/services/data.json')
  .success(function (response) {
    return response;
  })
  .error(function (response) {
    console.log(response);
  })

  return {
    getProjects: function () {
      return projects;
    }
  }
})
