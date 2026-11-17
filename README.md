# FindIt - Lost & Found Platform

A beginner-friendly Next.js project for a college MVP.

## Requirements
- Node.js installed
- VS Code
- Internet connection for the first package installation

## Run the project

1. Extract this ZIP file.
2. Open the `findit-lost-found` folder in VS Code.
3. Open Terminal in VS Code.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## Main folders

- `app/` contains website pages.
- `components/` contains reusable UI components.
- `context/ItemContext.js` stores and shares item data.
- `app/globals.css` contains the website styles.

## Important note

This milestone version uses dummy data and React Context. There is no backend, database, real login, image upload, email, or SMS. New reports and status changes are stored in React state, so they reset when the page is refreshed.

## Suggested team division

Student 1:
- Home page and item cards
- Search and category filters
- Navbar and responsive CSS

Student 2:
- Lost/found forms
- Item details and claim request
- Dashboard and admin page
- Testing and README

Both students should understand and contribute to the code.
