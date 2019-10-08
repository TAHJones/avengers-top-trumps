/*GLOBAL VARIABLES*/
let heroImg = document.getElementById('heroImg');
let villainImg = document.getElementById('villainImg');
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

/**
 * Function is called within getMarvelApiData function. It takes the json data from getMarvelApiData and filters it for marvelData characters name, image, description and urls for further character information on the Marvel website. The data is assigned to variables and inserted into a template literal then inserted into marvelData element.
 */
function showMarvelAPIData(apiData, heroName, returnValue) {
// function marvelData(apiData, heroName, returnValue) {
  let marvelDataObject = apiData;
  let marvelName = marvelDataObject.data.results[0].name;
  let marvelDescription = marvelDataObject.data.results[0].description;
  let marvelResources = marvelDataObject.data.results[0].urls;
  let thumbnailPath;
  let thumbnailExtension;
  let marvelResourceList;
  let fullThumbnailPath;
  let marvelApiModal;
  // let marvelCopyright;

  // loop through array of objects containing external urls and generate list of page links
  for (let item in marvelResources) {
    let type = marvelResources[item].type;
    let url = marvelResources[item].url;
    marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
  }

  marvelResourceList = marvelResourceList.replace('undefined',''); // removed 'undefined from the beginning of the list
  thumbnailPath = marvelDataObject.data.results[0].thumbnail.path;
  thumbnailPath = thumbnailPath.replace('http','https'); // modifiy path name to https to avoid getting blocked mixed content
  thumbnailExtension = marvelDataObject.data.results[0].thumbnail.extension;
  fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;
  marvelApiModal = `<div><img src="${fullThumbnailPath}" alt="${marvelName}"></img><div><h2>${heroName}</h2></div><div><p>${marvelDescription}</p></div><div><ul>${marvelResourceList}</ul></div><button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>`;

  if(returnValue === 1){ // conditional statement which uses function parameters to select which values to return
    return marvelName;
  } else if(returnValue === 2) {
    return marvelDescription;
  } else if(returnValue === 3) {
    return marvelResources[0].type;
  } else if(returnValue === 4) {
    return marvelResources[0].url;
  } else if(returnValue === 5) {
    return marvelResources[1].type;
  } else if(returnValue === 6) {
    return marvelResources[1].url;
  } else if(returnValue === 7) {
    return marvelResources[2].type;
  } else if(returnValue === 8) {
    return marvelResources[2].url;
  } else if(returnValue === 9) {
    return fullThumbnailPath;
  } else if(returnValue === 10) {
    return marvelApiModal;
  }
} // showMarvelAPIData function end

/**
 * Function takes the data for the hero selected by the user from the list of heros and inserts the data for that hero into template literals created by the characterImgTemplate and characterInfoTemplate functions and then inserts them in the HTML document. 
 * @param {array} data - array of object data for each hero.
 * @param {number} n -number associated with hero selected by the user, should be a number from 1 to 15.
 * @param {string} catergory - the object key name for the catergory score selected for testing. Can be "name", "agility", "intelligence", "magic", "strength", "speed", "technology".
 */
function showSuperhero(data, n, catergory) {
  let slideIndex;
  if (n > data.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = data.length; // if slideIndex is < 1 reset value to value of last slide
  } else {
    slideIndex = n;
  }

  let superHero = data[slideIndex-1];
  let selectedCatergory = superHero[1][catergory];
  return selectedCatergory;
}

/**
 * Function is called within getMarvelData function using "villain" parameter. It randomly selects an individual villain from a list of villains and inserts the data for that villain into template literals created by the characterImgTemplate and characterInfoTemplate functions and then inserts them in the HTML document. 
 * @param {array} data - array of object data for each villain.
 * @param {number} n - randomly generated number passed by getMarvelData function which is used to select villain.
 */
function showSupervillain(data, n, catergory) {
	let superVillain = data[n];
  let selectedCatergory = superVillain[1][catergory];
  return selectedCatergory;
} // showSupervillain function end

/**
 * Function is called within showResultsModal function and uses the heroScoreCounter variable to display the correct infinity stone image in the results modal.
 * @param {string} heroScoreCounter - value between 1 and 7 that keeps track of the users score.
 */
function infinityStoneCounter(heroScoreCounter) {
  let infinityStoneName;
	switch(heroScoreCounter) { // match infinity stone name with counter score number
	  case "":
	  case 0:
	  case "0":
	    alert("Error! heroScoreCounter variable is empty");
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
      return infinityStoneName = "No Stone";
    case 2:
      return infinityStoneName = "Power Stone";
    case 3:
      return infinityStoneName = "Space Stone";
    case 4:
      return infinityStoneName = "Reality Stone";
    case 5:
      return infinityStoneName = "Soul Stone";
    case 6:
      return infinityStoneName = "Time Stone";
    case 7:
      return infinityStoneName = "Mind Stone";
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
 * Function is called within compareCatergoryScore function. It takes the score from the selected hero catergory and returns it and it's index value as an object
 */
function getHeroCatergoryScore(heroName){
  let heroCatergoryScoreObject = {};
  let heroListElement = `#${heroName} > li > a`;
  let heroList = document.querySelectorAll(heroListElement); // get list of anchor elements containing hero catergory scores
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
function getVillainCatergoryScore(heroCatergoryScoreObject, villainName){
  let catergoryScoreObject = heroCatergoryScoreObject;
  let villainListElement = `#${villainName} > li > a`;
  let villainList = document.querySelectorAll(villainListElement);
  let villainListArray = Array.from(villainList);
  villainListArray.forEach(function(element, index){
    if(index === catergoryScoreObject.selectedCatergoryIndex){
    	let catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory";
      let catergoryScoreText = element.textContent;
      let villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1));
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore;
    }
  });
  return catergoryScoreObject;
} // getVillainCatergoryScore function end

/**
 * Function is called within getMarvelData function using "villain" parameter. It takes hero and villain score from selected catergory score and determines result of match i.e. win, lose or draw. It then calls displayImgOverlay and showResultsModal function with appropriate parameters to display the results of the match.
 */
function compareCatergoryScore(catergoryScoreObject, heroScoreCounter){
  let resultsModal;
  let heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  let villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;
  function showResultsModal(result){
    if(result === "win"){
      resultsModal = `WIN`;
    } else if (result === "firstResultLose"){
      resultsModal = `FIRST-RESULT-LOSE`;
    } else if (result === "lose"){
      resultsModal = `LOSE`;
    } else if (result == "firstResultDraw"){
      resultsModal = `FIRST-RESULT-DRAW`;
    } else if (result == "draw"){
      resultsModal = `DRAW`;
    } else if (result === "complete"){
      resultsModal = `COMPLETE`;
    } else {
      alert("Error! No result was found");
    }
  } // showResultsModal function end

  if(heroCatergoryScore > villainCatergoryScore){
      if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter === 7){
        showResultsModal("complete");
      } else if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter < 7){
        showResultsModal("win");
      }
  } else if(heroCatergoryScore < villainCatergoryScore){
    if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter < 1){
      showResultsModal("firstResultLose");
    } else if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter >= 1){
      showResultsModal("lose");
    }
  } else if(heroCatergoryScore === villainCatergoryScore) {
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
  }
  return resultsModal;
}; // compareCatergoryScore function end
