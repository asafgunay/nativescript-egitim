# NativeScript with Angular Blank Template
App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

```bash
tns create my-blank-ng --template tns-template-blank-ng
```
## Walkthrough

### Architecture
The application component:
- `app.component.ts` - sets up a page router outlet that lets you navigate between pages.

There is a single blank component that sets up an empty page layout:
- `/home`

**Home** page has the following components:
- `ActionBar` - It holds the title of the page.
- `GridLayout` - The main page layout that should contains all the page content.

# Tutorial Steps
- Create new blank app via CLI
```bash
$ tns create my-blank-ng --template tns-template-blank-ng
```
- Overview -> Html, CSS Abilities
- Sidedrawer Menu
- Router
- Login form (binding)
- CRUD with firebase
- Access camera 
- Location api