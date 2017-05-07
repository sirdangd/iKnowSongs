//var demoApp = angular.module("demoApp", ["ngRoute", "appConfig", "controller/simpleController", "service/simpleFactory"]);
var demoApp = angular.module("demoApp", ["ngRoute"]);

demoApp.appConfig = {
	"views": [{
		"viewUrl": "/view1",
		"routeConfig": {
			"controller": "simpleController",
			"templateUrl": "app/view/view1.html"
		}
	},
	{
		"viewUrl": "/iKnowSongsHome",
		"routeConfig": {
			"controller": "iKnowSongsHomeController",
			"templateUrl": "app/view/iKnowSongsHome.html"
			}
	},
	{
		"viewUrl": "/songTabs",
		"routeConfig": {
			"controller": "tabsController",
			"templateUrl": "app/view/songTabs-1.html"
			}
	},
	{
		"viewUrl": "/view2",
		"routeConfig": {
			"controller": "simpleController",
			"templateUrl": "app/view/view2.html"
		}
	},
	{
		"viewUrl": "/iKnowSongs",
		"routeConfig": {
			"controller": "iKnowSongsController",
			"templateUrl": "app/view/iKnowSongs.html"
		}
	}

	],
	"defaultViewUrl": "/iKnowSongs"
};

demoApp.config(function ($routeProvider) {
	var config = demoApp.appConfig;
	config.views.forEach(function (view) {
		$routeProvider.when(view.viewUrl, view.routeConfig);
	});
	$routeProvider.otherwise({ "redirectTo": config.defaultViewUrl });
});
