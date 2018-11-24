import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsRoutingModule } from './items-routing.module';


@NgModule({
	imports: [ NativeScriptCommonModule, ItemsRoutingModule ],
	declarations: [ ItemsComponent, ItemDetailComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class ItemsModule {}