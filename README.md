# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/screenshots/Screenshot.svg)

### Links

- Solution URL: [Solution URL](https://github.com/hussaindev94/Frontend-Mentor-Challenge-Password-Generator-App)
- Live Site URL: [Live site URL here](https://hussaindev94.github.io/Frontend-Mentor-Challenge-Password-Generator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- I learned how to customize form elements.
  - Range input.
    - First you have to reset the default styles with two props:
      - the `apperance` and the `-webkit-apperance` props to set them as none.
      - Then play with the width, height and background color.
    - Second you have to reset the default styles for the thumb for each web browser.
      - for safari, chrome and explorer:
        - `::-webkit-slider-thumb` put this following the input.
      - For fire fox mozilla:
        - `::moz-range-thumb`  put this following the input.
    - You have to deal with two things:
            1. The track.
            2. The knobe which is called thumb.
  - Checkboxes.
    - First youy have to reset the default styles by using the following props:
            1. `apperance`.
            2. `--webkit-apperance`.
    - Then the checkbox has status ::fouces, checked and much more.
      - style each stat with the out that suite your styles.
  ```css
  /*For the bar remmove all the default styles*/
  nput[type=range] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: var(--spacing-100);
  background: var(--color-gray-850);
  outline: none;
  }
  /*For the knub or as it is called thumb*/
  input[type=range]::-webkit-slider-thumb, input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2.4rem;
  height: 2.4rem;
  background: var(--color-gray-200);
  border-radius: 50%;
  border: 0.2rem solid transparent;
  /*For checkbox*/
  input[type="checkbox"] {
  appearance: none;
  --webkit-appearance: none;
  margin: 0rem;
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid var(--color-gray-200);
  display: grid;
  place-content: center;
  }
  input[type="checkbox"]::before {
  content: "";
  width: 2rem;
  height: 2rem;
  }
  input[type="checkbox"]:checked {
  background: url(../assets/images/icon-check.svg) no-repeat 50% 50%
    var(--color-green-200);
  border: 0.3rem solid var(--color-green-200);
  }
  ```

### Continued development

- I will continue focusing on the Flexbox and CSS grid.

### AI Collaboration
- I used Gimini
- I use it to generate code for password generation and reorganizing and cleaning my code.


## Author

- Website - [Hussain AL-shaer](https://hussaindev94.github.io/Portfolio/)
- Frontend Mentor - [@hussaindev94](https://www.frontendmentor.io/profile/hussaindev94)
- Twitter - [@hussaindev94](https://www.twitter.com/hussaindev94)
