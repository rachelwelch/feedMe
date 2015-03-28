angular.module('foodApp')

.controller('mainController', function($scope, mainService, answerService) {

 	$scope.saveAnswer = function(data, value) {
 		if (data === 'zip') {
 			answerService.answers.push({
 				postcode: value
 			})
 		} else if (data === 'price') {
 			answerService.answers.push({
 				price: value
 			})
 		} else if (data === 'cuisine') {
 			answerService.answers.push({
 				cuisine: value
 			})
 		}
 		console.log(answerService.answers)
 	}

 	$scope.reset = function() {
 		answerService.answers = []
 	}

 	$scope.checkForMatch = function() {
 		var answers = answerService.answers,
 		postcode, price, cuisine;
 		for(var i = 0; i < answers.length; i++) {
 			if(answers[i].postcode) {
 				postcode = answers[i].postcode;
 			} else if (answers[i].price) {
 				price = answers[i].price;
 			} else if (answers[i].cuisine) {
 				cuisine = answers[i].cuisine;
 			}
 		}

 		mainService.checkData(postcode).then(function(data) {
 			$scope.answerData = [];
 			$scope.answerDataFinal = [];
 			$scope.matchingData = (data.data.response.data);

 			for (var j = 0; j < $scope.matchingData.length; j++) {
 				if(!$scope.matchingData[j].price) {
 					$scope.answerData.push($scope.matchingData[j])
 				} else if ($scope.matchingData[j].price === price) {
 					$scope.answerData.push($scope.matchingData[j])
 				}
 			}

 			for (var k = 0; k < $scope.answerData.length; k++) {
 				for (var b = 0; b < $scope.answerData[k].cuisine.length; b++) {
 					if ($scope.answerData[k].cuisine[b] === cuisine) {
 						$scope.answerDataFinal.push($scope.answerData[k])
 					}
 				}
 			}
 		})
 	}

 	$scope.cuisineOptions = ['American', 'Chinese', 'Italian', 'Mexican', 'European', 'Thai', 'Indian', 'Seafood', 'Japanese'];



})