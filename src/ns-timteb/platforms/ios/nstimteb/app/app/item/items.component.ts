import { Component, OnInit } from '@angular/core';
import * as app from 'application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { Item } from './shared/item';
import { ItemService } from './shared/item.service';

@Component({
	selector: 'ns-items',
	moduleId: module.id,
	templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
	items: Item[];

	// This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
	// Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.items = this.itemService.getItems();
	}
	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
