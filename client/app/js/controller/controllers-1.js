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

	$scope.songs = [];

	$scope.songs.push({
		recordName: "Shape of You",
		artistName: "Ed Sheeran",
		capo: "Capo 2",
		chords: "Bm, Em, G, A",
		imgSrc: "app/images/edsheerandivide.jpg"
	});

	$scope.editMode = false;

	$scope.toggleNames = function () {
		$scope.editMode = !$scope.editMode;
	}

	$scope.newSong = function () {
		if ($scope.addMode == false) {
			$scope.addMode = true;
		}else {
			$scope.addMode = false;
		}

	}

	$scope.saveNewSong = function () {
			$scope.addMode = false;
			$scope.songs.push({
				recordName: $scope.newRecordName,
				artistName: $scope.newArtistName,
				capo: $scope.newCapo,
				chords: $scope.newChords,
				imgSrc: $scope.newImgSrc
			});
	}

	$scope.removeSong = function (index) {
		var spliced = $scope.songs.splice(index,1);
		console.log(spliced);
	}

}]);
