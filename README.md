# Image Search

Image search app using Pixabay API. Simple and clean interface for finding
images.

## What it is

This is an image search application. You can search for images through Pixabay,
view them in full size, and load more if needed. Everything is simple - black
and white design, nothing extra.

## Features

- **Image search** - Enter any query and find relevant images from Pixabay
  database
- **Full size view** - Click on any image to open it in a lightbox gallery for
  detailed viewing
- **Load more** - Button to load additional images when there are more results
  available
- **Responsive design** - Works on phone, tablet, and desktop
- **Image statistics** - Shows likes, views, comments, and downloads for each
  image
- **Notifications** - Error messages and info notifications for better user
  experience
- **Loading indicator** - Visual feedback during API requests

## Technologies used

- **Vite** - Fast development build tool
- **Axios** - HTTP client for API requests
- **SimpleLightbox** - Lightbox library for viewing images in full size
- **iziToast** - Nice notification library
- **Vanilla JS** - No frameworks, pure JavaScript
- **CSS3** - Styling with animations and transitions

## Project structure

Main files:

- `src/main.js` - Main file with search logic and event handlers
- `src/js/pixabay-api.js` - Pixabay API integration, handles API requests
- `src/js/render-functions.js` - Functions for rendering gallery, managing UI
  elements
- `src/css/base.css` - Main styles and layout
- `src/index.html` - HTML markup

## How to use

1. Enter a search query in the search field (e.g., "cat", "nature", "city")
2. Click "Search" button or press Enter
3. Click on any image to view it in full size
4. If there are more results, click "Load more" to load additional images

## Implementation details

- **Gallery clearing** - When you search for something new, the gallery clears
  and shows new results
- **Pagination** - 15 images per page, loads more on request
- **Loading states** - Loading indicator appears during API requests so you know
  something is happening
- **Smooth scrolling** - When loading more images, page scrolls smoothly to show
  new content
- **Error handling** - If nothing found or connection issues, you get
  notifications instead of silent failures
- **Button visibility** - "Load more" button only appears when there are
  actually more results to load

## API

Uses Pixabay API. Settings:

- 15 images per page
- Photos only (no illustrations)
- Horizontal orientation
- Safe search enabled

## Design

Made a simple black and white design:

- Dark gradient background
- Smooth hover animations
- Shadow cards for images
- Minimalist style

Everything is responsive - on mobile images are in one column, on tablet in two
columns, on desktop in multiple columns.

## License

ISC

---

Made with vanilla JavaScript, no frameworks
