import app from '/lib/app';

SetModule('lightspeedHosting');

/*
@State({
	name: 'specials/index',
	url: '/specials',
	defaultRoute: true,
	html5Mode: true,
	findme: "abc123"
})
*/
@Component({selector: 'server-item'})
@View({
	//language=HTML
	template: `

				<div>
					<div class="state" ng-bind="getState()"></div>

					<h4 class="list-group-item-heading" server-control="server">{{server.name}}</h4>
					<p class="list-group-item-text">
						<span>CPUs: {{server.cpu}}</span>
						<span>Disk Size: {{server.disk}}</span>
						<span>RAM: {{server.ram}}</span>
						<span>UpTime: {{server.uptime}}</span>
					</p>

				</div>
	`
})
@Inject(['$scope'])
export default class SpecialIndex {

	constructor($scope) {

		$scope.getState = function () {
			return config.states[$scope.server.state];
		}

	}

}
