# Aleric - Medical Dark Theme - React Version

This is a React conversion of the Aleric Digital Agency & Creative Portfolio HTML Template (Medical Dark Theme).

## Installation

1. **IMPORTANT: Move the assets folder to public directory**
   ```bash
   # If assets is at the root level, move it to public/
   mv assets public/assets
   ```
   Or if you prefer to keep it at root, create a symlink:
   ```bash
   ln -s ../assets public/assets
   ```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
aleric/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, Features, About, etc.)
│   │   ├── Header.jsx      # Header component
│   │   ├── Loader.jsx      # Loading screen
│   │   ├── MagicCursor.jsx # Custom cursor
│   │   ├── BackToTop.jsx   # Scroll to top button
│   │   ├── SearchForm.jsx  # Search overlay
│   │   └── Offcanvas.jsx   # Mobile menu
│   ├── App.jsx             # Main App component
│   ├── index.js            # React entry point
│   └── index.css           # CSS imports
├── assets/                  # Original assets (CSS, JS, images, fonts)
└── package.json             # Dependencies
```

## Features

- ✅ Fully converted to React components
- ✅ All sections preserved (Hero, Features, About, Services, Portfolio, FAQ, Testimonials, Counter, Funfact, Blog, Footer)
- ✅ Responsive design maintained
- ✅ All animations and interactions preserved
- ✅ Search functionality
- ✅ Mobile menu (Offcanvas)
- ✅ Custom cursor
- ✅ Scroll to top button
- ✅ Loading screen

## Notes

- All original CSS and JavaScript files are preserved in the `assets/` directory
- The React app loads external scripts after component mount
- Image paths are relative to the `public/` directory
- Make sure all assets are accessible from the public folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a converted version of the Aleric template. Please refer to the original template's license.

