import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
const routes: Routes= [
   {path: '', component:ItemsComponent},
   {path:'item-detail/:id', component:ItemDetailComponent}
]
@NgModule({
	imports: [ NativeScriptRouterModule.forChild(routes) ],
	exports: [ NativeScriptRouterModule ]
})
export class ItemsRoutingModule{}
