angular.module('foodApp')

.service('mainService', function($http, $q, answerService) {

	this.checkData = function(postcode) {
		return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"$or":[{"locality":{"$eq":"' + postcode + '"}},{"postcode":{"$eq":"' + postcode + '"}}]}&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	};

})