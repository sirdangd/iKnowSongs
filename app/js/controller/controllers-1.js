demoApp.controller("simpleController", ["$scope", "simpleFactory",
function ($scope, simpleFactory) {
	$scope.names = [];

	function init() {
		var promise = simpleFactory.getNames();
		promise.then(function (response) {
			// response {data, status, headers, config}
			$scope.names = response.data.names;
		}, function (response) {
			console.log("error data " + response.data
				+ "error status " + response.status
				+ "error header " + response.headers
				+ "error config " + response.config);
		});
	};

	$scope.addName = function () {
		console.log("AddName");
		$scope.names.push({ "fn": $scope.newName.fname, "ln": $scope.newName.lname });
	};

	init();

}]);

demoApp.controller("tabsController", ["$scope", "$timeout", function ($scope, $timeout) {
	$scope.myName = "Danny";
/*	$timeout(function () {
		$scope.name = "Serjik";
	}, 1000);*/

	$scope.list = ["Danny", "Liana", "Serjik", "Anna"];

	$scope.songs = {
		"song1": "Hello",
		"song2": "Bye"
	}

	$scope.showName = function () {
		console.log("Button Clicked");
		console.log("Value of name is " + $scope.myName);
	}

	$scope.addSong = function () {
		$scope.songs[$scope.singer] = $scope.song;
	}

	$scope.showHide = function () {
		$scope.myName = $scope.myName === "Danny" ? "Not Danny" : "Danny";
	}

}]);

demoApp.controller("iKnowSongsController", ["$scope", function ($scope) {
	$scope.recordName = "Shape of You";
	$scope.artistName = "Ed Sheeran";
	$scope.capo = "Capo 2";
	$scope.chords = "Bm, Em, G, A";
	$scope.imgSrc = "learningAngular/app/images/edsheerandivide.jpg";




	$scope.myValue = true;
	$scope.myValue2 = false;
	$scope.myValue3 = true;
	$scope.myValue4 = false;
	$scope.myValue5 = true;
	$scope.myValue6 = true;
	$scope.myValue7 = false;
	$scope.myValue8 = false;
	$scope.myValue9 = true;
	$scope.myValue10 = false;

	$scope.toggleNames = function () {
		if ($scope.myValue === true) {
			$scope.myValue = false;
			$scope.myValue2 = true;
			$scope.myValue3 = false;
			$scope.myValue4 = true;
			$scope.myValue5 = false;
			$scope.myValue6 = false;
			$scope.myValue7 = true;
			$scope.myValue8 = true;
			$scope.myValue9 = false;
			$scope.myValue10 = true;
		}
		else {
			$scope.myValue = true;
			$scope.myValue2 = false;
			$scope.myValue3 = true;
			$scope.myValue4 = false;
			$scope.myValue5 = true;
			$scope.myValue6 = true;
			$scope.myValue7 = false;
			$scope.myValue8 = false;
			$scope.myValue9 = true;
			$scope.myValue10 = false;
		}

	}

	$scope.newSong = function () {
		console.log("button was pressed");
	}

}]);
