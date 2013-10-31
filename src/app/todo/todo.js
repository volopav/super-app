angular.module('SuperApp.todo', [
  'ui.state'
])

.config(function config($stateProvider) {
  $stateProvider.state( 'todo', {
    url: '/todo',
    views: {
      "main": {
        controller: 'TodoCtrl',
        templateUrl: 'todo/todo.tpl.html'
      }
    },
    data: {pageTitle: 'Todo'}
  });
})

.controller( 'TodoCtrl', function($scope) {
    $scope.tasks = [];

    $scope.addTask = function() {
      if($scope.newTask) {
        $scope.tasks.push({ description: $scope.newTask, done: false });
        $scope.newTask = '';
      }
    };

    $scope.remaining = function() {
      var count = 0;

      angular.forEach($scope.tasks, function(task) {
        count += task.done ? 0 : 1;
      });

      return count;
    };

    $scope.deleteCompleted = function() {
      angular.forEach($scope.tasks, function(task, index) {
        if(task.done) {
          $scope.tasks.splice(index, 1);
        }
      });

    };
})

.directive('field', function() {
  return {
    restrict: 'E',
    templateUrl: 'todo/field.tpl.html'
  };
})

.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'todo/tasks.tpl.html'
  };
});
