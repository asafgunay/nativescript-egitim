# NativeScript with Angular Blank Template

App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

## Quick Start

Execute the following command to create an app from this template:

```bash
$ tns create HelloWold --template tns-template-blank-ng
```

> Note: This command will create a new NativeScript app that uses the latest version of this template published to [npm](https://www.npmjs.com/package/tns-template-blank-ng).

If you want to create a new app that uses the source of the template from the `master` branch, you can execute the following:

```
tns create my-blank-ng --template https://github.com/NativeScript/template-blank-ng
```

**NB:** Please, have in mind that the master branch may refer to dependencies that are not on NPM yet!

## Walkthrough

### Architecture

The application component:

- `app.component.ts` - sets up a page router outlet that lets you navigate between pages.

There is a single blank component that sets up an empty page layout:

- `/home`

**Home** page has the following components:

- `ActionBar` - It holds the title of the page.
- `GridLayout` - The main page layout that should contains all the page content.

# Step By Step

## 1. Add Apple image

- add this code to `home/home.component.ts`:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <image
      src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"
    ></image>
  `
})
export class HomeComponent {
  // Your TypeScript logic goes here
}
```

## 2. Spin image with CSS

- Add this code to `app/app.css`

```css
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360);
  }
}
image {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
```

## 3. Run App on your personal phone

- Open terminal

```bash
$ cd HelloWorld
$ tns preview
```

![Image of Nativescript Cli QR](https://docs.nativescript.org/angular/img/start/cli-basics/terminal-0.png)

- Next, open the NativeScript Playground app on your iOS or Android device.

![Image of Nativescript Playground App QR](https://docs.nativescript.org/angular/img/start/cli-basics/scan-qr-code.png)

- When your emulator refreshes, you should see a crazy spinning apple!

![Image of Spinning apple gif](https://docs.nativescript.org/angular/img/start/cli-basics/ios/3.gif)

## 4. Add Hot Module Replacement Feature to your app

- add `nativescript-dev-webpack` plugin to your project

```bash
$ npm install nativescript-dev-webpack --save-dev
```

- open `main.ts` and paste code:

```typescript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";

import { AppModule } from "./app/app.module";

let options: AppOptions = {};
if (module["hot"]) {
  const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

  options.hmrOptions = {
    moduleTypeFactory: () => AppModule,
    livesyncCallback: platformReboot => {
      console.log("HMR: Sync...");
      hmrUpdate();
      setTimeout(platformReboot, 0);
    }
  };
  hmrUpdate();

  // Path to your app module.
  // You might have to change it if your module is in a different place.
  module["hot"].accept(["./app/app.module"]);
}

// !!! Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);
```

**Now we covered our app with webpack's HMR feature**

That's it! You can now use

```bash
$ tns run [ios/android] --hmr
```

- open `home/home.component.ts`and change ActionBar title.
- save file and see hmr ability

## 5. Use Tab View

- Open again `home/home.component.ts` in your editor and import the following module

```typescript
/*......*/
import { TabView } from "tns-core-modules/ui/tab-view";
/*......*/
```

- Paste this code in template

```xml
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
```

## 5. Layouts
### 5.1. Absolute Layout
- he AbsoluteLayout is the simplest layout in NativeScript. It uses absolute left-top (x/y) coordinates to position its children and the place of each of them depends on its Top, Left, Width and Height properties. The AbsoluteLayout will not enforce any layout constraints on its elements and will not resize them at runtime when its size changes.

paste this code in second tab
```xml 
<AbsoluteLayout>
    <Button text="Left: 10, Top: 5" left="10" top="5" height="42" width="230" backgroundColor="#0099CC"></Button>
    <Button text="Left: 15, Top: 50" left="15" top="50" height="190" width="160" backgroundColor="#C3C3E5"></Button>
    <Button text="Left: 185, Top: 50" left="185" top="50" height="90" width="170" backgroundColor="#CCFFFF"></Button>
    <Button text="Left: 70, Top: 200" left="70" top="200" height="50" width="230" backgroundColor="#8C489F"></Button>
</AbsoluteLayout>
```
### 5.2. Dock Layout

- Create new tab and add this following code
  
```xml 
<DockLayout stretchLastChild="true">
    <Button dock="left" text="left" style="background-color: #0099CC; margin: 5;"></Button>
    <Button dock="right" text="right" style="background-color: #8C489F; margin: 5;"></Button>
    <Button dock="bottom" text="bottom" style="background-color: #AA0078; margin: 5;"></Button>
    <Button dock="top" text="top" style="background-color: #B3B3D7; margin: 5;"></Button>
    <Button text="fill" style="background-color: #CCFFFF; margin: 5;"></Button>
</DockLayout>
```

### 5.3. Flexbox Layout One

- Create new tab and add this following code
- This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
  
```xml 
<!-- Reverse the natural flow of items -->
<FlexboxLayout flexDirection="row-reverse">
    <!-- Use even flexGrow to achieve uniform grid -->
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="1" backgroundColor="#EEEEEE"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="2" backgroundColor="#DDDDDD"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="3" backgroundColor="#CCCCCC"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="4" backgroundColor="#BBBBBB"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="5" backgroundColor="#AAAAAA"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="6" backgroundColor="#999999"></Label>
</FlexboxLayout>
<FlexboxLayout flexDirection="column-reverse">
    <!-- Use even flexGrow to achieve uniform grid -->
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="1" backgroundColor="#EEEEEE"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="2" backgroundColor="#DDDDDD"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="3" backgroundColor="#CCCCCC"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="4" backgroundColor="#BBBBBB"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="5" backgroundColor="#AAAAAA"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="6" backgroundColor="#999999"></Label>
</FlexboxLayout>
<FlexboxLayout flexDirection="row">
    <!-- Use even flexGrow to achieve uniform grid -->
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="1" backgroundColor="#EEEEEE"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="2" backgroundColor="#DDDDDD"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="3" backgroundColor="#CCCCCC"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="4" backgroundColor="#BBBBBB"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="5" backgroundColor="#AAAAAA"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="6" backgroundColor="#999999"></Label>
</FlexboxLayout>
<FlexboxLayout flexDirection="column">
    <!-- Use even flexGrow to achieve uniform grid -->
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="1" backgroundColor="#EEEEEE"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="2" backgroundColor="#DDDDDD"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="3" backgroundColor="#CCCCCC"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="4" backgroundColor="#BBBBBB"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="5" backgroundColor="#AAAAAA"></Label>
    <Label flexGrow="1" class="p-15 text-center font-weight-bold" text="6" backgroundColor="#999999"></Label>
</FlexboxLayout>
```

### 5.4. Flexbox Layout Three
- Create new tab too and add following code.

- - **Wrap** By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

Child related properties

flex-wrap-before: Non-spec property controlling item wrapping, setting to true on flexbox child will force it to wrap on a new line

```xml
<FlexboxLayout flexWrap="wrap" alignContent="flex-start" class="p-15" backgroundColor="lightgray">
    <Label class="h3 p-15" text="Gihub issue labels:"></Label>
    <!-- Use flexWrapBefore to control explicit line wrapping -->
    <Label flexWrapBefore="true" class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="S: High" borderRadius="5" backgroundColor="#F93822"
        color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="T: Feature" borderRadius="5" backgroundColor="green" color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="3 - In Progress" borderRadius="5" backgroundColor="#A6BBC8"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="S: Ullamcorper" borderRadius="5" backgroundColor="#F93822" color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="T: Vulputate" borderRadius="5" backgroundColor="green" color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="2 - Egestas magna" borderRadius="5" backgroundColor="#A6BBC8"></Label>
    <!-- Use flexWrapBefore to control explicit line wrapping -->
    <Label flexWrapBefore="true" class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="S: High" borderRadius="5" backgroundColor="#F93822"
        color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="T: Phasellus" borderRadius="5" backgroundColor="green" color="white"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="Nullam" borderRadius="5" backgroundColor="#A6BBC8"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="T:Question" borderRadius="5" backgroundColor="#FFD900"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="S:Medium" borderRadius="5" backgroundColor="#FFD900"></Label>
    <Label class="p-5 m-l-15 m-r-15 m-b-15 text-center" text="duplicate" borderRadius="5" backgroundColor="#A6BBC8"></Label>
</FlexboxLayout>
```