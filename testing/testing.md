# Avengers Top Trumps - Testing

Return to [README.md](https://github.com/TAHJones/avengers-top-trumps/blob/master/README.md)

## Automated Testing

### Validation Services

The following validation services and linters were used to check the code for this project:

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](http://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.
- [Code Beautify](https://codebeautify.org/jsonviewer) was used to validate JSON data.
- [Can I Use](https://caniuse.com/) was used to check whether browser prefix's were necessary for newer CSS properties.
- [Should I Prefix](http://shouldiprefix.com/) was used to check whether browser prefix's were necessary for newer CSS properties.

### Jasmine

Approximately 50% of this projects functions have been tested with [Jasmine 3.3](https://jasmine.github.io/index.html).  

When I reorganized the entire javascript code and modified most of the functions, the majority of the Jasmine testing was rewritten to reflect this. However the original mock AJAX testing remains in place even though this method has been replaced by the fetch method.

I found implementing Jasmine testing and TTD principles to be the most challenging aspect of this project. Being relative inexperienced with Javascript and completely new to Jasmine and Test Driven Development (TDD) I would often focus on getting the javascript to work first, then optimise my code, then finally implementing Jasmine testing. This would often require me to retrace my steps and rebuild my code for the purposes of testing.

My approach to using Jasmine was to test each function in isolation. Once a function passed I would move onto the next function and test that in isolation. Because of this I feel that my Jasmine testing is probably a bit limited. In future projects I will aim to apply the TTD model more extensively and build my tests in parallel as I build my javascript functions.

The files for Jasmine testing can be found here:

HTML Jasmine test file for running Jasmine tests: [testing.html](https://github.com/TAHJones/avengers-top-trumps/blob/master/testing/testing.html)

Javascript specifications file for running Jasmine tests: [jasmineSpec.js](https://github.com/TAHJones/avengers-top-trumps/blob/master/testing/jasmi) 

Javascript source file for running Jasmine tests: [jasmineSrc.js](https://github.com/TAHJones/avengers-top-trumps/blob/master/testing/jasmineSrc.js)

## Manual Testing

### Cross Browser Testing

Cross browser testing was achieved using [Lambda Test](https://www.lambdatest.com/).

#### Real Time Browser Testing

Real Time Browser Testing was done on an extensive number of desktop, tablet and mobile devices using the latest 2 versions of Chrome, Firefox, Opera, Safari and Edge. These manual tests were achieved using the following procedure:

1. Intro.js Guide:

   * Click on the 'Guide' button.
   * Click on the 'Next' button, check the correct page element is highlighted and the correct message is displayed.
   * Click the 'Next' button again, checking the correct element is highlighted and message is displayed.
   * Continue to click the 'Next' button checking each step of the guide. Confirm no steps are missed and are displayed in the correct order.
   * Click on one of the guides dot navigation buttons. Check that it navigates to the correct element/message.
   * Repeat the previous step twice using clicking different dot buttons to select different steps.
   * Click on the 'Back' button. Check that is navigates to the previous element/message. Repeat this step twice.
   * Click on the 'Skip' button. Check that this exits the guide.
   * Restart the guide and navigate to the final screen. Click on the 'Done' button to check that this exits the guide.
   * Click on the site dot or arrow buttons to check that this removes the 'Guide' button from the screen.

2. Site Navigation - Forward and back arrows:

   * Click on the forward navigation arrow to scroll through the list of available superheroes. Confirm that the hero image and superpower category scores are displayed correctly and the later is in an active state (light blue colour, goes white on hover).
   * Repeat the same procedure for the back navigation arrow.
   * When the first superhero is selected (Antman) check that the back arrow navigates to the last superhero (Vision).
   * When the last superhero is selected (Vision) check that the forward arrow navigates to the first superhero (Antman).

3. Site Navigation - Dots

   * Click on dot navigation elements to select individual superheroes. Confirm that the hero image and superpower category scores are displayed correctly and the later is in an active state (turns light blue colour, goes white on hover). Confirm that the selected dot is in an active state (orange colour).
   * Hover over the dots to display preview of superhero. Confirm that the hovered over dot is in an active state (white colour).
   * Confirm that hovering and clicking on the same dot displays the same superhero image.

4. Marvel API

   * Click on the 'More Info' button. Confirm that the Marvel API modal appears and displays the correct hero name, image, description (when available) and Marvel comic book links.
   * Click on the 'detail', 'wiki' or 'comiclink' link to confirm it works.
   * Click on the 'Return' button to confirm this closes the modal and returns the user to the game.

5. Superhero superpower category scores

   * Click on a superhero superpower category score. Confirm that the selected category turns orange and the 'Select Hero' button becomes active (turns light blue colour, goes white on hover).
   * Click on the arrow or dot navigation elements to confirm that the selected superpower category becomes deselected.
   * Click on another superhero superpower category score. Confirm that the selected category turns orange and the 'Select Hero' button becomes active (turns light blue colour, goes white on hover).

6. Select superhero Button

   * Click on the 'Select Hero' button. Confirm that the button and the image border turns orange. Also confirm that the arrow and dot navigation elements disappear and the 'Select Villain' is in an active state (turns light blue colour, goes white on hover).

7. Select super villain button

   * Click on the 'Select Villain' button. Confirm the villain name, image and superpower category scores are displayed and the selected category and 'Select Villain' button turns orange.

8. Display Results - Image overlay and results modal

   * Confirm the hero and villain image overlays display the correct result.
   * Confirm the results modal appears and displays the correct results title, image, infinity stone and results statement.
   * Click the 'Play Again' button to confirm this closes the results modal, resets the game and returns the user to the game.

9. Score Counter

   * If the user wins the match check that an infinity stone is added to the score counter. Confirm that the infinity stone matches the stone displayed in the results modal.

   * If the user draws the match check that the number of infinity stones displayed in the score counter remains the same. Confirm that this matches the information displayed in the results modal.

   * If the user loses the match check that the most recently acquired infinity stone is removed (unless this is the first match). Confirm that this matches the information displayed in the results modal.

   * If the user wins the match and acquires all six infinity stones confirm that the 'Game Complete' results modal is displayed. Click the 'Play Again' button to confirm this closes the results modal, resets the game and score counter then returns the user to the game.

   * Continue to play the game until each of the scenarios above has been checked.

#### Screen Shot Browser Testing

Screen Shot Browser Testing was done on an extensive number of desktop, tablet and mobile devices using the latest 2 versions of Chrome, Firefox, Opera, Safari and Edge.

Desktop screenshots can be found at the following locations:

* [Windows](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/desktop_windows)
* [Mac](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/desktop_mac)
* [Responsive](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/responsive_desktop)

Tablet screenshots can be found at the following locations:

* [iPad](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/tablet_ipad)
* [Responsive](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/responsive_tablet)

Mobile screenshots can be found at the following locations:

* [android](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/mobile_android)
* [iPhone](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/mobile_iphone)
* [responsive](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/screenshots/responsive_mobile)

### Issue/Bugs

1. Layout Problems

   * Increase in font-size text when hero-list changes from 'active' to 'in-active' creating small downward shift of hero-column layout - fixed.

   * Horizontal misalignment between hero image and hero image preview. Prevents a smooth transition from one state to the other - fixed.

   * Small size difference and misalignment of hero image 'More Info' button and hero image preview text. Prevents a smooth transition from one state to the other - fixed.

   * Alignment of tooltip img (superhero preview) and superhero image varies on different desktop, tablet and mobile devices - known issue.

2. UX Issues

   * Cards (hero-column and villain-column) are too large on small screens and require user to scroll up and down to select a character. Removed card-body padding on the hero-info and villain-info sections on screens below 768px so that whole of card (hero-column or villain-column) is visible on small screens - fixed.

   * Navigation on small screens is laborious. The user is required to scroll up and down the screen too much. This becomes tedious after 2-3 matches - fixed.

     * Solution 1 - Use scrollIntoView method to automatically scroll down to villain-column when 'select hero' button is clicked or up to hero-column when 'select villain' button is clicked. Also use display property to hide when not in use. This solution was used initially then replaced with the solution below.

     * Solution 2 - Use animation property to fadeout hero-column and fade in villain-column to replace it when 'select hero' button is clicked. Use display property to return hero-column and villain-column back to original state when 'select villain' button is clicked.

   * Dot navigation is visible on touch screen devices larger than 768px width and doesn't work correctly. Added new media query that hides dot navigation on touch screens larger than 768px width - fixed.
  
   * Fade-in animation for img overlay and results modal felt sluggish. Decrease duration of fade-in animation from 3secs to 1.5secs - fixed.

3. Technical Problems

   * Score counter was recording wins and draws but not recording losses. This was caused by compareCatergoryScore function trying to use innerHTML method to insert image into image element which doesn't work. This was fixed by replacing innerHTML with replaceWith method - fixed.

   * 'Select Hero' button becomes active when hero list parent element ul#heroList is clicked. Modified selectSuperheroCatergory function conditional statement so button can only become active after hero list item has been selected first to prevent this from happening - fixed

   * Copyright statement is visible when api modal is active. Modified showMarvelAPIModal function to hide copyright statement when api modal is revealed - fixed.
