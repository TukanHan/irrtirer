# Irrtirer Frontend

This is the frontend part of the project, written in Angular. It provides a convenient interface for configuring how the mosaic is generated. The results of the generation process can be previewed live, thanks to SignalR technology, which enables dynamic communication between the frontend and backend.

Application supports both dark and light themes, which can be switched at any time. The user interface is available in English and Polish, and the language can also be changed on the fly, thanks to the use of the ngx-translate library.

## Technologies used

- Angular 20
- Angular Material
- RxJS
- NgRx
- SignalR
- ngx-translate
- Vite

## Usage

### Running the application

Run `ng serve` to start the frontend.

**Note:** The frontend requires the backend API to be running in the background for full functionality.

### Running unit tests

Run `ng test` to execute the unit tests using [Vitest](https://vitest.dev/).