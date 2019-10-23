#### TOC

- [AssignforceV3](#intro)
- [Conventions](#conv)
  - [Architecture](#arch)
    - [Page](#comp-page)
    - [Container](#comp-cont)
    - [Presentation](#comp-pres)
  - [State Management](#sm-ngrx)
    - [Root](#sm-root)
    - [Feature](#sm-feat)

# <a name="intro">AssignforceV3</a>

The restructuring of Assignforce to improve project architecture and state management.

## Development server

Run `yarn start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## <a name="sm-ngrx">State Management</a>

### <a name="sm-root">Root State</a>

### <a name="sm-feat">Feature State</a>
