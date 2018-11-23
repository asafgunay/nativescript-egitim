import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { UserService } from "./shared/services/user.service";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [ NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpClientModule, AppRoutingModule ],
	declarations: [ AppComponent, LoginComponent ],
	providers: [ UserService ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
