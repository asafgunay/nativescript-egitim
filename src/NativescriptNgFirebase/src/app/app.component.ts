import { Component, OnInit } from "@angular/core";
import { initFirebase } from "./shared/firebase.common";

@Component({
	moduleId: module.id,
	selector: "ns-app",
	templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
	ngOnInit() {
		initFirebase();
	}
}
