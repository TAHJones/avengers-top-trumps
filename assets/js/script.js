/*NEW JS*/

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
function characterImgTemplate(charactertype) {
let characterImg;
	if(charactertype === "hero") {
	  characterImg = `<img src="assets/img/${heroFilePathName}.png" class="${charactertype}-img" alt="${heroFilePathName}">
										<div id="infoOverlayId" class="info-overlay">
                      <button id="infoOverlayButton" class="info-overlay-text">More Info</button>
                    </div>`;
	} else {
	  characterImg = `<img src="assets/img/${villainFilePathName}.png" class="${charactertype}-img" alt="${villainFilePathName}">`;
	}
	return characterImg;
}

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
}

function imgOverlayTemplate(result, parentElement, overlayId){
  let ImgOverlay = document.createElement("div"); // create new div element
  ImgOverlay = ImgOverlay.innerHTML = `<div id="${overlayId}" class="overlay">
                                              <div class="overlay-text">${result}</div>
                                            </div>`; // insert div element with result variable
  parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
}

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
}

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
}

function showSuperhero(data, n) {
  if (n > data.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
  if (n < 1) {slideIndex = data.length} // if slideIndex is < 1 reset value to value of last slide

  let heroInfo = document.getElementById('heroInfo');
  let superHero = data[slideIndex-1]; // select superhero from superHeroes object with bracket notation using function parameter
  heroFilePathName = superHero[0];
  superheroName = superHero[1].name; // assign hero name to global variable which is used by selectSuperheroButton function
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

function getMarvelApiUrl() {
  let marvelHeroName = marvelHero(heroFilePathName);
  let apiEndpoint = 'https://gateway.marvel.com/v1/public/';
  let resourceType = 'characters';
  let apiKey = 'e8e6c4f6d9f4f13655a0a25d4649f754';
  let apiURL = apiEndpoint + resourceType + '?name=' + marvelHeroName + '&apikey=' + apiKey;
  return apiURL;
}

function showMarvelAPIData(data) {
    let marvelData = document.getElementById('marvelData');
    let marvelName = data.data.results[0].name;
    let marvelDescription = data.data.results[0].description;
    let marvelResources = data.data.results[0].urls;
    // console.log(marvelResources);

    // loop through array of objects containing external urls and generate list of page links
    let marvelResourceList;
    for (let item in marvelResources) {
        let type = marvelResources[item].type;
        let url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    // removed 'undefined from the beginning of the list'
    marvelResourceList = marvelResourceList.replace('undefined','');

    let thumbnailPath = data.data.results[0].thumbnail.path;
    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');
    // console.log(thumbnailPath);
    let thumbnailExtension = data.data.results[0].thumbnail.extension;

    let fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;

    marvelData.innerHTML = `<div class="results-modal-inner">
                              <div class="marvel-data-img"><img src="${fullThumbnailPath}" alt="${marvelName}"></img>
                              <div class="marvel-data-name"><h2>${superheroName}</h2></div>
                              <div class="marvel-data-description"><p>${marvelDescription}</p></div>
                              <div class="marvel-data-urls"><ul>${marvelResourceList}</ul></div>
                              <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>
                            </div>`;
}

function showMarvelAPIModal() {
  let marvelDataBg = document.getElementById("marvelDataBg");
  let infoOverlayButton = document.getElementById("infoOverlayButton"); // add event listener to infoOverlayButton to reveal marvelData modal
  infoOverlayButton.addEventListener("click", function(){
    marvelDataBg.classList.replace("marvel-data-hide", "marvel-data-reveal");
	  let marvelDataButton = document.getElementById("marvelDataButton");
    marvelDataButton.addEventListener("click", function() { // when modal is visible add event listener to marvelData button which closes modal when clicked
      marvelDataBg.classList.replace("marvel-data-reveal", "marvel-data-hide");
    }, false);
  }, false);
}

function selectSuperheroCatergory() {
	let heroInfoLink = document.getElementById("heroList");
	let heroInfoList = document.querySelectorAll(".hero-list > li");
	let heroInfoArray = Array.from(heroInfoList); // convert heroList nodelist to array
	// add selected styles to selected catergory
	heroInfoLink.addEventListener('click', function(e){
	  if(e.target.className === "list-group-item hero-list-active"){
	    e.target.className = "list-group-item selected-catergory";
		  // add inactive styles to unselected catergories
			heroInfoArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
		    if(element.className === "list-group-item hero-list-active"){
		      element.className = "list-group-item hero-list-inactive";
		  	}
		  });
	  }
	  if(selectHeroButton.classList.contains("select-hero-inactive")){
		  // replace inactive styles with active styles when superhero catergory is selected
	    selectHeroButton.className = "select-hero select-hero-active";
	  }
	}, false);
}

function resetSuperheroButton() {
  // let selectHeroButton = document.getElementById('selectHeroButton');
  if(selectHeroButton.className === "select-hero select-hero-active"){
	  // each time a new hero is selected reset css styles to inactive if set to active
    selectHeroButton.className = "select-hero select-hero-inactive";
  }
}

function selectSuperheroButton() {
  selectHeroButton.addEventListener('click', function(){
    if(selectHeroButton.classList.contains("select-hero-active")){ // check that button is active before adding changes
      selectHeroButton.textContent = `${superheroName}`;
      selectHeroButton.style.border = "4px solid #a46e32";
      heroImg.firstElementChild.style.border = "4px solid #FFA94A";
      selectHeroButton.className = "select-hero select-hero-selected";
      hideDots.style.zIndex = "-1"; // hide scrolling icons when hero has been selected
      prevSlide.style.visibility = "hidden";
      nextSlide.style.visibility = "hidden";
      selectVillainButton.className = "select-villain select-villain-active";
      var infoOverlayId = document.getElementById("infoOverlayId");
      var infoOverlayParent = infoOverlayId.parentNode;
      infoOverlayParent.removeChild(infoOverlayId); // remove info overlay when hero is selected
    }
  }, false);	
}

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
}

function selectedSupervillainStyles() {
  selectVillainButton.textContent = `${supervillainName}`;
  selectVillainButton.style.border = "4px solid #a46e32";
  selectVillainButton.className = "select-villain select-villain-selected";
  villainImg.firstElementChild.style.border = "4px solid #FFA94A";
}

function getHeroCatergoryScore(){ // function that returns index number and score of selected catergory
  let heroCatergoryScoreObject = {}; // create object to hold hero catergory score and selected catergory index no.
  let heroList = document.querySelectorAll(".hero-list > li"); // get list of anchor elements containing hero catergory scores
  let heroListArray = Array.from(heroList); // convert heroList nodelist to array
  heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(element.classList.contains("selected-catergory")) {
      heroCatergoryScoreObject.selectedCatergoryIndex = index; // add selected catergory index no. to catergoryScoreObject
      let heroCatergoryScoreText = element.textContent;
      let heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1)); // select last character of string and convert to number
      heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10 and add to catergoryScoreObject
      heroCatergoryScoreObject.heroCatergoryScore = heroCatergoryScore;
    }
  });
  return heroCatergoryScoreObject;
} // getHeroCatergoryScore function end

function getVillainCatergoryScore(heroCatergoryScoreObject){  // function that recieves heroCatergoryScoreObject, renames it as catergoryScoreObject and adds villain catergory score to object then returns object
  let catergoryScoreObject = heroCatergoryScoreObject;
  let villainList = document.querySelectorAll(".villain-list > li"); // get list of anchor elements containing villain catergory scores
  let villainListArray = Array.from(villainList); // convert villainList nodelist to array
  villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(index === catergoryScoreObject.selectedCatergoryIndex){ // if index no. of list item equals index no. of selected hero catergory list item store in catergoryScoreElement letiable
      let catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
      let catergoryScoreText = element.textContent;
      let villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1)); // select last character of string and convert to number
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;  // if villainCatergoryScore = 0 convert to 10
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore; // add/create villainCatergoryScore key to catergoryScoreObject and add villainCatergoryScore variable as value
    } else if (element.classList.contains("villain-list-active")) { // select list items with villain-list-active classname
      element.classList.replace("villain-list-active", "villain-list-inactive");
    }
  });
  return catergoryScoreObject;
} // getVillainCatergoryScore function end

if(heroScoreCounter > 1){ // check if variable already has recorded score, if it does don't declare variable again as this will reset value
  heroScoreCounter;
  console.log(heroScoreCounter);
} else {
  heroScoreCounter = 1; // if variable does exist i.e is > 0 declare variable in global scope with value of 1
}

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
	       alert("Error! heroScoreCounter variable is greater than 7");  // return an error if heroScoreCounter is  greater than 7
	       return heroScoreCounter;
	      default:
	       alert("Error! heroScoreCounter variable is not an integer"); // return an error if heroScoreCounter is not an integer
	    }
	}
}

function showResultsModal(result){ // insert HTML content into resultsModal div according to result
	infinityStoneCounter();
  if(result === "win"){
  	resultsInfoTemplate("win");
  } else if (result === "firstResultLose"){
  	resultsInfoTemplate("firstResultLose");
  } else if (result === "lose"){
  	resultsInfoTemplate("lose");
  } else if (result == "firstResultDraw"){
  	resultsInfoTemplate("firstResultDraw");
  } else if (result == "draw"){
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
    infinityStoneId = "infinitystone" + lostinfinityStone.toString(); // updated infinityStoneId variable to display current infinity stone
    infinityStoneArray.forEach(function(element, index){
      if(heroScoreCounter === index + 1){
        element.innerHTML = `<img src="assets/img/placeholderinfinitystone.png">`; // reset lost infinity stone to placeholder image
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
    infinityStoneId = "infinitystone" + heroScoreCounter.toString(); // add updated result counter to infinityStoneId variable
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
    resultsModal.classList.add("modal-fadein");
  }
} // compareCatergoryScore function end

function resetGame(){
  let scoreCounter = document.getElementById("scoreCounter");
  let heroInfo = document.getElementById('heroInfo');
  let villainInfo = document.getElementById('villainInfo');
  let dotsArray = Array.from(dots); // convert dots nodelist to array
  
  if(heroScoreCounter === 7){ // if game is complete modify playagain button
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
  dotsArray.forEach(function(element, index) { // loop through array of list elements
    if(element.classList.contains("active")) { // select element with active class name
      element.classList.remove("active"); // remove active class name if present
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
  									  </ul>`; // reset property values back to question mark default and insert into heroInfo div
  
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
      										</ul>`;  // add object property values to template literal HTML and insert into slideInfo div

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


/*FETCH REQUESTS */

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
	    resetSuperheroButton();
	    showMarvelAPIModal();
	    selectSuperheroCatergory();
	    selectSuperheroButton();
  	})
	  .catch(err => {
	    console.log(err);
	  })
	} else if(charactertype === "villain") {
	  fetch('assets/data/characters.json')
	  .then((res) => res.json())
	  .then((data) => {
	    supervillainList = Object.entries(data.supervillains);
		  showSupervillain(supervillainList, n);
		  selectedSupervillainStyles();
		  compareCatergoryScore();
  	})
	  .catch(err => {
	    console.log(err);
	  })		
	}
}

/*EVENT lISTENERS*/

// add click eventlistener to target div with 'prev' id
prevSlide.addEventListener('click', function() {
  slideIndex -= 1; // decrease slideIndex value by 1 so previous slide is made visible by showSuperhero function
	getMarvelData("hero", slideIndex);
}, false);

// add click eventlistener to target div with 'prev' id
nextSlide.addEventListener('click', function() {
  slideIndex += 1; // increase slideIndex value by 1 so next slide is made visible by showSuperhero function
  getMarvelData("hero", slideIndex);
}, false);

function currentSlide(n) {
  for(let i=0; i < n.length; i++) {
    n[i].index = i; // use loop counter to set the index number for each div element
    n[i].addEventListener('click', function(e) { // add 'click' event listener to div elements
      slideIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 to match slideIndex number
      getMarvelData("hero", slideIndex);
    }, false);
  }
}

currentSlide(dots);

selectVillainButton.addEventListener('click', function(){
	if(selectVillainButton.classList.contains("select-villain-active")){ // check that button is active before adding data & changing styles
		getMarvelData("villain");
	}
}, false);

resultsModal.addEventListener('click', function(e){
  if(e.target.id === "playAgainButton"){ // when playAgainButton is clicked add modal-fadeout class to remove modal
    resultsModal.classList.add("modal-fadeout");
    resetGame(); // reset all elements to 'inactive' state when results modal has been removed
  }
},false);

/*NEW JS END*/