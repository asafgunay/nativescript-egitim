"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, home_routing_module_1.HomeRoutingModule],
            declarations: [home_component_1.HomeComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQU9qRDtJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBTHRCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFFLGlDQUF3QixFQUFFLHVDQUFpQixDQUFFO1lBQ3hELFlBQVksRUFBRSxDQUFFLDhCQUFhLENBQUU7WUFDL0IsT0FBTyxFQUFFLENBQUUsdUJBQWdCLENBQUU7U0FDN0IsQ0FBQztPQUNXLFVBQVUsQ0FBRztJQUFELGlCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBIb21lUm91dGluZ01vZHVsZSBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgSG9tZUNvbXBvbmVudCBdLFxuXHRzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHt9Il19