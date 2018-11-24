import { Component, OnInit, ViewChild } from '@angular/core';
import * as app from 'application';
import { RouterExtensions } from 'nativescript-angular/router';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
@Component({
	selector: 'ns-app',
	moduleId: module.id,
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	private _sideDrawerTransition: DrawerTransitionBase;

	constructor(private routerExtensions: RouterExtensions) {
		// Use the component constructor to inject services.
	}

	ngOnInit(): void {
		this._sideDrawerTransition = new SlideInOnTopTransition();
	}

	get sideDrawerTransition(): DrawerTransitionBase {
		return this._sideDrawerTransition;
	}
}
