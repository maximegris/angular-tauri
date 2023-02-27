[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tauri.svg" width="50">

![Maintained][maintained-badge]
[![Make a pull request][prs-badge]][prs]
[![License][license-badge]](LICENSE.md)

[![Build][tauri-build-badge]][tauri-build]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# Introduction

Bootstrap and package your project with Angular 14 (Typescript + SASS + Hot Reload) and Tauri (Rust) for creating Desktop applications.

Currently runs with:

- Angular v15.2.0
- Tauri 1.0.5

With this sample, you can:

- Run your app in a local development environment with Tauri & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

/!\ Angular CLI needs Node 14 or later to work correctly.

## Getting Started

*Clone this repository locally:*

``` bash
git clone https://github.com/maximegris/angular-tauri.git
```

*Install Tauri (Rust)*

https://tauri.studio/docs/getting-started/prerequisites

*Install dependencies with npm:*

``` bash
npm install
```

If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Tauri app in a local development environment with hot reload!

The application code is managed by `src-tauri/main.rs`. \ 
In this sample, the app runs with a simple Angular App (http://localhost:4200), and a webView managed by Tauri.

## Project structure

| Folder    | Description                                   |
|-----------|-----------------------------------------------|
| src-tauri | Tauri main process folder (Rust)              |
| src       | Tauri renderer process folder (Web / Angular) |

## Browser mode

Maybe you only want to execute the application in the browser with hot reload? Just run `npm run web:serve`.

## Included Commands

| Command                 | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run web:serve`     | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:prod`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run tauri:bundle`  | Builds your application and creates an app consumable based on your operating system                  |

**Your application is optimised. Only /dist folder is included in the final bundle.**

## Branch & Packages version

[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/maximegris/angular-tauri/blob/main/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-red.svg
[prs]: http://makeapullrequest.com

[tauri-build-badge]: https://github.com/maximegris/angular-tauri/workflows/Tauri%20Build/badge.svg
[tauri-build]: https://github.com/maximegris/angular-tauri/actions?query=workflow%3A%22Tauri+Build%22

[github-watch-badge]: https://img.shields.io/github/watchers/maximegris/angular-tauri.svg?style=social
[github-watch]: https://github.com/maximegris/angular-tauri/watchers
[github-star-badge]: https://img.shields.io/github/stars/maximegris/angular-tauri.svg?style=social
[github-star]: https://github.com/maximegris/angular-tauri/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-tauri!%20https://github.com/maximegris/angular-tauri%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/maximegris/angular-tauri.svg?style=social
