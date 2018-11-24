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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELDZFQUEwRTtBQUUxRSxJQUFNLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQzNELENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBSjlCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtZQUN0RCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBRTtTQUNyQyxDQUFDO09BQ1csa0JBQWtCLENBQUc7SUFBRCx5QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiAnJywgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICdpdGVtLWRldGFpbC86aWQnLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSBdLFxuXHRleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zUm91dGluZ01vZHVsZSB7fVxuIl19