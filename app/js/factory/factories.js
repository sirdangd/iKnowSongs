demoApp.factory("simpleFactory", function($http) {
    var fact = {};

    fact.getNames = function() {
	var promise = $http.get("mock/data/names.json");
	return promise;
    };

    return fact;
});
