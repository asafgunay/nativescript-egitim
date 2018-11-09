import { Component } from "@angular/core";
import { TabView } from "tns-core-modules/ui/tab-view";

@Component({
	selector: "ns-my-app",
	template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <TabView id="tabViewContainer" >
      <StackLayout *tabItem="{ title: 'Apple' }">
        <StackLayout>
          <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg">
          </Image>
        </StackLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'AbsoluteLayout' }">
        <AbsoluteLayout>
          <Label text="no margin" left="10" top="10" width="100" height="100" backgroundColor="red"></Label>
          <Label text="margin=30" left="10" top="10" margin="30" width="100" height="90" backgroundColor="green"></Label>
        </AbsoluteLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'DockLayout' }">
        <DockLayout backgroundColor="lightgray" stretchLastChild="true">
            <Label text="left" dock="left" width="60" backgroundColor="red"></Label>
            <Label text="top" dock="top" height="60" backgroundColor="green"></Label>
            <Label text="right" dock="right" width="60" backgroundColor="blue"></Label>
            <Label text="bottom" dock="bottom" height="60" backgroundColor="yellow"></Label>
        </DockLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'GridLayout' }">
        <GridLayout columns="*,2*" rows="2*,3*" backgroundColor="lightgray">
          <Label text="Label 1" col="0" row="0" backgroundColor="red"></Label>
          <Label text="Label 2" col="1" row="0" backgroundColor="green"></Label>
          <Label text="Label 3" col="0" row="1" backgroundColor="blue"></Label>
          <Label text="Label 4" col="1" row="1" backgroundColor="yellow"></Label>
        </GridLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'StackLayout' }">
        <StackLayout orientation="vertical" width="210" height="210" backgroundColor="lightgray">
          <Label text="Label 1" width="50" height="50" backgroundColor="red"></Label>
          <Label text="Label 2" width="50" height="50" backgroundColor="green"></Label>
          <Label text="Label 3" width="50" height="50" backgroundColor="blue"></Label>
          <Label text="Label 4" width="50" height="50" backgroundColor="yellow"></Label>
        </StackLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'WrapLayout' }">
        <WrapLayout itemWidth="140" itemHeight="90">
            <Label text="Label 1" width="140" height="140" backgroundColor="red"></Label>
            <Label text="Label 2" width="140" height="140" backgroundColor="green"></Label>
            <Label text="Label 3" width="140" height="140" backgroundColor="blue"></Label>
            <Label text="Label 4" width="140" height="140" backgroundColor="yellow"></Label>
        </WrapLayout>
      </StackLayout>
      <StackLayout *tabItem="{ title: 'FlexboxLayout' }">
        <FlexboxLayout alignItems="flex-start">
            <Label text="Label 1" width="140" height="140" backgroundColor="red"></Label>
            <Label text="Label 2" width="140" height="140" backgroundColor="green"></Label>
            <Label text="Label 3" width="140" height="140" backgroundColor="blue"></Label>
            <Label text="Label 4" width="140" height="140" backgroundColor="yellow"></Label>
        </FlexboxLayout>
      </StackLayout>
    </TabView>
  `
})
export class HomeComponent {
	constructor() {
		console.log("Hello World");
	}
}
