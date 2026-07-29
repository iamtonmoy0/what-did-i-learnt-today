# Implementation Plan - Fix Build and Sync Errors

The project is currently failing to sync due to an incompatible Android Gradle Plugin (AGP) version and potentially invalid configuration in `app/build.gradle.kts`. Additionally, there are minor UI bugs in the layout.

## User Review Required

> [!IMPORTANT]
> I am downgrading AGP from `9.4.0-alpha04` to `9.3.1` to match the latest supported version in your environment.
> I am also adjusting `compileSdk` and `targetSdk` to `35` as `36`/`37` are not yet standard or may cause issues.

## Proposed Changes

### Build Configuration

#### [MODIFY] [libs.versions.toml](file:///C:/Users/dipti%20t/Desktop/what-did-i-learnt-today/Kotlin/Kotlin%20101/Android%20toast%20and%20alerts/gradle/libs.versions.toml)
- Downgrade `agp` version to `9.3.1`.

#### [MODIFY] [app/build.gradle.kts](file:///C:/Users/dipti%20t/Desktop/what-did-i-learnt-today/Kotlin/Kotlin%20101/Android%20toast%20and%20alerts/app/build.gradle.kts)
- Change `compileSdk { version = release(36) }` to `compileSdk = 35`.
- Change `targetSdk = 37` to `targetSdk = 35`.
- Fix the `optimization` block in `buildTypes`. It should be `isMinifyEnabled = false` (or similar standard property).

### Layout Improvements

#### [MODIFY] [activity_main.xml](file:///C:/Users/dipti%20t/Desktop/what-did-i-learnt-today/Kotlin/Kotlin%20101/Android%20toast%20and%20alerts/app/src/main/res/layout/activity_main.xml)
- Change `android:hint="Toast btn"` to `android:text="Show Toast"`. Buttons should use `text` to display content.

## Verification Plan

### Automated Tests
- Run `gradle_sync` to ensure the project syncs successfully.
- Run `assembleDebug` to ensure the project builds successfully.

### Manual Verification
- Deploy the app to the emulator/device.
- Verify that the button is visible and shows the correct text.
- Verify that clicking the button shows the Toast.
