import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
	{ path: 'items', loadChildren: '~/app/item/items.module#ItemsModule' },
    { path: 'home', loadChildren: '~/app/home/home.module#HomeModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }