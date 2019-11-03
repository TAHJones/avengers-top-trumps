# Avengers Top Trumps

![Avengers Top Trumps Website](https://github.com/TAHJones/avengers-top-trumps/tree/master/assets/img/screenshot_avengers _tops_trumps.png)

View website in [Github Pages](https://tahjones.github.io/avengers-top-trumps/)

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

Site overview on desktop, tablet and mobile
![Site overview on desktop, tablet and mobile](https://github.com/TAHJones/avengers-top-trumps/blob/master/wireframes/layout_overview.pdf)

Site navigation - steps 1-6
![Site navigation - steps 1-6](https://github.com/TAHJones/avengers-top-trumps/blob/master/wireframes/site_navigation_steps1-6.pdf)

Wireframes for the avengers-top-trumps site can be found [here](https://github.com/TAHJones/avengers-top-trumps/tree/master/wireframes)

## Features

### Main page

The layout of the main page is designed to resemble two top trump cards. The card on the left is for super heroes (selected by the user) and the card on the right is for super villains (selected by the computer).

### Score Counter

This feature is positioned at the top of the page and consists of six grey infinity stone place holder images. Each time the user wins a match one of the place holder images is replaced with a coloured infinity stone (from left to right). If the client loses a match then the most recently acquired infinity stone is replaced with the place  holder image again. This allows the user to keep track of the score and determine how close they are to completing the game.

### Results Modal

Once a character and an opponent have been selected then a modal appears with the match result. It informs the user whether they have won, lost or drawn with their opponent and which infinity stone they have won, lost or retained (this is also recorded by the score counter). When the user collects all six infinity stones then the results modal informs them that they have won the game.

### API Modal

At the bottom of the currently selected superhero image is an 'info' button . When the user clicks on this button the API modal appears. This modal connects to the Marvel API and provides data from the Marvel API for the selected character. This includes their name, image, a description (when available) and a series of links to the marvel website for more character information.

### Features Left to Implement

Currently it's too easy to win the with certain superhero characters. It would be good to reduce the category scores of some superhero characters.

A second infinity stone score counter for the super villains so it's possible for the user to lose the entire game as well as individual matches.

The option for users to select a super villains and have super heroes as opponents.

Only allow the use of each character once. Once a superhero / super villain has been selected for a match they cannot be used again until the game has been completed.

Have the option for the user to play the game in easy, normal or hard mode, which changes the category scores for superheroes and super villains accordingly.

To improve mobile UX experience overlay hero and villain and cards and results modal to remove need to scroll up and down the page - has been implemented.

## Technologies Used

HTML
CSS
Javascript
[Bootstrap](https://getbootstrap.com/docs/)
[Intro.js](https://introjs.com/)

## Testing

Information regarding testing can be found in separate [testing.md](https://github.com/TAHJones/avengers-top-trumps/tree/master/testing/testing.md) file.

## Deployment

To deploy Avengers Top Trumps to GitHub Pages from its [GitHub repository](https://github.com/TAHJones/avengers-top-trumps) do the following:

    1. Log into GitHub.
    2. From the list of repositories on the screen, select **avengers-top-trumps**.
    3. Alternatively select **Repositories** from the menu items at the top of the page, then select **avengers-top-trumps**.
    4. From the menu items at the top of the page, select **Settings**.
    5. Scroll down to the **GitHub Pages** section.
    6. Under **Source** click on the drop-down menu and select **Master Branch**.
    7. On selecting Master Branch the page is automatically refreshed, Avengers Top Trumps is now deployed.
    8. In the **GitHub Pages** section the URL for the deployed website will now be available.

To clone Avengers Top Trumps from its [GitHub repository](https://github.com/TAHJones/avengers-top-trumps) and run on your local environment do the following:

    1. Follow this link to the Avengers Top Trumps [GitHub repository](https://github.com/TAHJones/avengers-top-trumps).
    2. Under the repository name, click "Clone or download".
    3. In the **Clone with HTTPs** pop up window, copy the URL address for the Avengers Top Trumps repository.
    4. In your local IDE open your preferred terminal.
    5. Navigate to the location where the cloned repository will be downloaded.
    6. Type `git clone` followed by the Avengers Top Trumps URL address as follows:

    `git clone https://github.com/TAHJones/avengers-top-trumps`

    7. Press Enter and the cloned repository will be created.

## Credits

### Content

Content for Marvel API modal is taken from the [Marvel developer website](https://developer.marvel.com/)

The Avengers title font is provided by [Fontry](https://www.fontspace.com/the-fontry/avengeance)

### Media

Images were obtained from:
[dlpng](https://dlpng.com)
[pngimg](http://pngimg.com)
[deviantart](https://www.deviantart.com)
[pngix](https://www.pngix.com)
[clipartmax](https://www.clipartmax.com/)

Images were edited using [GIMP](https://www.gimp.org/)

Color scheme was created from the Avengers [logo](https://www.deviantart.com/mintmovi3/art/Avengers-Endgame-2019-Avengers-logo-png-793337436) using [Gpick](http://www.gpick.org/)

## Acknowledgements

The project is inspired by the top trumps card game and features characters from the Marvel comic book universe. The concept of the game is loosely based on the plot of the Avengers Infinity War film and the Infinity Gauntlet comic book series.
