angular.module('foodApp')

.service('mainService', function($http, $q) {

	this.getData = function(searchTerm, searchZip) {
		// return $http.get('http://api.v3.factual.com/t/restaurants-us?q=' + searchTerm + '&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
		return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"cuisine":{"$bw":"' + searchTerm + '"}, "postcode":{"$in":["' + searchZip + '"]}}&include_count=true&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	}
	
})