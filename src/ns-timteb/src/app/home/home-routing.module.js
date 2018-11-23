"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home.component");
var routes = [{ path: '', component: home_component_1.HomeComponent }];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUVqRCxJQUFNLE1BQU0sR0FBVyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxDQUFFLENBQUM7QUFNbEU7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQUo3QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDdEQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDckMsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9IF07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcblx0ZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7fVxuIl19