// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  LOGIN_URL: 'http://api-test.new-labs.co:8080/raddit/login',
  SIGNUP_URL: 'http://api-test.new-labs.co:8080/raddit/signup',
  CREATE_POST_URL: 'http://api-test.new-labs.co:8080/raddit/post',
  ALL_SUBRADDIT_URL: 'http://api-test.new-labs.co:8080/raddit/post/all',
  SUBRADDIT_URL: 'http://api-test.new-labs.co:8080/raddit/post/subraddit/',
  POST_BY_ID_URL: 'http://api-test.new-labs.co:8080/raddit/post/',
  LIKE_POST_URL: 'http://api-test.new-labs.co:8080/raddit/post/addlike/',
  DISLIKE_POST_URL: 'http://api-test.new-labs.co:8080/raddit/post/unlike/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
