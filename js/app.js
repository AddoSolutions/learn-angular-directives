var servers = [
	{
		"name": "Planned Financial",
		"cpu": 2,
		"disk": 25,
		"ram": 5,
		"uptime": "5 months, 1 week",
		state: 1
	},
	{
		"name": "Boilerplate: NodeJS",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "6 months",
		state: 1

	},
	{
		"name": "nine-oh-seven",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "6 months",
		state: 0
	},
	{
		"name": "Boilerplate: Magento",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "6 months",
		state: 2
	},
	{
		"name": "Boilerplate: PHP (Nginx or Apache)",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "5 months, 2 weeks",
		state: 3
	},
	{
		"name": "MyPraize Local",
		"cpu": 2,
		"disk": 25,
		"ram": 5,
		"uptime": "5 months",
		state: 1
	},
	{
		"name": "DotCMS Local Disk",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "5 months",
		state: 1
	},
	{
		"name": "Test Cirros",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "4 months, 3 weeks",
		state: 1
	},
	{
		"name": "LSH",
		"cpu": 2,
		"disk": 25,
		"ram": 5,
		"uptime": "4 months",
		state: 1
	},
	{
		"name": "Guild CPO",
		"cpu": 2,
		"disk": 25,
		"ram": 5,
		"uptime": "4 months",
		state: 1
	},
	{
		"name": "Nick Dev",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "3 months, 4 weeks",
		state: 1
	},
	{
		"name": "mdjd-dev",
		"cpu": 2,
		"disk": 25,
		"ram": 2,
		"uptime": "3 months, 2 weeks",
		state: 1
	},
	{
		"name": "Nicks Slackbot",
		"cpu": 2,
		"disk": 5,
		"ram": 2,
		"uptime": "1 month, 3 weeks",
		state: 1
	},
	{
		"name": "MyPraize Cache Crawl",
		"cpu": 4,
		"disk": 50,
		"ram": 8,
		"uptime": "2 weeks, 1 day",
		state: 1
	},
	{
		"name": "Root Integration",
		"cpu": 2,
		"disk": 25,
		"ram": 5,
		"uptime": "2 weeks",
		state: 1
	},
	{
		"name": "Microservices",
		"cpu": 4,
		"disk": 50,
		"ram": 8,
		"uptime": "1 week, 6 days",
		state: 1
	}];

var activity = [
	{
		type: "Restart",
		date: new Date(),
		server: servers[2]
	},
	{
		type: "Shutdown",
		date: new Date(),
		server: servers[4]
	},
	{
		type: "Cold Restart",
		date: new Date(),
		server: servers[1]
	},
	{
		type: "Create",
		date: new Date(),
		server: servers[6]
	},
	{
		type: "Why",
		date: new Date(),
		server: servers[3]
	},
	{
		type: "Are",
		date: new Date(),
		server: servers[2]
	},
	{
		type: "You Still",
		date: new Date(),
		server: servers[5]
	},
	{
		type: "Reading",
		date: new Date(),
		server: servers[4]
	},
	{
		type: "This",
		date: new Date(),
		server: servers[7]
	},
];
var config = {
	servers: servers,
	activity: activity,
	states: [
		"Shutdown",
		"Running",
		"Paused",
		"Error"
	]
}


angular.module('lightspeedHosting', [])


	.controller('DashboardCtrl', ['$scope', function ($scope) {
		$scope.name = "Nick";
		$scope.config = config;
	}])






	.directive('serverItem', function () {
		return {

			restrict: 'E', // Any/All of A, E, C, or M for attribute, element, class, or comment respectively

			scope: {
				server: '='
			},

			template: `

				<div>
					<div class="state" ng-bind="getState()"></div>

					<h4 class="list-group-item-heading" ng-bind="server.name"></h4>
					<p class="list-group-item-text">
						<span>CPUs: {{server.cpu}}</span>
						<span>Disk Size: {{server.disk}}</span>
						<span>RAM: {{server.ram}}</span>
						<span>UpTime: {{server.uptime}}</span>
					</p>

				</div>

			`,


			link: function (scope, element, attrs) {
				element.addClass("list-group-item")
			},

			controller: ['$scope', function ($scope) {

				$scope.getState = function () {
					return config.states[$scope.server.state];
				}

			}]

		};
	})
























	.directive('activityItem', function () {
		return {

			restrict: 'E', // Any/All of A, E, C, or M for attribute, element, class, or comment respectively

			scope: {
				activity: '='
			},

			template: `

				<div>
					<h4 class="list-group-item-heading" ng-bind="activity.type"></h4>
					<p class="list-group-item-text">
						<span ng-bind="activity.server.name"></span>
					</p>

				</div>

			`,


			link: function (scope, element, attrs) {
				element.addClass("list-group-item")
			},

			controller: ['$scope', function ($scope) {

				$scope.getState = function () {
					return config.states[$scope.server.state];
				}

			}]

		};
	})


;