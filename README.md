# ATMA Tech mobile app

This repository is a small [Capacitor](https://capacitorjs.com/) wrapper for the existing ATMA Energy technician portal. The Android and iOS apps open:

`https://atma-energy.com/tech`

Because the app displays the existing portal directly, website updates appear in the app without maintaining a second frontend. Login state and cookies remain inside the app's native web view.

## Set up the native projects

Requirements:

- Node.js 20 or newer
- Android Studio for Android builds
- macOS and Xcode for iOS builds

Install packages and create the platform projects once:

```bash
npm install
npx cap add android
npx cap add ios
npm run sync
```

Open a native project:

```bash
npm run android
npm run ios
```

Use Android Studio or Xcode to set signing, icons, splash screens, and release-store metadata. After changing `capacitor.config.ts` or files under `www/`, run `npm run sync` again.

## Configuration

The portal address, application ID, and native app name live in `capacitor.config.ts`. HTTPS is required and mixed HTTP/HTTPS content is disabled.

The `www` directory is the required local web bundle and provides a branded offline fallback. During normal operation Capacitor loads the remote technician portal configured by `server.url`.

> **Release note:** Capacitor documents `server.url` as intended primarily for live-reload workflows. Before app-store submission, confirm that wrapping the authenticated portal complies with current Apple App Store and Google Play policies. A future option is to ship the portal frontend in `www` and connect it to the same backend APIs.
