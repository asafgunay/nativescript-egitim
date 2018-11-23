"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { ItemsComponent } from './item/items.component';
// import { ItemDetailComponent } from './item/item-detail.component';
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: '~/app/home/home.module#HomeModule' }
    // { path: "", redirectTo: "/items", pathMatch: "full" },
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSwyREFBMkQ7QUFDM0Qsc0VBQXNFO0FBRXRFLElBQU0sTUFBTSxHQUFXO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTtJQUNuRSx5REFBeUQ7SUFDekQsZ0RBQWdEO0lBQ2hELHdEQUF3RDtDQUN4RCxDQUFDO0FBTUY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDckMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIGltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW1zLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuXHR7IHBhdGg6ICdob21lJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlJyB9XG5cdC8vIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuXHQvLyB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuXHQvLyB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcykgXSxcblx0ZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=