# Password Generator

A simple React password generator built with Parcel.

## Project Overview

This app generates a random password based on:

- Password length
- Whether to include numbers
- Whether to include symbols

The UI is rendered with React and bundled with Parcel.

## Features

- Random password generation
- Adjustable password length using a range input
- Number toggle
- Symbol toggle
- Auto-refreshes the password when settings change

## Project Structure

- `index.html` — HTML entry point
- `script.js` — React app logic
- `style.css` — component styling
- `package.json` — dependencies and scripts

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx parcel index.html
   ```

3. Open the local Parcel URL shown in the terminal.

## Flowchart

You can view the project flow here:

- [FLOWCHART.md](FLOWCHART.md)

## Notes

- The current app uses React state to manage password settings.
- Passwords are regenerated on changes to length, number toggle, or symbol toggle.

## Technologies

- React 19
- React DOM
- Parcel
