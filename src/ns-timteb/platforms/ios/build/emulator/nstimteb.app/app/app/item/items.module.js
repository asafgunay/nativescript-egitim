"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var items_routing_module_1 = require("./items-routing.module");
var items_component_1 = require("./items.component");
var item_detail_component_1 = require("./item-detail/item-detail.component");
var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, items_routing_module_1.ItemsRoutingModule],
            declarations: [items_component_1.ItemsComponent, item_detail_component_1.ItemDetailComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSwrREFBNEQ7QUFDNUQscURBQW1EO0FBQ25ELDZFQUEwRTtBQU8xRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxXQUFXO1FBTHZCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFFLGlDQUF3QixFQUFFLHlDQUFrQixDQUFFO1lBQ3pELFlBQVksRUFBRSxDQUFFLGdDQUFjLEVBQUUsMkNBQW1CLENBQUU7WUFDckQsT0FBTyxFQUFFLENBQUUsdUJBQWdCLENBQUU7U0FDN0IsQ0FBQztPQUNXLFdBQVcsQ0FBRztJQUFELGtCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSXRlbXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9pdGVtcy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBJdGVtc1JvdXRpbmdNb2R1bGUgXSxcblx0ZGVjbGFyYXRpb25zOiBbIEl0ZW1zQ29tcG9uZW50LCBJdGVtRGV0YWlsQ29tcG9uZW50IF0sXG5cdHNjaGVtYXM6IFsgTk9fRVJST1JTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zTW9kdWxlIHt9XG4iXX0=