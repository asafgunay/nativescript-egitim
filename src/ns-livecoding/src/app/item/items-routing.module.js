"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./items.component");
var item_detail_component_1 = require("./item-detail/item-detail.component");
var routes = [
    { path: '', component: items_component_1.ItemsComponent },
    { path: 'item-detail/:id', component: item_detail_component_1.ItemDetailComponent }
];
var ItemsRoutingModule = /** @class */ (function () {
    function ItemsRoutingModule() {
    }
    ItemsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ItemsRoutingModule);
    return ItemsRoutingModule;
}());
exports.ItemsRoutingModule = ItemsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELDZFQUEwRTtBQUMxRSxJQUFNLE1BQU0sR0FBVTtJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLGdDQUFjLEVBQUM7SUFDcEMsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFDLDJDQUFtQixFQUFDO0NBQ3pELENBQUE7QUFLRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsa0JBQWtCO1FBSjlCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtZQUN0RCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBRTtTQUNyQyxDQUFDO09BQ1csa0JBQWtCLENBQUU7SUFBRCx5QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXM9IFtcbiAgIHtwYXRoOiAnJywgY29tcG9uZW50Okl0ZW1zQ29tcG9uZW50fSxcbiAgIHtwYXRoOidpdGVtLWRldGFpbC86aWQnLCBjb21wb25lbnQ6SXRlbURldGFpbENvbXBvbmVudH1cbl1cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcblx0ZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc1JvdXRpbmdNb2R1bGV7fVxuIl19