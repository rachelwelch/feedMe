angular.module('foodApp')

.service('mainService', function($http, $q, answerService) {

	// this.getData = function(searchTerm) {
	// 	// return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"cuisine":{"$bw":"' + searchTerm + '"}, "postcode":{"$in":["' + searchZip + '"]}}&include_count=true&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	// 	return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"$or":[{"postcode":{"$eq":"' + searchTerm + '"}},{"locality":{"$bw":"' + searchTerm + '"}}]}&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	// }
	// this.checkData = function() {
	// 	var answers = {};
	// 	console.log(answers);
	// }

	// this.getData = function(zip) {
	// 	return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"$and":[{"postcode":{"$eq":"' + zip + '"},"price":{"$eq":1}}]}&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	// }

	this.checkData = function(postcode) {
		return $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"$or":[{"locality":{"$eq":"' + postcode + '"}},{"postcode":{"$eq":"' + postcode + '"}}]}&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
		// var priceData = $http.get('http://api.v3.factual.com/t/restaurants-us?filters={"$or":[{"price":{"$eq":"' + price + '"}},{"price":{"$blank":true}}]}&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
		// return {
		// 	postcode: postcodeData, 
		// 	price: priceData}
	};

	// this.getData = function() {
	// 	return $http.get('http://api.v3.factual.com/t/restaurants-us&KEY=s2qyrTtJznORR2vImCXzzwycax5EPnvDgzRqTzex');
	// }

})


//,"price":{"$eq":"' + price + '"}