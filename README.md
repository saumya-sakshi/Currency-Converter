# Currency Converter

A simple currency converter web app that lets users convert between two currencies and view the latest exchange rate.

## Files

- `index.html` — app layout and UI.
- `style.css` — styling for the converter interface.
- `code.js` — currency code to country code mapping used for flag icons.
- `app.js` — app logic for loading currency options, fetching latest rates, and updating the UI.

## How to use

1. Open `index.html` in your browser.
2. Enter an amount.
3. Choose the source currency (`From`) and the target currency (`To`).
4. Click `Get Exchange Rate`.
5. The converted amount will display below the selector.

## Features

- Loads currency options from a built-in list
- Displays country flags for selected currencies
- Fetches latest exchange rates from a public API
- Automatically updates when currency selection changes
- Validates the amount and falls back to `1` when invalid

## Notes

- This app requires an internet connection to fetch exchange rates and flag icons.
- If the API request fails, the app displays an error message.

## Troubleshooting

- If the converter does not work, check that `code.js` and `app.js` are loaded correctly from `index.html`.
- Make sure the browser has network access and no ad blocker is blocking the data fetch.
