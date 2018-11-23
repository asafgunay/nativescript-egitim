"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['style.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFTbkM7SUFDQztRQUNDLHFEQUFxRDtJQUN0RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNDLHVDQUF1QztJQUN4QyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0MsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQVpXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFFLFdBQVcsQ0FBRTtTQUMxQixDQUFDOztPQUNXLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdIb21lJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJ3N0eWxlLmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuXHRcdHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuXHR9XG59XG4iXX0=