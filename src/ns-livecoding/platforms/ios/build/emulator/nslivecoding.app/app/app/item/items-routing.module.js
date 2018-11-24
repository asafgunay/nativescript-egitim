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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELDZFQUEwRTtBQUMxRSxJQUFNLE1BQU0sR0FBVTtJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLGdDQUFjLEVBQUM7SUFDcEMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQywyQ0FBbUIsRUFBQztDQUNsRCxDQUFBO0FBS0Q7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGtCQUFrQjtRQUo5QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDdEQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDckMsQ0FBQztPQUNXLGtCQUFrQixDQUFFO0lBQUQseUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50JztcbmNvbnN0IHJvdXRlczogUm91dGVzPSBbXG4gICB7cGF0aDogJycsIGNvbXBvbmVudDpJdGVtc0NvbXBvbmVudH0sXG4gICB7cGF0aDonaXRlbS86aWQnLCBjb21wb25lbnQ6SXRlbURldGFpbENvbXBvbmVudH1cbl1cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcblx0ZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc1JvdXRpbmdNb2R1bGV7fVxuIl19