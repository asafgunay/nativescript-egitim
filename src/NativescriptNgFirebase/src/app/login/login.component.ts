import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../shared/user.model";

@Component({
	selector: "app-login",
	moduleId: module.id,
	templateUrl: "./login.component.html",
	styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {
	isLoggingIn = true;
	user: User;
	processing = false;
	@ViewChild("password") password: ElementRef;
	@ViewChild("confirmPassword") confirmPassword: ElementRef;

	constructor(private page: Page, private router: Router) {
		this.page.actionBarHidden = true;
		this.user = new User();
		// this.user.email = "foo2@foo.com";
		// this.user.password = "foo";
		// this.processing = true;
	}
	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
	}
}
