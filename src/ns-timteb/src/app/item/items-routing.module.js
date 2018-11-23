"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./items.component");
var item_detail_component_1 = require("./item-detail/item-detail.component");
var routes = [
    { path: '', component: items_component_1.ItemsComponent },
    { path: 'item/:id', component: item_detail_component_1.ItemDetailComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELDZFQUEwRTtBQUUxRSxJQUFNLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUNwRCxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGtCQUFrQjtRQUo5QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDdEQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDckMsQ0FBQztPQUNXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cdHsgcGF0aDogJycsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnaXRlbS86aWQnLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSBdLFxuXHRleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zUm91dGluZ01vZHVsZSB7fVxuIl19