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