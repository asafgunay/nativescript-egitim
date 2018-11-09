import { Component } from "@angular/core";

@Component({
	selector: "ns-my-app",
	template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <TabView id="tabViewContainer">
      <StackLayout *tabItem="{ title: 'First Tab', iconSource: 'res://icon' }">
        <StackLayout>
          <Image
            src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"
          ></Image>
        </StackLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'Second Tab', iconSource: 'res://icon' }">
        <StackLayout>
        <Label
          text="Second Tab"
          textWrap="true"
          class="m-15 h2 text-left"
          color="blue"
        ></Label>
        </StackLayout>
      </StackLayout>
    </TabView>
  `
})
export class HomeComponent {
	constructor() {
		console.log("Hello World");
	}
}
