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








function getInfinityStone(heroScoreCounter){
  var infinityStoneName;
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
          alert("Error! heroScoreCounter variable is greater than 7");  // return an error if heroScoreCounter is  greater than 7
          return heroScoreCounter;
        default:
          alert("Error! heroScoreCounter variable is not an integer"); // return an error if heroScoreCounter is not an integer
      }
  }
} // getInfinityStone function end

function getHeroCatergoryScore(heroName){ // function that returns index number and score of selected catergory
  var heroCatergoryScoreObject = {}; // create object to hold hero catergory score and selected catergory index no.
  var heroListElement = `#${heroName} > li > a`;
  var heroList = document.querySelectorAll(heroListElement); // get list of anchor elements containing hero catergory scores
  var heroListArray = Array.from(heroList); // convert heroList nodelist to array
  heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(element.className === "selected-catergory"){
      heroCatergoryScoreObject.selectedCatergoryIndex = index; // add selected catergory index no. to catergoryScoreObject
      var heroCatergoryScoreText = element.textContent;
      var heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1)); // select last character of string and convert to number
      heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10 and add to catergoryScoreObject
      heroCatergoryScoreObject.heroCatergoryScore = heroCatergoryScore;
    }
  });
  return heroCatergoryScoreObject; // return catergoryScoreObject
}; // getHeroCatergoryScore function end

function getVillainCatergoryScore(heroCatergoryScoreObject, villainName){
  var catergoryScoreObject = heroCatergoryScoreObject;
  var villainListElement = `#${villainName} > li > a`;
  var villainList = document.querySelectorAll(villainListElement); // get list of anchor elements containing villain catergory scores
  var villainListArray = Array.from(villainList); // convert villainList nodelist to array
  villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(index === catergoryScoreObject.selectedCatergoryIndex){ // if index no. of list item equals index no. of selected hero catergory list item store in catergoryScoreElement variable
      var catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
      var catergoryScoreText = element.textContent;
      var villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1)); // select last character of string and convert to number
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;  // if villainCatergoryScore = 0 convert to 10
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore; // add/create villainCatergoryScore key to catergoryScoreObject and add villainCatergoryScore variable as value
    }
  });
  return catergoryScoreObject;
}; // getVillainCatergoryScore function end

function compareCatergoryScore(catergoryScoreObject, heroScoreCounter){
  var resultsModal; // create variable to record result
  var heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  var villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;
  function showResultsModal(result){ // add result to resultsModal variable to match function parameter
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










