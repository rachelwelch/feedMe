angular.module('foodApp')

.controller('mainController', function($scope, mainService, answerService) {
	$scope.test = "It's working!";

	// $scope.getData = function() {
	// 	mainService.getData($scope.searchTerm).then(function(data) {
	// 		return $scope.answerData = data.data.response.data;
	// 	}).then(function(data) {
	// 		console.log($scope.answerData);
	// 	})
	// }

	// $scope.getData = function() {
 //    	mainService.getData($scope.zipData).then(function(data) {
 //    		console.log(data);
 //    	})
 //  }

 	$scope.saveAnswer = function(data, value) {
 		if (data === 'zip') {
 			answerService.answers.push({
 				postcode: value
 			})
 		} else if (data === 'price') {
 			answerService.answers.push({
 				price: value
 			})
 		}
 		console.log(answerService.answers)
 	}

 	$scope.checkForMatch = function() {
 		var answers = answerService.answers,
 		postcode, price;
 		for(var i = 0; i < answers.length; i++) {
 			if(answers[i].postcode) {
 				postcode = answers[i].postcode;
 			} else if (answers[i].price) {
 				price = answers[i].price;
 			}
 		}
 		console.log(postcode)
 		mainService.checkData(postcode, price).then(function(data) {
 			$scope.answerData = [];
 			$scope.matchingData = (data.data.response.data);
 			console.log($scope.matchingData)

 			for (var j = 0; j < $scope.matchingData.length; j++) {
 				if(!$scope.matchingData[j].price) {
 					$scope.answerData.push($scope.matchingData[j])
 				} else if ($scope.matchingData[j].price === price) {
 					$scope.answerData.push($scope.matchingData[j])
 				}
 			}
 			// $scope.postcodeData = data.postcode;
 			// console.log($scope.postcodeData)
 		})
		// console.log(mainService.checkData(answerService.answers))
 	}

 	// $scope.checkForMatch = function() {
 	// 	var answers = answerService.answers,
 	// 	postcode, price;
 	// 	for(var i = 0; i < answers.length; i++) {
 	// 		answers[i].postcode = postcode;
 	// 		answers[i].price = price;
 	// 	}
 	// 	mainService.getData().then(function(data) {
 	// 		console.log(data);
 	// 	})
 	// }



})