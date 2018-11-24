import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'Home',
	moduleId: module.id,
	templateUrl: './home.component.html',
	styleUrls: [ 'style.css' ]
})
export class HomeComponent implements OnInit {
	constructor() {
		// Use the component constructor to inject providers.
	}

	ngOnInit(): void {
		// Init your component properties here.
	}
}
