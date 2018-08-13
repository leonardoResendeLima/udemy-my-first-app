import { Component } from "@angular/core";

@Component({
	selector: 'app-server',       // Selector for component
	// selector : '[app-server]', // Selector for attribute
	// selector : '.app-server',  // Selector for classes
	templateUrl: './server.component.html'
})

export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}

}