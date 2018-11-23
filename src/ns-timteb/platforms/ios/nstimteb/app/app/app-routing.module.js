"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'home', loadChildren: '~/app/home/home.module#HomeModule' },
    { path: 'items', loadChildren: '~/app/item/items.module#ItemsModule' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxJQUFNLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtDQUN0RSxDQUFDO0FBTUY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDckMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2l0ZW1zJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcblx0eyBwYXRoOiAnaG9tZScsIGxvYWRDaGlsZHJlbjogJ34vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZScgfSxcblx0eyBwYXRoOiAnaXRlbXMnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9pdGVtL2l0ZW1zLm1vZHVsZSNJdGVtc01vZHVsZScgfVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIF0sXG5cdGV4cG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIl19