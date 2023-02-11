# Atelier

This project is a modernized redesign of a client-facing retail web-portal in order to enhance user experience and promote sales numbers.

<img width='1300' alt='Atelier Page' src='https://res.cloudinary.com/fec-cars/image/upload/v1676138641/Screenshot_2023-02-11_at_10.02_tiwnaq.png'/>

## Getting Started
Clone the repository
Navigate to the configexample.js in the server folder and create a config.js file with a unique GitHub Authorization token
```
npm i
npm run build
npm run server-dev
npm run client-dev
```

## Dependencies
* axios
* bluebird
* express
* node.js
* react
* react-dom

## Version
* ES6 on both server-side and client-side
* Transpile with Babel (via Webpack)

# Overview
## Features
* Interactable Image Gallery
  * Expanded View, Zoomed in View for main product image
  * Overlays gallery on top of main image to quickly display product images
* Reactive Product Information component
  * Displays ratings, and reviews associated with product and sale price if applicable
* Integrated Style Selector
  * Allows for interconnectivity between the images displayed, product information, and stock levels for the add-to-cart function
* Restrictive Add To Cart Coponent
  * Prevents mishaps to ensure correct fields are selected
  * Renders only when product is in stock
  * Options provided to customer are only for items avaliable

# Ratings and Reviews
## Features
* Filter reviews by sort order, search text and stars label
* Toggle to see more reviews, 2 more on reload
* Add Ratings and Reviews through a Modal Form
* Like or Report Reviews

# Questions and Answers
## Features
* Filter Questions by Title
* Toggle to see more questions/answers
  * Default 4 Questions and 2 Answers on reload
  * Questions/Answers sorted by helpfulness
* Add Questions and Answers through a Custom Modal Form
* Interact with Questions and Answers
  * Like Questions/ Answers
  * Report Questions/Answers