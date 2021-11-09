# lm technical test app

This is the project for the lm technical test app, developed for iOS and Android.
Made with React Native + TypeScript

## How to install

- Clone the repo from `https://github.com/Terceramayor/lm.git`
- Go to the project directory in your console terminal
- Install the node dependencies`npm install`
- Go to ios folder and install the pod dependencies `cd ios && pod install`
- Go back to the root directory `cd ..`
- Make sure you have the `.env` file.
- IMPORTANT: To be able to run the Mapbox library on ANDROID, copy manually the secret key placed in the environment file`.env` and paste in the `android/build.gradle` file on line 49 (just replace `MAPBOX_SECRET_KEY` by the key value)
- Start the Metro bundler for the app to load the resources: `npm start` (or `npm start -- --reset-cache` if you want to reset cache).

## How to run the APP

- Use Xcode to launch the iOS emulator or Android studio to launch the Android emulator

## Code testing

- Run `npm run testCov` to run all the unit tests suites implemented. You will find a .html report on `coverage/icov-report/index.html`

## Devices tested

- The app has been successfully tested on the following devices:
  - For iOS through Xcode:
    - Iphone 13 pro max (recomended for better UX)
    - Iphone 7
    - Iphone 8
  - For Android:
    - Google Pixel 3a through Android Studio
    - Xiaomi Note 10 lite through phycical device
