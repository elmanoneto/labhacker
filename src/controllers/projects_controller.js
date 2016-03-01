app.controller('ProjectsController', function ($scope, ProjectsService) {

  $scope.projects = [];

  ProjectsService.getProjects().success(function (response) {
    for (var i in response) {
      response[i].proposals = Number(response[i].proposals);
      $scope.projects.push(response[i]);
    }
  });

  $scope.category = 'news';

  $scope.sortCategory = function (category) {
    $scope.category = category;
  }

   $scope.isActive = function (category) {
     return $scope.category === category;
   }

   $scope.order = function () {
     switch ($scope.category) {
       case 'proposals':
         return '-proposals';
         break
       case 'news':
          return '-date';
       case 'comments':
          return 'proposals';
     }
   }
});
