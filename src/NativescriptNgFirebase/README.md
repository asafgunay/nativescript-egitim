# NativeScript with Angular Master Detail Template
App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

This Master-Detail template is a fundamental building block for any app that displays collection of objects and their details and need to work both in online and offline mode while utilizing Firebase as a backend. The template uses a RadListView component to display the master list. The RadListView component is part of [Progress NativeScript UI](https://github.com/telerik/nativescript-ui-feedback).

<img src="/tools/assets/phone-masterDetail-ios.png" height="400" /><img src="/tools/assets/phone-masterDetail-detail-ios.png" height="400" />

## Key Features
- Editable master-detail interface
- Integration with Firebase database
- Works offline
- Customizable theme
- UX and development best practices
- Easy to understand code

## Quick Start
Execute the following command to create an app from this template:

```bash
tns create NativescriptNgFirebase --template tns-template-master-detail-ng --appId com.nativescript.nativescriptngfirebase
```

## Walkthrough

### Architecture
The application component:
- `app.component.ts` - sets up a page router outlet that lets you navigate between pages.

The template has the following components:
- `/cars/car-list.component.ts` - the master list component. It gets the data and displays it in a list. On item tap, it navigates to the item details component.
- `/cars/car-detail/car-detail.component.ts` - the item details component. Displays the details of the tapped item. Has an `Edit` button that leads to the edit component.
- `/cars/car-detail-edit/car-detail-edit.component.ts` - the item details edit component. Provides edit options for the selected item. The `Done` button saves the changes.

There is one model to represent the data items:
- `/cars/shared/car.model.ts`

The template also provides a data service:
- `/cars/shared/car.service.ts` - serves as a data layer for the master-detail data items. Wraps the functions that are used to make operations on the Firebase database.

### Firebase integration
The templates uses the [{N} Firebase plugin](https://github.com/EddyVerbruggen/nativescript-plugin-firebase). The initialization is done before the app starts in the `/main.ts` file. The initialization script is located at `/shared/firebase.common.ts`.

### [Optional] Firebase database setup
By design the app is connected to a read-only copy of the sample data in Firebase. If you want to see the "edit" functionality in action you will have to clone the sample data and update the app configuration to point to your own Firebase setup. You can find detailed instructions how to achieve that [here](https://github.com/NativeScript/template-master-detail-ng/blob/master/tools/firebase/firebase-database-setup.md).

### Styling
This template is set up to use SASS for styling. All classes used are based on the {N} core theme – consult the [documentation](https://docs.nativescript.org/angular/ui/theme.html#theme) to understand how to customize it. Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:
- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `app.scss` - the global common style sheet. These style rules are applied to both Android and iOS.
- `platform.android.scss` - the global Android style sheet. These style rules are applied to Android only.
- `platform.ios.scss` - the global iOS style sheet. These style rules are applied to iOS only.

Each component has 3 style files located in its folder:
- `_page-name.scss` - the component common style sheet. These style rules are applied to both Android and iOS.
- `page-name.android.scss` - the component Android style sheet. These style rules are applied to Android only.
- `page-name.ios.scss` - the component iOS style sheet. These style rules are applied to iOS only.


# Step By Step

## 1. Login Screen
- create `images` folder under src folder.
  - save your `logo.png` image inside.
- create `login` folder
  - `login.component.css`
  - `login.component.html`
  - `login.component.ts`


### 1.2. Login Component
- copy paste in `login.component.ts`
```typescript
import { Component } from "@angular/core";

@Component({
	selector: "app-login",
	moduleId: module.id,
	templateUrl: "./login.component.html",
	styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {}
```

### 1.2. HTML

- copy paste the following codes to `login/login.component.html`
```html
<FlexboxLayout class="page">
	<StackLayout class="form">
		<Image class="logo" src="~/images/logo.png"></Image>
		<Label class="header" text="Login"></Label>

		<GridLayout rows="auto, auto, auto">
			<StackLayout row="0" class="input-field">
				<TextField class="input" hint="Email" [isEnabled]="!processing" keyboardType="email" autocorrect="false" autocapitalizationType="none" returnKeyType="next" (returnPress)="focusPassword()"></TextField>
				<StackLayout class="hr-light"></StackLayout>
			</StackLayout>

			<StackLayout row="1" class="input-field">
				<TextField #password class="input" [isEnabled]="!processing" hint="Password" secure="true" [returnKeyType]="isLoggingIn ? 'done' : 'next'" (returnPress)="focusConfirmPassword()"></TextField>
				<StackLayout class="hr-light"></StackLayout>
			</StackLayout>

			<StackLayout row="2" *ngIf="!isLoggingIn" class="input-field">
				<TextField #confirmPassword class="input" [isEnabled]="!processing" hint="Confirm password" secure="true" returnKeyType="done"></TextField>
				<StackLayout class="hr-light"></StackLayout>
			</StackLayout>

			<ActivityIndicator rowSpan="3" [busy]="processing"></ActivityIndicator>
		</GridLayout>

		<Button [text]="isLoggingIn ? 'Log In' : 'Sign Up'" [isEnabled]="!processing" (tap)="submit()" class="btn btn-primary m-t-20"></Button>
		<Label *ngIf="isLoggingIn" text="Forgot your password?" class="login-label" (tap)="forgotPassword()"></Label>
	</StackLayout>

	<Label class="login-label sign-up-label" (tap)="toggleForm()">
		<FormattedString>
			<Span [text]="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
			<Span [text]="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
		</FormattedString>
	</Label>
</FlexboxLayout>
```

### 1.3. CSS
- copy paste the following codes to `login/login.component.css`

```css
.page {
	align-items: center;
	flex-direction: column;
}
.form {
	margin-left: 30;
	margin-right: 30;
	flex-grow: 2;
	vertical-align: middle;
}

.logo {
	margin-bottom: 12;
	height: 90;
	font-weight: bold;
}
.header {
	horizontal-align: center;
	font-size: 25;
	font-weight: 600;
	margin-bottom: 70;
	text-align: center;
	color: #2585f3;
}

.input-field {
	margin-bottom: 25;
}
.input {
	font-size: 18;
	placeholder-color: #a8a8a8;
}
.input:disabled {
	background-color: white;
	opacity: 0.5;
}

.btn-primary {
	height: 50;
	margin: 30 5 15 5;
	background-color: #2585f3;
	border-radius: 5;
	font-size: 20;
	font-weight: 600;
}
.btn-primary:disabled {
	opacity: 0.5;
}
.login-label {
	horizontal-align: center;
	color: #a8a8a8;
	font-size: 16;
}
.sign-up-label {
	margin-bottom: 20;
}
.bold {
	color: #000000;
}
```

### 1.4. Routing and Module
- update `app-routing.module.ts`
```typescript
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "cars", loadChildren: "~/app/cars/cars.module#CarsModule" }
];

@NgModule({
	imports: [ NativeScriptRouterModule.forRoot(routes) ],
	exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {}
```
- and update `app.module.ts`

```typescript
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [ NativeScriptModule, AppRoutingModule ],
	declarations: [ AppComponent, LoginComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
```
### 1.4. Data Binding
- import these modules inside `login/login.component.ts`
```typescript
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../shared/user.model";
```
and add these codes in export class

```typescript
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
```







## Get Help
The NativeScript framework has a vibrant community that can help when you run into problems.

Try [joining the NativeScript community Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation). The Slack channel is a great place to get help troubleshooting problems, as well as connect with other NativeScript developers.

If you have found an issue with this template, please report the problem in the [NativeScript repository](https://github.com/NativeScript/NativeScript/issues).

## Contributing

We love PRs, and accept them gladly. Feel free to propose changes and new ideas. We will review and discuss, so that they can be accepted and better integrated.
