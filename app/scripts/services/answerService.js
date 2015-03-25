angular.module('foodApp')

.service('answerService', function($http) {
	var service = {
		answers: []
	}
	return service;
})