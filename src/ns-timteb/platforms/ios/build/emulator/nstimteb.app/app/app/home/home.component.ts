import { Component, OnInit } from '@angular/core';
import * as app from 'application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: 'Home',
	moduleId: module.id,
	templateUrl: './home.component.html',
	styleUrls: [ 'style.css' ]
})
export class HomeComponent implements OnInit {
	constructor(private routerExtensions: RouterExtensions) { }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

	ngOnInit(): void {
		// Init your component properties here.
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
