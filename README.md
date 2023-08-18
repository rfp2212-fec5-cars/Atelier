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

<img width="1197" alt="Screenshot 2023-08-17 at 11 10 22 PM" src="https://github.com/rfp2212-fec5-cars/Atelier/assets/116925220/9397662c-a1d7-4f8e-9d20-284c4ce423b3">

<img width="1174" alt="Screenshot 2023-08-17 at 11 12 21 PM" src="https://github.com/rfp2212-fec5-cars/Atelier/assets/116925220/bcad5a24-fd0e-467e-8727-1e26a6b5e688">

<img width="1163" alt="Screenshot 2023-08-17 at 11 13 53 PM" src="https://github.com/rfp2212-fec5-cars/Atelier/assets/116925220/c15a8e36-5a81-428b-a213-871bdcf6713a">

<img width="913" alt="Screenshot 2023-08-17 at 11 14 22 PM" src="https://github.com/rfp2212-fec5-cars/Atelier/assets/116925220/a2c73f6c-0d41-46d8-9cbf-265980c54394">

## Features
* Reviews filter
  * Sorted reviews by newest, helpful, and relevant
  * filter reviews by searching keywords and star label
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
