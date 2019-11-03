# Avengers Top Trumps

The project is based on the top trumps card game and features characters from the Marvel comic book universe. The concept of the game is loosely based on the plot of the Avengers Infinity War film and the Infinity Gauntlet comic book series.

To play the game the user must select from 1 of 15 super heroes, then choose from 1 of 6 superpower categories for that character. Next an opponent is randomly selected from 1 of 15 super villains. The selected superpower category score for the super hero is compared with the corresponding superpower category score for the randomly selected super villain and the winner and loser is calculated.

If the super hero wins then the user receives the 1st of 6 infinity stones. Each time the user beats an opponent they win another stone. When the user loses they lose a stone and if they draw they neither gain or lose a stone. To win the game the user must collect all 6 infinity stones.

## UX

This site is primarily designed for older children, teenagers and young adults, specifically fans of the Marvel films and comic books. As well as being a top trumps game, the site is intended to be a fun way to interact with the Marvel website's API to get more information about Marvel film and comic book characters.

### Selecting a Super Hero Character

Firstly the user must select a superhero. The user can navigate through the list of superheroes by either clicking on the dots beneath the image slider or by clicking on the navigation arrows at the bottom of the 'hero card'. A preview of each character is available by hovering over each of the dots.

Secondly the user must select a superhero category from the list of 6 categories e.g. agility. The super hero categories become available once the user begins to scroll through the list of superheroes.

Once the user has selected a category for a superhero then they are able to select that character. This is indicated by the 'Select Hero' button which changes colour from faded-out blue to bright blue indicating it's change from inactive to active status.

At this point the user is still able to select another character by using the dot and arrow navigation buttons. Once the user clicks the 'Select Hero' button their character choice is confirmed and cannot be undone. This is confirmed by the 'Select Hero' button going orange and inactive and the image border turning orange.

### Selecting a Super Villain Opponent

Once the user has confirmed their selection then the 'Select Villain' button changes colour from faded-out blue to bright blue indicating it's change from inactive to active status.

When the user clicks the 'Select Villain' button a super villain is randomly selected as an opponent. Once a super villain has been selected it's category score is compared with the corresponding superhero category score that was selected and the result of the match is determined e.g. the user either wins, draws or loses.

### The Result of the Match / How to play the Game

If the user wins then a 'Winner' message appears over the image of their super hero character and a 'Loser' message appears over the image of their super villain opponent. If the user loses then a 'Loser' message appears over the image of their super hero character and a 'Winner' message appears over the image of their super villain opponent. If the result is a draw then a 'Draw' message appears over both characters.

This is followed by a pop up message which confirms the result of the match. If the user won then it informs them that they have gained an infinity stone. If they have lost then it informs them that they have lost an infinity stone.

The user can remove the pop up message and return to the main page by clicking on the 'Play Again' button. This resets the game and updates the number of infinity the user has on the score counter at the top of the main page.

### How to win the game

In order to win the game the user must continue to play matches until they have collected all six infinity stones. This can be achieved playing a minimum of six matches (without drawing or losing) or more likely over more than six matches winning, drawing and losing thereby gaining, losing and regaining infinity stones until the target of six stones is reached.

When the user obtains all six infinity stones a pop up message appears that says 'You are a Top Trumps Champion! You have collected all six infinity stones and won the game!' The user can click the 'Start Again' but to return to the game and start again.

### wireframes

Wireframes for the avengers-top-trumps site can be found on github at the following location:
https://github.com/TAHJones/avengers-top-trumps/wireframes

## Features

##Main page
The layout of the main page is designed to resemble two top trump cards. The card on the left is for super heroes (selected by the user) and the card on the right is for super villains (selected by the computer).

##Score Counter
This feature is positioned at the top of the page and consists of six grey infinity stone place holder images. Each time the user wins a match one of the place holder images is replaced with a coloured infinity stone (from left to right). If the client loses a match then the most recently acquired infinity stone is replaced with the place  holder image again. This allows the user to keep track of the score and determine how close they are to completing the game.

##Results Modal
Once a character and an opponent have been selected then a modal appears with the match result. It informs the user whether they have won, lost or drawn with their opponent and which infinity stone they have won, lost or retained (this is also recorded by the score counter). When the user collects all six infinity stones then the results modal informs them that they have won the game.

##API Modal
At the bottom of the currently selected superhero image is an 'info' button . When the user clicks on this button the API modal appears. This modal connects to the Marvel API and provides data from the Marvel API for the selected character. This includes their name, image, a description (when available) and a series of links to the marvel website for more character information.


### Features Left to Implement

Currently it's too easy to win the with certain superhero characters. It would be good to reduce the category scores of some superhero characters.

A second infinity stone score counter for the super villains so it's possible for the user to lose the entire game as well as individual matches.

The option for users to select a super villains and have super heroes as opponents.

Only allow the use of each character once. Once a superhero / super villain has been selected for a match they cannot be used again until the game has been completed.

Have the option for the user to play the game in easy, normal or hard mode, which changes the category scores for superheroes and super villains accordingly.

To improve mobile UX experience overlay hero and villain and cards and results modal to remove need to scroll up and down the page - has been implemented.

## Technologies Used

HTML5
CSS3
Javascript

Bootstrap - Only grid and cards were used for the site layout.
https://getbootstrap.com/docs/4.1/layout/grid/
https://getbootstrap.com/docs/4.1/components/card/

Intro.js - Step-by-step website guide and feature introduction.
https://introjs.com/

AVENGEANCE-HEROIC-AVENGER font - Used for Avengers Top Trumps title.
https://www.fontspace.com/the-fontry/avengeance

GIMP 2.8.16 GNU Image Manipulation Program - Linux based open source software - Used to edit and manipulate pdf and jpg images.

Gpick 0.2.5 Advanced color picker - Linux based open source software - Used to generate site colour scheme using Avengers Infinity War Logo.
https://www.deviantart.com/mintmovi3/art/Avengers-Endgame-2019-Avengers-logo-png-793337436

## Testing

###Code validation:
HTML: https://validator.w3.org/
CSS: http://jigsaw.w3.org/css-validator/
Javascript: https://jshint.com/
JSON: https://jsonlint.com/, https://codebeautify.org/jsonviewer

## Cross Browser Testing
Lambda Test - Cloud based cross browser testing: https://www.lambdatest.com/

Real Time Browser Testing was achieved manually using the following procedure:

1. Introjs Guide:

	1. Click on the 'Guide' button
	2. Click on the 'Next' button, check the correct page element is highlighted and the correct message is displayed.
	3. Click the 'Next' button again, checking the correct element is highlighted and message is displayed.
	4. Continue to click the 'Next' button checking each step of the guide. Confirm that no steps are missed and that the steps are displayed in the correct order.
	5. Click on one of the guides dot navigation buttons. Check that it navigates to the correct element/message. Repeat this step twice using clicking different dot buttons to select different steps.
	6. Click on the 'Back' button. Check that is navigates to the previous element/message. Repeat this step twice.
	7. Click on the 'Skip' button. Check that this exits the guide.
	8. Restart the guide and navigate to the final screen. Click on the 'Done' button to check that this exits the guide.
	9. Click on the site dot or arrow buttons to check that this removes the 'Guide' button from the screen.

2. Site Navigation - Forward and back arrows:

	1. Click on the forward navigation arrow to scroll through the list of available superheroes. Confirm that the hero image and superpower category scores are displayed correctly and the later is in an active state (light blue colour, goes white on hover).
	2. Repeat the same procedure for the back navigation arrow.
	3. When the first superhero is selected (Antman) check that the back arrow navigates to the last superhero (Vision).
	4. When the last superhero is selected (Vision) check that the forward arrow navigates to the first superhero (Antman).

3. Site Navigation - Dots

	1. Click on dot navigation elements to select individual superheroes. Confirm that the hero image and superpower category scores are displayed correctly and the later is in an active state (turns light blue colour, goes white on hover). Confirm that the selected dot is in an active state (orange colour).
	2. Hover over the dots to display preview of superhero. Confirm that the hovered over dot is in an active state (white colour).
	3. Confirm that hovering and clicking on the same dot displays the same superhero image. 

4. Marvel API

	1. Click on the 'More Info' button. Confirm that the Marvel API modal appears and displays the correct hero name, image, description (when available) and Marvel comic book links.
	2. Click on the 'detail', 'wiki' or 'comiclink' link to confirm it works.
	3. Click on the 'Return' button to confirm this closes the modal and returns the user to the game.

5. Superhero superpower category scores

	1. Click on a superhero superpower category score. Confirm that the selected category turns orange and the 'Select Hero' button becomes active (turns light blue colour, goes white on hover).
	2. Click on the arrow or dot navigation elements to confirm that the selected superpower category becomes deselected.
	3. Click on another superhero superpower category score. Confirm that the selected category turns orange and the 'Select Hero' button becomes active (turns light blue colour, goes white on hover).

6. Select superhero Button

	1. Click on the 'Select Hero' button. Confirm that the button and the image border turns orange. Also confirm that the arrow and dot navigation elements disappear and the 'Select Villain' is in an active state (turns light blue colour, goes white on hover).

7. Select super villain button

	1. Click on the 'Select Villain' button. Confirm the villain name, image and superpower category scores are displayed and the selected category and 'Select Villain' button turns orange.

8. Display Results - Image overlay and results modal

	1. Confirm the hero and villain image overlays display the correct result.
	2. Confirm the results modal appears and displays the correct results title, image, infinity stone and results statement.
	3. Click the 'Play Again' button to confirm this closes the results modal, resets the game and returns the user to the game.

9. Score Counter

	1. If the user wins the match check that an infinity stone is added to the score counter. Confirm that the infinity stone matches the stone displayed in the results modal.

	2. If the user draws the match check that the number of infinity stones displayed in the score counter remains the same. Confirm that this matches the information displayed in the results modal.

	3. If the user loses the match check that the most recently acquired infinity stone is removed (unless this is the first match). Confirm that this matches the information displayed in the results modal.

	4. If the user wins the match and acquires all six infinity stones confirm that the 'Game Complete' results modal is displayed. Click the 'Play Again' button to confirm this closes the results modal, resets the game and score counter then returns the user to the game.

	5. Continue to play the game until each of the scenarios above has been checked.

###Real Time Browser Testing - Desktop
Testing was completed using the procedure described above on the following desktop configurations:

Mac OS Mojave, Safari 12, 1600 x 1200
Mac OS Mojave, Safari 12, 1024 x 768
Mac OS Mojave, Safari 12, 1366 x 768
Mac OS Mojave, Chrome 77, 1366 x 768
Mac OS Mojave, Chrome 76, 1280 x 1024
Mac OS Mojave, Firefox 69, 1280 x 800
Mac OS Mojave, Firefox 68, 1366 x 768
Mac OS Mojave, Opera 64, 1440 x 900
Mac OS Mojave, Opera 63, 1024 x 768
Mac OS High Sierra, Safari 11, 1366 x 768
Mac OS High Sierra, Chrome 77, 1024 x 1366
Mac OS High Sierra, Chrome 76, 1280 x 960
Mac OS High Sierra, Opera 64, 1366 x 768
Mac OS High Sierra, Opera 63, 1024 x 768
Mac OS El Capitan, Safari 11, 1366 x 768
Mac OS Sierra, Chrome 77, 1280 x 800
Mac OS Sierra, Chrome 76, 1920 x 1080
Mac OS Sierra, Firefox 69, 1280 x 960
Mac OS Sierra, Firefox 68, 1366 x 768
Mac OS Sierra, Opera 64, 1024 x 768
Mac OS Sierra, Opera 63, 1440 x 900

Windows 10, Chrome 77, 1366 x 768
Windows 10, Chrome 77, 1024 x 768
Windows 10, Chrome 73, 1366 x 768
Windows 10, Firefox 70, 1680 x 1050
Windows 10, Firefox 69, 1366 x 768
Windows 10, Firefox 65, 1024 x 768
Windows 10, Opera 64, 1024 x 768
Windows 10, Opera 63, 1680 x 1050
Windows 10, Opera 63, 1366 x 768
Windows 10, Edge 18, 1366 x 768
Windows 10, Edge 17, 1024 x 768

Windows 8.1, Chrome 77, 1024 x 768
Windows 8.1, Chrome 76, 1366 x 768
Windows 8.1, Firefox 69, 1024 x 768
Windows 8.1, Firefox 68, 1280 x 800
Windows 8.1, Opera 64, 1600 x 1200
Windows 8.1, Opera 63, 1280 x 1024


###Real Time Browser Testing - Tablet
Testing using the procedure above was completed on the following tablet devices:

Samsung Gal Tab S5E Android 9.0, 412 x 892, Chrome 75, Firefox 66, Opera 51
Galaxy Tab S4 10.5	Android 8.1	610 x 976, Chrome 75, Firefox 66, Opera 51
iPad Pro (12.9 inch) 3rd Generation,  iOS 13.0, Safari 13
iPad Pro (12.9 inch) 3rd Generation,  iOS 12.4, Safari 12
iPad Pro (11 inch),  iOS 13.0, Safari 13
iPad Pro (11 inch),  iOS 12.4, Safari 12
iPad Mini (5th Generation), iOS 13.0, Safari 13
iPad Mini (5th Generation), iOS 12.4, Safari 12
iPad (6th Generation), iOS 12.4, Safari 12
iPad (6th Generation), iOS 12.2, Safari 12
iPad Mini 4, iOS 12.4, Safari 12
iPad Mini 4, iOS 12.2, Safari 12

###Real Time Browser Testing - Mobile
Testing using the procedure above was completed on the following mobile devices:

###Android Phones
One plus 7, Android 9.0, Opera 51, 432 x 936, Chrome 75, Firefox 66, Opera 51
One plus 7 pro, Android 9.0, 412 x 892, Chrome 75, Firefox 66, Opera 51
LG V20, Android 7.0, 480 x 854, Chrome 75, Firefox 66, Opera 51
LG K8, Android 7.0, 412 x 732, Chrome 75, Firefox 66, Opera 51
LG G6, Android 8.0, 412 x 823, Chrome 75, Firefox 66, Opera 51
Google Pixel 2, Android 8.0, 412 x 732, Chrome 75, Firefox 66, Opera 51
Google Pixel 2 XL, Android 8.0, 412 x 823, Chrome 75, Firefox 66, Opera 51
Google Pixel 3, Android 9.0, 412 x 823, Chrome 75, Firefox 66, Opera 51
Google Pixel 3 XL, Android 9.0, 360 x 740, Chrome 75, Firefox 66, Opera 51
Galaxy S9 Plus, Android 9.0, 360 x 740, Chrome 75, Firefox 66, Opera 51
Galaxy S10, Android 9.0, 412 x 869, Chrome 75, Firefox 66, Opera 51
Galaxy S10 Plus, Android 9.0, 412 x 869, Chrome 75, Firefox 66, Opera 51
Galaxy S10E, Android 9.0, 412 x 869, Chrome 75, Firefox 66, Opera 51

###Apple Phones
iPhone 11 Pro Max, iOS 13.0, Safari 13
iPhone 11 Pro, iOS 13.0, Safari 13
iPhone 11, iOS 13.0, Safari 13
iPhone XS Max, iOS 13.0, Safari 13
iPhone XS, iOS 13.0, Safari 13
iPhone XR, iOS 13.0, Safari 13
iPhone X, iOS 13.0, Safari 13
iPhone X, iOS 12.4, Safari 12
iPhone 8 Plus, iOS 13, Safari 13
iPhone 8 Plus, iOS 12.4, Safari 12
iPhone 8, iOS 13, Safari 13
iPhone 8, iOS 12.4, Safari 12
iPhone 7 Plus, iOS 12.4, Safari 12
iPhone 7 Plus, iOS 12.2, Safari 12
iPhone 7, iOS 12.4, Safari 12
iPhone 7, iOS 12.2, Safari 12

##Visual UI Testing
###Screen Shot Browser Testing - Desktop
Desktop screenshots are located at the following locations:
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/desktop_windows
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/desktop_mac
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/responsive_desktop

Testing were completed on the following desktop environments:
###Windows PC
Windows 10, Chrome 76, 75, 1024 x 768
Windows 10, Firefox 67, 66, 1024 x 768
Windows 10, Opera 62, 60, 1024 x 768
Windows 10, Edge 17, 1024 x 768
Windows 8.1, Chrome 76, 75, 1024 x 768
Windows 8.1, Firefox 67, 66, 1024 x 768
Windows 8.1, Opera 62, 60, 1024 x 768
Windows 8.1, IE 11, 1024 x 768
Windows 8, Chrome 76, 75, 1024 x 768
Windows 8, Firefox 67, 66, 1024 x 768
Windows 8, Opera 62, 60, 1024 x 768
Windows 8, IE 10, 1024 x 768
Windows 7, Chrome 76, 1024 x 768
Windows 7, Firefox 67, 1024 x 768
Windows 7, Opera 62, 1024 x 768
Windows 7, IE 11, 1024 x 768

###Apple Mac
Mac OS Mojave, Chrome 76, 75, 1024 x 768
Mac OS Mojave, Firefox 67, 66, 1024 x 768
Mac OS Mojave, Opera 62, 60, 1024 x 768
Mac OS Mojave, Safari 12, 1024 x 768
Mac OS High Sierra, Chrome 76, 75,  1024 x 768
Mac OS High Sierra, Firefox 67, 66, 1024 x 768
Mac OS High Sierra, Opera 62, 60, 1024 x 768
Mac OS High Sierra, Safari 11, 	1024 x 768
Mac OS Sierra, Chrome 76, 75, 1024 x 768
Mac OS Sierra, Firefox 67, 66, 1024 x 768
Mac OS Sierra, Opera 62, 60, 1024 x 768
Mac OS Sierra, Safari 10.1, 1024 x 768

###Screenshot Browser Testing - Tablet
Tablet screenshots are located at the following locations:
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/tablet_ipad
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/responsive_tablet

Testing were completed on the following tablet devices:
iPad (6th-Generation), iOS 12.4
iPad Pro (12.9 inch) 3rd Generation, iOS 13.0
iPad Pro (11-inch), iOS 12.4
iPad Pro, iOS 10.3
iPad Pro, iOS 9.3
iPad Air 2, iOS 9.3
iPad Air 2, iOS 8.1
iPad Air, iOS 8.3
iPad Mini 4, iOS 9.3
iPad Mini 3, iOS 8.1

###Screenshot Browser Testing - Mobile
Mobile screenshots are located at the following locations:
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/mobile_android
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/mobile_iphone
https://github.com/TAHJones/avengers-top-trumps/testing/screenshots/responsive_mobile

Testing was completed on the following mobile devices:
###Android Phones
Samsung Galaxy S10E Android 9.0 412x869
Galaxy Note 9 Android 8.1 360x740
Samsung Galaxy S10 Plus Android 9.0 412x869
Samsung Galaxy S10 Android 9.0 412x869
Galaxy S9 Plus Android 9.0 412x732
Oppo R9 Android 7.0 432x768
Google Pixel 3 XL Android 9.0360x612
Google Pixel 3 Android 9.0 412x695
Google Pixel 2 XL Android 8.0 412x823
Google Pixel 2 Android 8.0 412x732
Google Pixel XL Android 7.1 412x732
MotoX 2nd gen Android 5.0 360x640
MotoG 2nd gen Android 5.0 360x640
HTC Ten Android 6.0 412x732
HTC One M8 Android 4.4 412x684
Huawei Honor 6x Android 7.0 412x846
One Plus 6T Android 9.0 414x736
One Plus 3T Android 5.1 432x768
Oppo A33 Android 6.0 406x722
Xiaomi Mi 8 Android 9.0 412x857
Xiaomi Mi Note 5 Pro Android 9.0	432x864
Xiaomi Mi 5	Android 6.0	412x732
Xiaomi Redmi Note 3	Android 5.1	360x640
Gionee Marathon M5	Android 5.1	412x732
Gionee Elfie E7 Android 4.2	1080x1920

###Apple Phones
iPhone 7	iOS 10.3	375x667
iPhone X 	iOS 11.3	375x812
iPhone 8	iOS 10.3	375x667
iPhone 7 Plus	iOS 10.3	414x736
iPhone 6s	iOS 9.0		375x667
iPhone SE	iOS 10.3	320x568
iPhone XS	iOS 12.0	375x812
iPhone XR	iOS 12.0	414x896
iPhone XS Max iOS 12.0 414x896
iPhone 6s Plus iOS 9.0 414x736
iPhone 6 iOS 8.1 375x667
iPhone 6 Plus iOS 8.1 414x736
iPhone 5s iOS 7.1 320x568
iPhone 5 iOS 6.0 320x568
iPhone 4s iOS 6.0 320x480


###Issue/Bugs
1. Layout Problems

	1. Increase in font-size text when hero-list changes from 'active' to 'in-active' creating small downward shift of hero-column layout - fixed.

	2. Horizontal misalignment between hero image and hero image preview. Prevents a smooth transition from one state to the other - fixed.

	3. Small size difference and misalignment of hero image 'More Info' button and hero image preview text. Prevents a smooth transition from one state to the other - fixed.

2. UX Issues

	1. Cards (hero-column and villain-column) are too large on small screens and require user to scroll up and down to select a character. Removed card-body padding on the hero-info and villain-info sections on screens below 768px so that whole of card (hero-column or villain-column) is visible on small screens - fixed.

	2. Navigation on small screens is laborious. The user is required to scroll up and down the screen too much. This becomes tedious after 2-3 matches - fixed.

		Solution 1 - Use scrollIntoView method to automatically scroll down to villain-column when 'select hero' button is clicked or up to hero-column when 'select villain' button is clicked. Also use display property to hide when not in use. This solution was used initially then replaced with the solution below.

		Solution 2 - Use animation property to fadeout hero-column and fade in villain-column to replace it when 'select hero' button is clicked. Use display property to return hero-column and villain-column back to original state when 'select villain' button is clicked.

	3. Dot navigation is visible on touch screen devices larger than 768px width and doesn't work correctly. Added new media query that hides dot navigation on touch screens larger than 768px width - fixed.

3. Technical Problems

	1. Score counter was recording wins and draws but not recording losses. This was caused by compareCatergoryScore function trying to use innerHTML method to insert image into image element which doesn't work. This was fixed by replacing innerHTML with replaceWith method - fixed.

	2. 'Select Hero' button becomes active when hero list parent element ul#heroList is clicked. Modified selectSuperheroCatergory function conditional statement so button can only become active after hero list item has been selected first to prevent this from happening - fixed

	3. Copyright statement is visible when api modal is active. Modified showMarvelAPIModal function to hide copyright statement when api modal is revealed - fixed.


## Deployment

The avengers-top-trumps site is deployed on GitHub Pages at:
https://github.com/TAHJones/avengers-top-trumps

The avengers-top-trumps site was developed on AWS Cloud9 at:
https://vfs.cloud9.us-east-1.amazonaws.com

## Credits

### Content
The content of the Marvel API modal (accessed by clicking the 'info' button) is comic character data taken from the Marvel developer website - https://developer.marvel.com/

The avengeance-heroic-avenger font used for the site title is provided by Fontry.

### Media
The images used in this site were obtained from:
https://dlpng.com
http://pngimg.com
https://www.deviantart.com
https://www.pngix.com
https://www.clipartmax.com/

## Acknowledgements

The project is inspired by the top trumps card game and features characters from the Marvel comic book universe. The concept of the game is loosely based on the plot of the Avengers Infinity War film and the Infinity Gauntlet comic book series.
