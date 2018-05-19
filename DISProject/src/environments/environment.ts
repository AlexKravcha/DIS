// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAZWty_RJyW4jRatfw0mQe8vvXP2qKaRuc",
    authDomain: "testfirebase-42bf0.firebaseapp.com",
    databaseURL: "https://testfirebase-42bf0.firebaseio.com",
    projectId: "testfirebase-42bf0",
    storageBucket: "testfirebase-42bf0.appspot.com",
    messagingSenderId: "381999022899"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
