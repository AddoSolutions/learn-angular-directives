var servers = [{
	"name": "Planned Financial",
	"cpu": 2,
	"ram": 25,
	"ram": 5,
	"uptime": "5 months, 1 week"
},
	{
		"name": "Boilerplate: NodeJS",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "6 months"
	},
	{
		"name": "nine-oh-seven",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "6 months"
	},
	{
		"name": "Boilerplate: Magento",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "6 months"
	},
	{
		"name": "Boilerplate: PHP (Nginx or Apache)",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "5 months, 2 weeks"
	},
	{
		"name": "MyPraize Local",
		"cpu": 2,
		"ram": 25,
		"ram": 5,
		"uptime": "5 months"
	},
	{
		"name": "DotCMS Local Disk",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "5 months"
	},
	{
		"name": "Test Cirros",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "4 months, 3 weeks"
	},
	{
		"name": "LSH",
		"cpu": 2,
		"ram": 25,
		"ram": 5,
		"uptime": "4 months"
	},
	{
		"name": "Guild CPO",
		"cpu": 2,
		"ram": 25,
		"ram": 5,
		"uptime": "4 months"
	},
	{
		"name": "Nick Dev",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "3 months, 4 weeks"
	},
	{
		"name": "mdjd-dev",
		"cpu": 2,
		"ram": 25,
		"ram": 2,
		"uptime": "3 months, 2 weeks"
	},
	{
		"name": "Nicks Slackbot",
		"cpu": 2,
		"ram": 5,
		"ram": 2,
		"uptime": "1 month, 3 weeks"
	},
	{
		"name": "MyPraize Cache Crawl",
		"cpu": 4,
		"ram": 50,
		"ram": 8,
		"uptime": "2 weeks, 1 day"
	},
	{
		"name": "Root Integration",
		"cpu": 2,
		"ram": 25,
		"ram": 5,
		"uptime": "2 weeks"
	},
	{
		"name": "Microservices",
		"cpu": 4,
		"ram": 50,
		"ram": 8,
		"uptime": "1 week, 6 days"
	}];

var activity = [
	{
		type:"Restart",
		date: new Date(),
		server:servers[2]
	},
	{
		type:"Shutdown",
		date: new Date(),
		server:servers[4]
	},
	{
		type:"Cold Restart",
		date: new Date(),
		server:servers[1]
	},
	{
		type:"Create",
		date: new Date(),
		server:servers[6]
	},
	{
		type:"Why",
		date: new Date(),
		server:servers[3]
	},
	{
		type:"Are",
		date: new Date(),
		server:servers[2]
	},
	{
		type:"You Still",
		date: new Date(),
		server:servers[5]
	},
	{
		type:"Reading",
		date: new Date(),
		server:servers[4]
	},
	{
		type:"This",
		date: new Date(),
		server:servers[7]
	},
];
var config = {
	servers: servers,
	activity: activity
}


angular.module('lightspeedHosting', [])


	.controller('DashboardCtrl', ['$scope', function ($scope) {
		$scope.name = "Nick";
	}])




;