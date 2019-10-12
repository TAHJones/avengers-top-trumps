
/*GLOBAL VARIABLES*/
let heroImg = document.getElementById('heroImg');
let villainImg = document.getElementById('villainImg');
let slideIndex = 0; // set default value to show first slide
let prevSlide = document.getElementById('prev');
let nextSlide = document.getElementById('next');
let dots = document.getElementsByClassName("dot");
let hideDots = document.getElementById("dotSelector");
let selectHeroButton = document.getElementById('selectHeroButton');
let selectVillainButton = document.getElementById('selectVillainButton');
let superheroName;
let supervillainName;
let resultsModal = document.getElementById("resultsModal"); // declare resultsModal in global scope so is available to showResultsModal and playAgain.addEventListener
let startGuide = document.getElementById("startGuide");
let heroScoreCounter;
let infinityStoneName_Won;
let infinityStoneColor_Won;
let infinityStoneName_Lost;
let infinityStoneColor_Lost;
let infinityStoneId;

/*TEMPLATE VARIABLES*/
let heroFilePathName;
let villainFilePathName;
let agility;
let intelligence;
let magic;
let strength;
let speed;
let technology;


/*TEMPLATE FUNCTIONS*/

/**
 * Function is called within showSuperhero function. It inserts either hero or villain name into a template literal that displays character image and returns it.
 * @param {string} charactertype - can be "hero" or "villain"
 */
function characterImgTemplate(charactertype) {
let characterImg;
	if(charactertype === "hero") {
	  characterImg = `<img src="assets/img/${heroFilePathName}.png" class="${charactertype}-img" alt="${heroFilePathName}">
										<div id="infoOverlayId" class="info-overlay">
                      <button id="infoOverlayButton" class="info-overlay-text">More Info</button>
                    </div>`; // hero template also contains overlay which links to marvel api modal
	} else if (charactertype === "villain") {
	  characterImg = `<img src="assets/img/${villainFilePathName}.png" class="${charactertype}-img" alt="${villainFilePathName}">`;
	}
	return characterImg;
} // characterImgTemplate function end

/**
 * Function is called within showSuperhero function. It inserts either hero or villain data into a template literal that displays character information and returns it.
 * @param {string} charactertype - can be "hero" or "villain"
 */
function characterInfoTemplate(charactertype) {
	let characterInfoTitle;
	if(charactertype === "hero") {
		characterInfoTitle = superheroName;
	} else if(charactertype === "villain") {
		characterInfoTitle = supervillainName;
	}
  let characterInfo = `<h2 class="card-title ${charactertype}-title">${characterInfoTitle}</h2>
												<ul class="list-group ${charactertype}-list" id="heroList">
													<li class="list-group-item ${charactertype}-list-active">Agility: ${agility}</li>
													<li class="list-group-item ${charactertype}-list-active">Intelligence: ${intelligence}</li>
    											<li class="list-group-item ${charactertype}-list-active">Magic: ${magic}</li>
													<li class="list-group-item ${charactertype}-list-active">Strength: ${strength}</li>
													<li class="list-group-item ${charactertype}-list-active">Speed: ${speed}</li>
													<li class="list-group-item ${charactertype}-list-active">Technology: ${technology}</li>
												</ul>
											</div>`;
	return characterInfo;
} // characterInfoTemplate function end

/**
 * Function is called within imgOverlayTemplate function. It creates img overlay for hero and villain img elements that displays the results of the match.
 * @param {string} result - can be "Winner", "Loser" or "Draw".
 * @param {object} parentElement - can be heroImg or villainImg variable.
 * @param {string} overlayId - can be "heroOverlayId" or "villainOverlayId".
 */
function imgOverlayTemplate(result, parentElement, overlayId){
  let ImgOverlay = document.createElement("div"); // create new div element
  ImgOverlay = ImgOverlay.innerHTML = `<div id="${overlayId}" class="overlay">
                                              <div class="overlay-text">${result}</div>
                                            </div>`; // insert div element with result variable
  parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
} // imgOverlayTemplate function end

/**
 * Function called from compareCatergoryScore function. It calls the imgOverlayTemplate twice function with three different parameter configurations depending on whether the user has won, lost or drawn the match.  
 * @param {string} result - can be either "win", "Lose" or "draw".
 */
function displayImgOverlay(result) {
	let heroOverlayId;
	let villainOverlayId;
	if (result === "win") {
    imgOverlayTemplate("Winner", heroImg, "heroOverlayId");
    imgOverlayTemplate("Loser", villainImg, "villainOverlayId");
	} else if (result === "lose") {
    imgOverlayTemplate("Loser", heroImg, "heroOverlayId");
    imgOverlayTemplate("Winner", villainImg, "villainOverlayId");
	} else if (result === "draw") {
    imgOverlayTemplate("Draw", heroImg, "heroOverlayId");
    imgOverlayTemplate("Draw", villainImg, "villainOverlayId");
	}
  heroOverlayId = document.getElementById("heroOverlayId");
  villainOverlayId = document.getElementById("villainOverlayId");
  heroOverlayId.classList.add("overlay-fadein");
  villainOverlayId.classList.add("overlay-fadein");
} // displayImgOverlay function end

/**
 * It inserts hero and villain data into template literal to display match result. Template literal is then inserted into resultsModal element.
 * @param {string} result - can be "win", "firstResultLose", "lose", "firstResultDraw", "draw" or "complete".
 */
function resultsInfoTemplate(result) {
	let winner;
	let loser;
	let title;
	let modalImg;
	let firstParagraph;
	let secondParagraph;
	let congratulationsYouHaveObtained = `Congratulations you have obtained the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span>`;
	let youMustFightAgain = `You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span>`;
	let collectAllSixStones = `Collect all six infinity stones to win the game!`;
	let youHaveLostThe = `You have lost the <span class="${infinityStoneColor_Lost}">${infinityStoneName_Lost}</span>`;
	let toCompleteYourMission = `To complete your mission you must regain the ${infinityStoneName_Lost}!`;
	let aquireThePowerStone = `You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span>`;
	let youLiveToFight = `You live to fight another day and still possess the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span>`;

  if(result === "win") {
  	winner = superheroName;
  	loser = supervillainName;
  	title = `${winner} defeats ${loser}`;
  	modalImg = heroFilePathName;
  	firstParagraph = congratulationsYouHaveObtained;
  	secondParagraph = collectAllSixStones;
  } else if(result === "firstResultLose") {
  	winner = supervillainName;
  	loser = superheroName;
  	title = `${winner} defeats ${loser}`;
  	modalImg = villainFilePathName;
  	firstParagraph = youMustFightAgain;
  	infinityStoneId = "infinitystone2";
  	secondParagraph = collectAllSixStones;
  } else if (result === "lose") {
  	winner = supervillainName;
  	loser = superheroName;
  	title = `${winner} defeats ${loser}`;
  	modalImg = villainFilePathName;
  	firstParagraph = youHaveLostThe;
  	secondParagraph = toCompleteYourMission;
	} else if (result === "firstResultDraw") {
  	winner = superheroName;
  	loser = supervillainName;
  	title = `${winner} draws with ${loser}`;
  	modalImg = heroFilePathName;
  	firstParagraph = aquireThePowerStone;
  	infinityStoneId = "infinitystone2";
  	secondParagraph = collectAllSixStones;	
  } else if (result === "draw") {
  	winner = superheroName;
  	loser = supervillainName;
  	title = `${winner} draws with ${loser}`;
  	modalImg = heroFilePathName;
  	firstParagraph = youLiveToFight;
  	secondParagraph = collectAllSixStones;
  } else {
  	alert("Error! Something went wrong, there is no result");
  }
	
	let resultsInfo = `<div class="row h-100 justify-content-center results-modal-inner">
    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
      <h2 class="">${title}</h2>
      <img class="hero-modal-image" src="assets/img/${modalImg}.png">
      <div class="results-modal-infinitystone">
        <p>${firstParagraph}</p>
        <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
        <p>${secondParagraph}</p>
      </div>
      <div class="play-again-button-bg d-flex justify-content-center">
        <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
      </div>
    </div>
  </div>`;
  
 resultsModal.innerHTML = resultsInfo;
} // resultsInfoTemplate function end


/*GENERAL FUNCTIONS*/

/**
 * Function that uses js date method to get current year and add it to copyright statements then inserts them into page footer and marvel api modal.
 * @param {string} location - either "footer" or "marvelApiModal"
 */
function getCurrentYear(location){
  let copyRightText;;
  let marvelCopyRightText
  // let marvelCopyRight = document.getElementById("marvelCopyRight");
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  if(location === "footer") {
    copyRightText = "2018 - " + year + " © Thomas Jones - All Rights Reserved";
    return copyRightText;
  } else if(location === "marvelApiModal") {
    marvelCopyRightText = year + " © Marvel - All Rights Reserved";
    return marvelCopyRightText;
  }
}

// call getCurrentYear function and insert copyright statement into footer
let copyRight = document.getElementById("copyRight");
copyRight.innerHTML = getCurrentYear("footer");

/**
 * Function is called by called when dot or arrow nav elements are clicked. It hides the startGuide button when the user starts playing the game.
 * 
 */
function hideStartGuide() {
  let startGuideBg = document.getElementById("startGuideBg");
  startGuideBg.classList.replace("start-guide-show","start-guide-hide");
}

/**
 * Function is called by startGuide event listener. Calls introJs function for introjs plugin. Adds different settings depending on whether screen width is > or < 768px. Then function is initalised.
 */
function getIntroGuide() {
  let introguide = introJs();
  let introguideOptions;
  if(window.innerWidth < 768) {
    introguideOptions = [
      {
        element: 'h1',
        intro: 'Follow this guide to learn how to play Avengers Top Trumps.',
        position: 'bottom'
      },
      {
        element: '#next',
        intro: 'Click on the arrows to scroll through the list of superheroes.',
        position: 'right'
      },
      {
        element: '.agility',
        intro: 'Next select a superpower from the following list of abilities.',
        position: 'top'
      },
      {
        element: '#selectHeroButton',
        intro: 'Click button to confirm superhero and superpower selection.',
        position: 'bottom'
      },
      {
        element: '#selectVillainButton',
        intro: 'Click button to randomly select supervillain opponent.',
        position: 'bottom'
      }
    ]; 
  } else if(window.innerWidth >= 768) {
    introguideOptions = [
      {
        element: 'h1',
        intro: 'Follow this guide to learn how to play Avengers Top Trumps.',
        position: 'bottom'
      },
      {
        element: '.vision',
        intro: 'Click on the dots to select a superhero (hover over the dots for preview).',
        position: 'right'
      },
      {
        element: '#next',
        intro: 'Or click on the arrows to scroll through the list of superheroes.',
        position: 'right'
      },
      {
        element: '.agility',
        intro: 'Next select a superpower from the following list of abilities.',
        position: 'top'
      },
      {
        element: '#selectHeroButton',
        intro: 'Click button to confirm superhero and superpower selection.',
        position: 'bottom'
      },
      {
        element: '#selectVillainButton',
        intro: 'Click button to randomly select supervillain opponent.',
        position: 'bottom'
      }
    ]; 
  }
  
  introguide.setOptions({
    showStepNumbers: false,
    showBullets: true,
    showButtons: true,
    scrollToElement: true,
    exitOnEsc: true,
    exitOnOverlayClick: false,
    disableInteraction: true,
    steps: introguideOptions 
  }); 
  
  introguide.start();
}

/**
 * Function is called within getMarvelData function using "hero" and n parameter. It takes the data for the hero selected by the user from the list of heros and inserts the data for that hero into template literals created by the characterImgTemplate and characterInfoTemplate functions and then inserts them in the HTML document. 
 * @param {array} data - array of object data for each hero.
 * @param {number} n -  number associated with hero selected by the user using arrow and dot nav elements and passed by getMarvelData function which is used by function to select hero.
 */
function showSuperhero(data, n) {
  if (n > data.length) {
    slideIndex = 1;
  } else if (n < 1)
  {
    slideIndex = data.length;
  }

  let heroInfo = document.getElementById('heroInfo');
  let superHero = data[slideIndex-1];
  heroFilePathName = superHero[0];
  superheroName = superHero[1].name;
  agility = superHero[1].agility;
  intelligence = superHero[1].intelligence;
  magic = superHero[1].magic;
  strength = superHero[1].strength;
  speed = superHero[1].speed;
  technology = superHero[1].technology;
  
	for (let i = 0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
	}

  dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no.

  heroImg.innerHTML = characterImgTemplate("hero");
  heroInfo.innerHTML = characterInfoTemplate("hero");
}

/**
 * Function is called within getMarvelApiUrl function. It takes selected superhero name from heroFilePathName variable and returns corresponding name for that character used by Marvel API
 */
function marvelHero(superheroName){
  switch(superheroName) { // match superhero name to marvel api name identifier and add to marvelHero variable
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case "undefined":
      alert("Error! superheroName variable is empty");
      break;
    case "antman":
      return 'Ant-Man (Scott Lang)';
    case "blackwidow":
      return "Black Widow/Natasha Romanoff (MAA)";
    case "captainamerica":
      return "Captain America";
    case "captainmarvel":
      return "Captain Marvel (Carol Danvers)";
    case "deadpool":
      return "Deadpool";
    case "drstrange":
      return "Doctor Strange";
    case "falcon":
      return "Falcon";
    case "hawkeye":
      return "Hawkeye/Clint Barton (MAA)";
    case "hulk":
      return "Hulk";
    case "ironman":
      return "Iron Man";
    case "scarletwitch":
      return "Scarlet Witch (Ultimate)";
    case "spiderman":
      return "Spider-Man";
    case "thor":
      return "Thor";
    case "warmachine":
      return "War Machine (Ultimate)";
    case "vision":
      return "Vision";
  }
}

/**
 * Function called from getMarvelApiData function. It constructs Marvel API url with select hero name and assigns to apiURL variable which it returns. getMarvelApiData function uses this url to fetch data from the Marvel API for the select hero.
 */
function getMarvelApiUrl() {
  let marvelHeroName = marvelHero(heroFilePathName);
  let apiEndpoint = 'https://gateway.marvel.com/v1/public/';
  let resourceType = 'characters';
  let apiKey = 'e8e6c4f6d9f4f13655a0a25d4649f754';
  let apiURL = apiEndpoint + resourceType + '?name=' + marvelHeroName + '&apikey=' + apiKey;
  return apiURL;
} // getMarvelApiUrl function end

/**
 * Function is called within getMarvelApiData function. It takes the json data from getMarvelApiData and filters it for marvelData characters name, image, description and urls for further character information on the Marvel website. The data is assigned to variables and inserted into a template literal then inserted into marvelData element.
 */
function showMarvelAPIData(data) {
    let marvelData = document.getElementById('marvelData');
    let marvelName = data.data.results[0].name;
    let marvelDescription = data.data.results[0].description;
    let marvelResources = data.data.results[0].urls;
    let thumbnailPath;
    let thumbnailExtension;
    let marvelResourceList;
    let fullThumbnailPath;
    let marvelCopyright;

    // loop through array of objects containing external urls and generate list of page links
    for (let item in marvelResources) {
        let type = marvelResources[item].type;
        let url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    marvelResourceList = marvelResourceList.replace('undefined',''); // removed 'undefined from the beginning of the list
    thumbnailPath = data.data.results[0].thumbnail.path;
    thumbnailPath = thumbnailPath.replace('http','https'); // modifiy path name to https to avoid getting blocked mixed content
    thumbnailExtension = data.data.results[0].thumbnail.extension;
    fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;
    marvelData.innerHTML = `<div class="results-modal-inner">
                              <div class="marvel-data-img"><img src="${fullThumbnailPath}" alt="${marvelName}"></img>
                              <div class="marvel-data-name"><h2>${superheroName}</h2></div>
                              <div class="marvel-data-description"><p>${marvelDescription}</p></div>
                              <div class="marvel-data-urls"><ul>${marvelResourceList}</ul></div>
                              <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>
                              <div id="marvelCopyRight"></div>  
                            </div>`;
    let marvelCopyRight = document.getElementById("marvelCopyRight");
    marvelCopyRight.innerHTML = getCurrentYear("marvelApiModal");
} // showMarvelAPIData function end

/**
 * Function is called within getMarvelData function using "hero" and n parameter. It reveals Marvel API modal when infoOverlayButton is clicked and hides the modal when marvelDataButton is clicked.
 */
function showMarvelAPIModal() {
  let marvelDataBg = document.getElementById("marvelDataBg");
  let infoOverlayButton = document.getElementById("infoOverlayButton");
  infoOverlayButton.addEventListener("click", function(){
    marvelDataBg.classList.replace("marvel-data-hide", "marvel-data-reveal");
	  let marvelDataButton = document.getElementById("marvelDataButton");
    marvelDataButton.addEventListener("click", function() {
      marvelDataBg.classList.replace("marvel-data-reveal", "marvel-data-hide");
    }, false);
  }, false);
}

/**
 * Function is called within getMarvelData function using "hero" and n parameter. It adds 'selected' styles to 'active' hero list item when clicked, adds 'inactive' styles to all other list items and adds 'active' styles to selectHeroButton.
 */
function selectSuperheroCatergory() {
	let heroInfoLink = document.getElementById("heroList");
	let heroInfoList = document.querySelectorAll(".hero-list > li");
	let heroInfoArray = Array.from(heroInfoList);
	heroInfoLink.addEventListener('click', function(e){
	  if(e.target.className === "list-group-item hero-list-active"){
	    e.target.className = "list-group-item selected-catergory";
			heroInfoArray.forEach(function(element, index){
		    if(element.className === "list-group-item hero-list-active"){
		      element.className = "list-group-item hero-list-inactive";
		  	}
		  });
	  }
	  if(selectHeroButton.classList.contains("select-hero-inactive")){
	    selectHeroButton.className = "select-hero select-hero-active";
	  }
	}, false);
}

/**
 * Function is called within getMarvelData function using "hero" and n parameter. It resets 'active' styles to 'inactive' if nav elements are used to select another hero.
 */
function resetSuperheroButton() {
  if(selectHeroButton.className === "select-hero select-hero-active"){
    selectHeroButton.className = "select-hero select-hero-inactive";
  }
}

/**
 * Function is called within getMarvelData function using "hero" and n parameter. When 'active' selectHeroButton is clicked adds 'selected' styles to heroImg and selectHeroButton elements, removes nav and infoOverlayId elements and adds 'active' styles to selectVillainButton.
 */
function selectSuperheroButton() {
  selectHeroButton.addEventListener('click', function(){
    if(selectHeroButton.classList.contains("select-hero-active")){
      selectHeroButton.textContent = `${superheroName}`;
      selectHeroButton.style.border = "4px solid #a46e32";
      heroImg.firstElementChild.style.border = "4px solid #FFA94A";
      selectHeroButton.className = "select-hero select-hero-selected";
      hideDots.style.zIndex = "-1";
      prevSlide.style.visibility = "hidden";
      nextSlide.style.visibility = "hidden";
      selectVillainButton.className = "select-villain select-villain-active";
      let infoOverlayId = document.getElementById("infoOverlayId");
      let infoOverlayParent = infoOverlayId.parentNode;
      infoOverlayParent.removeChild(infoOverlayId);
    }
  }, false);	
}

/**
 * Function is called within getMarvelData function using "villain" parameter. It randomly selects an individual villain from a list of villains and inserts the data for that villain into template literals created by the characterImgTemplate and characterInfoTemplate functions and then inserts them in the HTML document. 
 * @param {array} data - array of object data for each villain.
 * @param {number} n - randomly generated number passed by getMarvelData function which is used to select villain.
 */
function showSupervillain(data, n) {
	let superVillain = data[n];
  let villainInfo = document.getElementById('villainInfo');
  villainFilePathName = superVillain[0];
  supervillainName = superVillain[1].name;
  agility = superVillain[1].agility;
  intelligence = superVillain[1].intelligence;
  magic = superVillain[1].magic;
  strength = superVillain[1].strength;
  speed = superVillain[1].speed;
  technology = superVillain[1].technology;
  
  villainImg.innerHTML = characterImgTemplate("villain");
  villainInfo.innerHTML = characterInfoTemplate("villain");
} // showSupervillain function end

/**
 * Function is called within getMarvelData function using "villain" parameter. It changes selectVillainButton and villainImg elements CSS styles when villain is selected.
 */
function selectedSupervillainStyles() {
  selectVillainButton.textContent = `${supervillainName}`;
  selectVillainButton.style.border = "4px solid #a46e32";
  selectVillainButton.className = "select-villain select-villain-selected";
  villainImg.firstElementChild.style.border = "4px solid #FFA94A";
}

/**
 * Function is called within compareCatergoryScore function. It takes the score from the selected hero catergory and returns it and it's index value as an object
 */
function getHeroCatergoryScore(){
  let heroCatergoryScoreObject = {};
  let heroList = document.querySelectorAll(".hero-list > li");
  let heroListArray = Array.from(heroList);
  heroListArray.forEach(function(element, index){
    if(element.classList.contains("selected-catergory")) {
      heroCatergoryScoreObject.selectedCatergoryIndex = index;
      let heroCatergoryScoreText = element.textContent;
      let heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1));
      heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore;
      heroCatergoryScoreObject.heroCatergoryScore = heroCatergoryScore;
    }
  });
  return heroCatergoryScoreObject;
} // getHeroCatergoryScore function end

/**
 * Function is called within compareCatergoryScore function. It takes the object data from the getHeroCatergoryScore function and adds the corresponding catergory villain score then returns the updated object.
 * @param {object} heroCatergoryScoreObject - takes the returned object data from the getHeroCatergoryScore function
 */
function getVillainCatergoryScore(heroCatergoryScoreObject){
  let catergoryScoreObject = heroCatergoryScoreObject;
  let villainList = document.querySelectorAll(".villain-list > li");
  let villainListArray = Array.from(villainList);
  villainListArray.forEach(function(element, index){
    if(index === catergoryScoreObject.selectedCatergoryIndex){
    	let catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory";
      let catergoryScoreText = element.textContent;
      let villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1));
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore;
    } else if (element.classList.contains("villain-list-active")) {
      element.classList.replace("villain-list-active", "villain-list-inactive");
    }
  });
  return catergoryScoreObject;
} // getVillainCatergoryScore function end


// conditional statement that checks value of heroScoreCounter and resets to 1 is value is <= 1
if(heroScoreCounter > 1){
  heroScoreCounter;
  console.log(heroScoreCounter);
} else {
  heroScoreCounter = 1;
}

/**
 * Function is called within showResultsModal function and uses the heroScoreCounter variable to display the correct infinity stone image in the results modal 
 */
function infinityStoneCounter(){
	switch(heroScoreCounter) { // match infinity stone name with counter score number
	  case "":
	  case 0:
	  case "0":
	    alert("Error! heroScoreCounter variable is empty");  // return an error for function called with an 'empty' parameter value
	    return heroScoreCounter;
	  case null:
	    alert("Error! heroScoreCounter variable is null");
	    return heroScoreCounter;
	  case false:
	    alert("Error! heroScoreCounter variable is false");
	    return heroScoreCounter;
	  case undefined:
	    alert("Error! heroScoreCounter variable is undefined");
	    return heroScoreCounter;
	  case 1:
	    infinityStoneName_Lost = "Power Stone";
	    infinityStoneColor_Lost = "power-stone-color";
	    break;
	  case 2:
	    infinityStoneName_Won = "Power Stone";
	    infinityStoneColor_Won = "power-stone-color";
	    infinityStoneName_Lost = "Space Stone";
	    infinityStoneColor_Lost = "space-stone-color";
	    break;
	  case 3:
	    infinityStoneName_Won = "Space Stone";
	    infinityStoneColor_Won = "space-stone-color";
	    infinityStoneName_Lost = "Reality Stone";
	    infinityStoneColor_Lost = "reality-stone-color";
	    break;
	  case 4:
	    infinityStoneName_Won = "Reality Stone";
	    infinityStoneColor_Won = "reality-stone-color";
	    infinityStoneName_Lost = "Soul Stone";
	    infinityStoneColor_Lost = "soul-stone-color";
	    break;
	  case 5:
	    infinityStoneName_Won = "Soul Stone";
	    infinityStoneColor_Won = "soul-stone-color";
	    infinityStoneName_Lost = "Time Stone";
	    infinityStoneColor_Lost = "time-stone-color";
	    break;
	  case 6:
	    infinityStoneName_Won = "Time Stone";
	    infinityStoneColor_Won = "time-stone-color";
	    infinityStoneName_Lost = "Mind Stone";
	    infinityStoneColor_Lost = "mind-stone-color";
	    break;
	  case 7:
	    infinityStoneName_Won = "Mind Stone";
	    infinityStoneColor_Won = "mind-stone-color";
	    break;
	    default:
	     switch(true){
	      case (heroScoreCounter >= 8):
	       alert("Error! heroScoreCounter variable is greater than 7");
	       return heroScoreCounter;
	      default:
	       alert("Error! heroScoreCounter variable is not an integer");
	    }
	}
} // infinityStoneCounter function end

/**
 * Function is called within compareCatergoryScore function. It generates template literal with results of match by calling resultsInfoTemplate function with appropriate results parameter then inserts it into resultModal element.
 * @param {string} result - can be "win", "firstResultLose", "lose", "firstResultDraw", "draw" or "complete".
 */
function showResultsModal(result){
	infinityStoneCounter();
  if(result === "win"){
  	resultsInfoTemplate("win");
  } else if (result === "firstResultLose"){
  	resultsInfoTemplate("firstResultLose");
  } else if (result === "lose"){
  	resultsInfoTemplate("lose");
  } else if (result === "firstResultDraw"){
  	resultsInfoTemplate("firstResultDraw");
  } else if (result === "draw"){
  	resultsInfoTemplate("draw");
  } else if (result === "complete"){
    resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
						                   <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                <h2>You are a Top Trumps Champion!</h2>
                                <img class="hero-modal-image" src="assets/img/ironman-infinity-gauntlet2.jpg">
                                <div class="results-modal-infinitystone">
                                  <div class="score-counter">
                                    <ul class="game-complete-list">
                                      <li><img class="glow-effect" src="assets/img/infinitystone2.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone3.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone4.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone5.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone6.png"></img></li>
                                      <li><img class="glow-effect" src="assets/img/infinitystone7.png"></img></li>
                                    </ul>
                                  </div>
                                  <p>You have collected all six infinity stones and won the game!</p>
                                </div>
                                <div class="play-again-button-bg d-flex justify-content-center">
                                  <button id="playAgainButton" class="play-again-button" type="button">Start Again</button>
                                </div>
                              </div>
                            </div>`;
  } else {
    alert("Error! No result was found");
  }
} // showResultsModal function end

/**
 * Function is called within getMarvelData function using "villain" parameter. It takes hero and villain score from selected catergory score and determines result of match i.e. win, lose or draw. It then calls displayImgOverlay and showResultsModal function with appropriate parameters to display the results of the match.
 */
function compareCatergoryScore(){
	let heroCatergoryScoreObject = getHeroCatergoryScore();
	let catergoryScoreObject = getVillainCatergoryScore(heroCatergoryScoreObject);
  let heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  let villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;
  let infinityStoneList = document.querySelectorAll(".score-counter-list > div");
  let infinityStoneArray = Array.from(infinityStoneList);
  
  if(heroCatergoryScore > villainCatergoryScore){
    displayImgOverlay("win");
    heroScoreCounter += 1;
    infinityStoneId = "infinitystone" + heroScoreCounter.toString();
    infinityStoneArray.forEach(function(element, index){
      if(heroScoreCounter === index + 2){
        element.setAttribute("id", infinityStoneId);
        element.innerHTML = `<img class="glowing-border" src="assets/img/${infinityStoneId}.png">`;
      }
    });
    if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter === 7){
      showResultsModal("complete");
    } else if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter < 7){
      showResultsModal("win");
    }
    resultsModal.classList.add("modal-fadein");
  } else if(heroCatergoryScore < villainCatergoryScore){
    heroScoreCounter -= 1;
    displayImgOverlay("lose");
    let lostinfinityStone = heroScoreCounter + 1;
    infinityStoneId = "infinitystone" + lostinfinityStone.toString();
    infinityStoneArray.forEach(function(element, index){
      if(heroScoreCounter === index + 1){
        element.innerHTML = `<img src="assets/img/placeholderinfinitystone.png">`;
      }
    });
    if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter < 1){
      heroScoreCounter = 1;
      showResultsModal("firstResultLose");
    } else if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter >= 1){
      showResultsModal("lose");
    }
    resultsModal.classList.add("modal-fadein");
  } else if(heroCatergoryScore === villainCatergoryScore) {
    heroScoreCounter += 0; // keep heroScoreCounter value the same
    displayImgOverlay("draw");
    infinityStoneId = "infinitystone" + heroScoreCounter.toString();
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
    resultsModal.classList.add("modal-fadein");
  }
} // compareCatergoryScore function end

/**
 * Function is called by resultsModal event listener when playAgainButton button is clicked. It resets modified HTML elements and CSS styles after each match except the score counter which is only reset when game is complete.
 */
function resetGame(){
  let scoreCounter = document.getElementById("scoreCounter");
  let heroInfo = document.getElementById('heroInfo');
  let villainInfo = document.getElementById('villainInfo');
  let dotsArray = Array.from(dots);
  
  if(heroScoreCounter === 7){ // if game is complete reset infinity stone score counter
    scoreCounter.innerHTML = `<ul class="d-flex justify-content-center score-counter-list">
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  						<div><img src="assets/img/placeholderinfinitystone.png"></img></div>
                  					</ul>`;
    heroScoreCounter = 1; // reset score counter back to default value
  }
  dotsArray.forEach(function(element, index) {
    if(element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
    
  heroImg.innerHTML = `<img src="assets/img/questionmarkorange.png" class="hero-img" alt="question mark">`;

  heroInfo.innerHTML = `<h2 class="card-title hero-title">Superhero</h2>
  										<ul class="list-group hero-list" id="heroList">
  											<li class="list-group-item hero-list-inactive">Agility: ?</li>
  											<li class="list-group-item hero-list-inactive" >Intelligence: ?</li>
  											<li class="list-group-item hero-list-inactive">Magic: ?</li>
  											<li class="list-group-item hero-list-inactive" >Strength: ?</li>
  											<li class="list-group-item hero-list-inactive">Speed: ?</li>
  											<li class="list-group-item hero-list-inactive">Technology: ?</li>
  									  </ul>`;
  
  selectHeroButton.className = "list-group-item select-hero select-hero-inactive";
  selectHeroButton.textContent = "Select Hero";
  selectHeroButton.style.border = "solid 4px #5C5787";
  hideDots.style.zIndex = "0";
  prevSlide.style.visibility = "visible";
  nextSlide.style.visibility = "visible";
  villainImg.innerHTML = `<img src="assets/img/questionmarkorange.png" class="villain-img" alt="question mark">`;

  villainInfo.innerHTML = `<h2 class="card-title villain-title">Supervillain</h2>
      										<ul class="list-group villain-list" id="villainList">
      											<li class="list-group-item villain-list-inactive">Agility: ?</li>
      											<li class="list-group-item villain-list-inactive" >Intelligence: ?</li>
      											<li class="list-group-item villain-list-inactive">Magic: ?</li>
      											<li class="list-group-item villain-list-inactive" >Strength: ?</li>
      											<li class="list-group-item villain-list-inactive">Speed: ?</li>
      											<li class="list-group-item villain-list-inactive">Technology: ?</li>
      										</ul>`;

  selectVillainButton.className = "select-villain select-villain-inactive";
  selectVillainButton.textContent = "Select Villain";
  selectVillainButton.style.border = "solid 4px #5C5787";
  if(resultsModal.className === "col-sm-12 results-modal modal-fadein modal-fadeout"){
    setTimeout(function(){
      resultsModal.className = "col-sm-12 results-modal";
    },3500); // delay reset of class names until fadeout effect is complete
  }
  slideIndex = 0; // reset slideIndex value to show first slide
  currentSlide(dots); // bind event listener to dot selector when reset happens
} // resetGame function end


/*FETCH REQUESTS*/

/**
 * Function is called within getMarvelData function using "hero" and n parameter. It fetches comic book character data from Marvel API using url generated by getMarvelApiUrl function and returns json data which is passed to showMarvelAPIData function.
 */
function getMarvelApiData() {
	let apiURL = getMarvelApiUrl();
  	fetch(apiURL)
	  .then((res) => res.json())
	  .then((data) => {
	  	showMarvelAPIData(data);
  	})
	  .catch(err => {
	    console.log(err);
	  });
}

/**
 * Function is called by arrow and dot nav event or selectVillainButtonlisteners and fetches json data from character.json file. It sends an array of hero or villain info to showSuperhero or showSupervillain functions depending on parameter settings. It then calls other functions to further process the character info once it has been displayed. 
 * @param {string} charactertype - "hero" or "villain" which determines whether an array of hero or villain info is selected from json data.
 * @param {number} n - optional parameter only needed when "hero" parameter is selected. The number in n is determined by arrow and dot nav event listeners and records which hero has been selected by the user.
 */
function getMarvelData(charactertype, n) {
  let superheroList;
  let supervillainList;
  let randomNumber =  Math.floor(Math.random() * 15); // generate a random number between 0 and 14 to match index of slides

  if (charactertype === "villain" && typeof(n) === "undefined") {
  	n = randomNumber;
  }

	if(charactertype === "hero") {
	  fetch('assets/data/characters.json')
	  .then((res) => res.json())
	  .then((data) => {
	    superheroList = Object.entries(data.superheros);
	    showSuperhero(superheroList, n);
	    getMarvelApiData();
	    resetSuperheroButton();
	    showMarvelAPIModal();
	    selectSuperheroCatergory();
	    selectSuperheroButton();
  	})
	  .catch(err => {
	    console.log(err);
	  });
	} else if(charactertype === "villain") {
	  fetch('assets/data/characters.json')
	  .then((res) => res.json())
	  .then((data) => {
	    supervillainList = Object.entries(data.supervillains);
	    console.log(supervillainList);
	    showSupervillain(supervillainList, n);
	    selectedSupervillainStyles();
			compareCatergoryScore();
  	})
	  .catch(err => {
	    console.log(err);
	  })		
	}
} // getMarvelData function end


/*EVENT lISTENERS*/

/**
 * add click eventlistener to element with 'prev' id. When it's clicked hides start guide and decreases slideIndex variable by 1 before calling getMarvelData function with slideIndex variable to get superhero data
 */
prevSlide.addEventListener('click', function() {
  hideStartGuide();
  slideIndex -= 1;
	getMarvelData("hero", slideIndex);
}, false);

/**
 * add click eventlistener to element with 'next' id. When it's clicked hides start guide and increments slideIndex variable by 1 before calling getMarvelData function with slideIndex variable to get superhero data
 */
nextSlide.addEventListener('click', function() {
  hideStartGuide();
  slideIndex += 1;
  getMarvelData("hero", slideIndex);
}, false);

/**
 * loops through nodelist parameter 'n' to add index number and eventlistener to each item. If nodelist item is clicked then index number is used as parameter to call getMarvelData function to get superhero data.
 * @param {nodelist} n - variable 'dots'contains nodelist of list items with classname 'dot.'
 */
function currentSlide(n) {
  for(let i=0; i < n.length; i++) {
    n[i].index = i;
    n[i].addEventListener('click', function(e) {
      hideStartGuide();
      slideIndex = e.target.index + 1; // change index base number to 1 to match slideIndex number
      getMarvelData("hero", slideIndex);
    }, false);
  }
}

currentSlide(dots);

/**
 * eventlistener that checks if selectVillainButton is active and if it is calls the getMarvelData function with the 'villain' parameter
 */
selectVillainButton.addEventListener('click', function(){
	if(selectVillainButton.classList.contains("select-villain-active")){
		getMarvelData("villain");
	}
}, false);

/**
 * eventlistener that fades out results modal by adding modal-fadeout class then calls resetGame function to reset game when playAgainButton is clicked.
 */
resultsModal.addEventListener('click', function(e){
  if(e.target.id === "playAgainButton"){
    resultsModal.classList.add("modal-fadeout");
    resetGame();
  }
},false);

/**
 * event listener for #startGuide element that calls getIntroGuide function
 */
startGuide.addEventListener('click', function(){
  getIntroGuide();
}, false);
