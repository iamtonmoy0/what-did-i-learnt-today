# Walkthrough - Build and Sync Fixes

I have fixed the issues preventing the "Android toast and alerts" project from syncing and building.

## Changes Made

### 1. Build Configuration
- **Downgraded AGP**: Updated `gradle/libs.versions.toml` to use Android Gradle Plugin `9.3.1` (stable) instead of an incompatible alpha version.
- **Fixed SDK Versions**: Updated `app/build.gradle.kts` to use `compileSdk = 36` and `targetSdk = 35`.
    - *Note*: `36` was required by some dependencies (e.g., `androidx.activity`).
- **Cleaned up Build Types**: Replaced the invalid `optimization` block in `buildTypes.release` with standard configuration.

### 2. UI Improvements
- **Button Text**: Updated `activity_main.xml` to use `android:text="Show Toast"` instead of `android:hint`. This ensures the text is actually visible on the button.

## Verification Results

### Automated Tests
- **Gradle Sync**: Succeeded.
- **Build**: `assembleDebug` completed successfully.

### Manual Verification
- **Deployment**: App successfully deployed to `emulator-5554`.
- **Interaction**:
    - Tapped the "Show Toast" button.
    - Verified via Logcat that the Toast with message "You are gay!" was triggered.

![Final App State](file:///C:/Users/dipti%20t/Desktop/what-did-i-learnt-today/Kotlin/Kotlin%20101/Android%20toast%20and%20alerts/.artifacts/7e3f26e4-dbf0-419d-b9e4-69d1952c3300/screenshots/final_app.png)
*(Note: I took a screenshot of the app running, which shows the button correctly centered and labeled.)*
