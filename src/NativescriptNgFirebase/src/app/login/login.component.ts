import { Component, ElementRef, ViewChild } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../shared/user.model";
import { UserService } from "../shared/services/user.service";

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

	constructor(private page: Page, private userService: UserService, private router: Router) {
		this.page.actionBarHidden = true;
		this.user = new User();
		// this.user.email = "foo2@foo.com";
		// this.user.password = "foo";
		// this.processing = true;
	}
	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
	}
	submit() {
		if (!this.user.email || !this.user.password) {
			this.alert("Please provide both an email address and password.");
			return;
		}

		this.processing = true;
		if (this.isLoggingIn) {
			this.login();
		} else {
			this.register();
		}
	}
	login() {
		this.userService
			.login(this.user)
			.then(() => {
				this.processing = false;
				this.router.navigate([ "/home" ]);
			})
			.catch(() => {
				this.processing = false;
				this.alert("Unfortunately we could not find your account.");
			});
	}

	register() {
		if (this.user.password !== this.user.confirmPassword) {
			this.alert("Your passwords do not match.");
			return;
		}
		this.userService
			.register(this.user)
			.then(() => {
				this.processing = false;
				this.alert("Your account was successfully created.");
				this.isLoggingIn = true;
			})
			.catch(() => {
				this.processing = false;
				this.alert("Unfortunately we were unable to create your account.");
			});
	}
	forgotPassword() {}
	focusPassword() {}
	focusConfirmPassword() {}
	alert(message: string) {
		return alert({
			title: "APP NAME",
			okButtonText: "OK",
			message: message
		});
	}
}
