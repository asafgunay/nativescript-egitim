import { Injectable } from "@angular/core";
import { User } from "../user.model";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import { alert } from "tns-core-modules/ui/dialogs/dialogs";
import "rxjs/add/operator/share";

@Injectable()
export class UserService {
	register(user: User) {
		return firebase
			.createUser({
				email: user.email,
				password: user.password
			})
			.then(
				function(result: any) {
					return JSON.stringify(result);
				},
				function(errorMessage: any) {
					alert(errorMessage);
				}
			);
	}

	login(user: User) {
		return firebase
			.login({
				type: firebase.LoginType.PASSWORD,
				email: user.email,
				password: user.password
			})
			.then(
				(result: any) => {
					BackendService.token = result.uid;
					return JSON.stringify(result);
				},
				(errorMessage: any) => {
					alert(errorMessage);
				}
			);
	}

	logout() {
		BackendService.token = "";
		firebase.logout();
	}

	resetPassword(email) {
		return firebase
			.resetPassword({
				email: email
			})
			.then(
				(result: any) => {
					alert(JSON.stringify(result));
				},
				function(errorMessage: any) {
					alert(errorMessage);
				}
			)
			.catch(this.handleErrors);
	}
	handleErrors(error) {
		console.log(JSON.stringify(error));
		return Promise.reject(error.message);
	}
}
