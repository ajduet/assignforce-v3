#### TOC

- [AssignforceV3](#intro)
- [Conventions](#conv)
  - [Architecture](#arch)
    - [Page](#comp-page)
    - [Container](#comp-cont)
    - [Presentation](#comp-pres)
    - [Component Naming](#comp-name)
    - [Component Placement](#comp-place)
  - [State Management](#sm-ngrx)
    - [Root](#sm-root)
    - [Feature](#sm-feat)
    - [Store Placement](#sm-place)
  - [Development Contributions](#dev-dev)
    - [Documentation](#dev-doc)
    - [Commenting](#dev-com)
    - [Testing](#dev-test)

# <a name="intro">AssignforceV3</a>

The restructuring of Assignforce to improve project architecture and state management.

## Development server

Run `yarn local-start` or `npm local-start` for a dev server. This will start the angular server and the local api server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` or `yarn test:watch` or `yarn test:ci` to execute the unit tests via [Jest](https://jest.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## <a name="conv">Conventions</a>

The restructure of this project is meant to improve the development process during sprints and overall performance of the application. One major addition to the project is state management with [NgRx](https://ngrx.io) (see [State Management](#sm-ngrx)). Another improvement is the architecture of the components starting with routes and using the concepts of container component with presentation components see [Architecture](#arch)

## <a name="arch">Architecture</a>

For starters each major feature of Assignforce should be an individual module. By doing so we can lazy load those modules to increase performance and separate development concerns.

The architecture of this project relies on 3 types of components: [Page](#comp-page), [Container](#comp-cont), [Presentation](#comp-pres). Each component has a specific purpose and is prescribe to interact with specific parts of the application state.

### <a name="comp-page">Page Components</a>

Page components are top-level components. These components will be used in routing configurations for both top-level routes and sub-routes. Page components can interact with [Root](#sm-root) level application state, but should avoid interacting with [Feature](#sm-feat) level state. Page components will contain an assortment of [Container](#comp-cont) components to devise the layout of the page.

### <a name="comp-cont">Container Components</a>

Container components comprise the layout of a page component. Container components can interact with [Feature](#sm-feat) level state, but should avoid interacting with [Root](#sm-root) level state. Container components will contain an assorment of [Presentation](#comp-pres) components to comprise the UI of the [Page](#comp-page) components.

### <a name="comp-pres">Presentation Components</a>

Presentation components are the components that will comprise the UI of the application. Presentation components should not interact with any state but should use property and event binding to [Container](#comp-cont) components to facilitate state changes.

### <a name="comp-except">Exceptional Components</a>

Every once in a while a component will break the Page/Container/Presentation rule (i.e. navigation). This type of component can be standalone, but notably is not attached to any particular feature so it can have access to the [Root](#sm-root) state.

#### <a name="comp-name">Component Naming</a>

Components and service should have names appropriate to describe their type and function `*.component.ts` or `*.service.ts`. The only exception is [Page](#comp-page) components `*-page.component.ts`. The special name makes them easy to find in the directory structure.

#### <a name="comp-place">Component Placement </a>

When creating a component the component should be placed in an appropriate directory in the module directory. Container components are placed in `module/components/containers`.
Presentation components are placed in `module/components/presenters`. Page components are place in `module/`

```
batch
    ├───components
    │   ├───containers
    │   └───presenters
    └───pages
        ├───batch-page
        └───overview-page
```

## <a name="sm-ngrx">State Management</a>

**Read through the [NgRx](https://ngrx.io) documentation to familiarize yourself with NgRx concepts**

Assignforce will use [NgRx](https://ngrx.io) for state management. NgRx is an an implementation of the [Flux UI Design Pattern](https://facebook.github.io/flux). State management with NgRx simplifies the flow of data and state changes and delegates this behavior to a single entity, the state store. Application state will be broken into 2 sections: [Root](#sm-root) state and [Feature](#sm-feat) state.

### <a name="sm-root">Root State</a>

The root state will be application wide state such as global settings and current user. Root state is configured in [AppModule](./src/app/app.module.ts#L25)

### <a name="sm-feat">Feature State</a>

The feature state will contain state for each feature. Each feature module will have its own unique state handled by its own feature [Reducer(s)](https://ngrx.io/guide/store/reducers). Check [Batch Module](./src/app/batch/batch.module.ts#L11) for and example of configuring a feature level store

### <a name="sm-place">Store Placement</a>

When creating a module and creating the necessary stage management components (reducers and actions) the state management should be created in a store directory in the module directory `module/store/`. The sub components in their respective directories `module/store/actions` and `module/store/reducers`.

```
batch
    └───store
        ├───actions
        └───reducers
```

## <a name="dev-dev">Development Contributions</a>

### <a name="dev-doc">Documentation</a>

When creating any particular feature (component, service, module, reducer, etc...), documentation is the key. New code files must contain a comment header.

```
/*
* Filename: my.component.ts
* Creator: August Duet
* Created: 10/25/19
* Issue: ft/1
* Desc: Example code header
* ...
*/
```

### <a name="dev-com">Commenting</a>

All class methods must be commented to explain its purpose, any parameters the method should expect, and the return of the method.

###### batch-page.component.ts

```
/*
  * Initialize the component when loaded
  * grab the application state from the
  * root state store
  */
  ngOnInit() {
  }
```

### <a name="dev-test">Testing</a>

When working on an issue all code added must be tested. Each code directory will contain a \*.testing.md file which will include information on the testing plan.

###### nav.component.test.md

````
# Issue E/6 Shared Navigation
  * ```it should create``` Test that the test bed and component can be initialized properly
  * ```it should render login/logout link``` Test that the login/logout element is rendered regardless of users
  * ```it should render logout when user is logged in``` Test that 'Logout' is rendered when the user is logged in. The default test state sets a users
  * ```it should render login when user is not logged in``` Test that 'Login' is rendered when the user is not logged in. The default state is overridden in the test to set 'user' to null.
  * ```it should render the correct number of tabs``` Tabs change as the user does. Test that the correct number of tabs are rendered by the tabs returned by the store.
````

###### nav.component.spec.ts

```
...
// #E/6 Shared Navigation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // #E/6 Shared Navigation
  it('should render a login/logout link', () => {
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem).toBeTruthy();
  });

  // #E/6 Shared Navigation
  it('should render logout when user logged in', () => {
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem.textContent).toEqual('Logout');
  });

  // #E/6 Shared Navigation
  it('should render login when user is not logged it', () => {
    root = { user: null, tabs: null };
    store.setState({ root });
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem.textContent).toEqual('Login');
  });

  // #E/6 Share Navigation
  it('should render the correct number of tabs', fakeAsync(() => {
    tick(1000);
    fixture.detectChanges();
    const elems: Array<any> = fixture.debugElement.nativeElement
      .querySelector('.mat-tab-links')
      .querySelectorAll('[mat-tab-link]');
    // + 1 for the a#signin-control
    expect(elems.length).toEqual(tabs.length + 1);
  }));
  ...
```
