angular.module('foodApp')

.controller('mainController', function($scope, mainService) {
	$scope.test = "It's working!";

	$scope.getData = function() {
		mainService.getData($scope.searchTerm).then(function(data) {
			return $scope.answerData = data.data.response.data;
		}).then(function(data) {
			console.log($scope.answerData);
		})
	}

	// $scope.saveAnswer = function(label, value) {
 //    if(!$scope.data.users) {
 //      $scope.data.users = {};
 //    }
 //    if(!$scope.data.users[userId]) {
 //      $scope.data.users[userId] = {};
 //    }
 //    if(!$scope.data.users[userId].answers) {
 //      $scope.data.users[userId].answers = {};
 //    }
 //    $scope.data.users[userId].answers[label] = value;
 //  };



})