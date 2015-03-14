angular.module('foodApp')

.controller('mainController', function($scope, mainService, yelpService) {
	$scope.test = "It's working!";

	$scope.getData = function() {
		mainService.getData($scope.searchData, $scope.searchZip).then(function(data) {
			return $scope.answerData = data.data.response.data;
		}).then(function(data) {
			console.log($scope.answerData);
			$scope.searchData = ''
			$scope.searchZip = ''
		})
	}
})