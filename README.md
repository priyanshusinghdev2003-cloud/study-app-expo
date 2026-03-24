# Study Buddy

Study Buddy is a mobile application built with React Native and Expo. It is designed to help students connect with peers, find study partners, and communicate effortlessly in real-time.

## Features

- **Authentication**: Secure user sign-up and login powered by [Clerk](https://clerk.com).
- **Real-time Chat**: In-app messaging and collaboration facilitated by [Stream Chat](https://getstream.io/chat/).
- **Modern UI**: Styled with [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native), offering a clean and responsive design across platforms.
- **Routing**: Seamless file-based navigation using [Expo Router](https://docs.expo.dev/router/introduction/).
- **Error Tracking**: Integrated with [Sentry](https://sentry.io/) for real-time monitoring and crash reporting.
- **Cross-Platform**: Runs natively on Android, iOS, and Web.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/)
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS)
- **Authentication**: Clerk Expo
- **Messaging API**: Stream Chat Expo
- **Error Monitoring**: Sentry React Native
- **Language**: TypeScript

## Project Structure

```text
├── assets/             # Images, app icons, and splash screens
├── src/
│   ├── app/            # Expo Router screens and main navigation layouts
│   ├── components/     # Reusable React components
│   ├── contexts/       # React Context providers for global state management
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions, API clients, and configurations
├── .env                # Environment variables
├── app.json            # Expo app configuration (name, slug, icons, plugins)
├── package.json        # Project dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Expo Go](https://expo.dev/client) app installed on your physical device, or an iOS Simulator / Android Emulator.

### Installation

1. Navigate to the project directory:

   ```bash
   cd study-buddy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Ensure you have your `.env` or `.env.local` file configured.
   - You will need API keys for Clerk, Stream Chat, and optionally Sentry:
     ```env
     EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     EXPO_PUBLIC_STREAM_API_KEY=your_stream_api_key
     # Add other necessary keys like Sentry DSN if required
     ```

4. Start the Expo development server:

   ```bash
   npm start
   ```

5. Open the app:
   - **Android**: Press `a` in the terminal to open on an Android Emulator.
   - **iOS**: Press `i` in the terminal to open in an iOS Simulator.
   - **Web**: Press `w` in the terminal to open in your web browser.
   - **Physical Device**: Scan the QR code shown in the terminal using the Expo Go app.

## Available Scripts

- `npm start` - Starts the Expo development server.
- `npm run android` - Starts the server and automatically opens the app on Android.
- `npm run ios` - Starts the server and automatically opens the app on iOS.
- `npm run web` - Starts the server and opens the app on the web.
- `npm run lint` - Lints your project code using standard rules.
- `npm run reset-project` - A custom utility script to reset project boilerplate if needed.
