/*NEW JS*/

/*NAVIGATION VARIABLES*/
let slideIndex = 0; // set default value to show first slide
let prevSlide = document.getElementById('prev');
let nextSlide = document.getElementById('next');
let dots = document.getElementsByClassName("dot");
let hideDots = document.getElementById("dotSelector");

function showSuperhero(data, n) {
  let heroImg = document.getElementById('heroImg');
  let heroInfo = document.getElementById('heroInfo');
  let superHero = data[slideIndex-1]; // select superhero from superHeroes object with bracket notation using function parameter
  let filePathName = superHero[0];
  let superheroName = superHero[1].name;
  let agility = superHero[1].agility;
  let intelligence = superHero[1].intelligence;
  let magic = superHero[1].magic;
  let strength = superHero[1].strength;
  let speed = superHero[1].speed;
  let technology = superHero[1].technology;
  
  if (n > data.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
  if (n < 1) {slideIndex = data.length} // if slideIndex is < 1 reset value to value of last slide

	for (let i = 0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
	}

  dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no.

  // add superhero property name into template literal HTML image path and insert into heroImg div
  heroImg.innerHTML = `<img src="assets/img/${filePathName}.png" class="hero-img" alt="${filePathName}">
                      <div id="infoOverlayId" class="info-overlay">
                        <button id="infoOverlayButton" class="info-overlay-text">More Info</button>
                      </div>`;

  heroInfo.innerHTML =  `<h2 class="card-title hero-title">${superheroName}</h2>
      										<ul class="list-group hero-list" id="heroList">
      											<li class="list-group-item hero-list-active">Agility: ${agility}</li>
      											<li class="list-group-item hero-list-active">Intelligence: ${intelligence}</li>
      											<li class="list-group-item hero-list-active">Magic: ${magic}</li>
      											<li class="list-group-item hero-list-active">Strength: ${strength}</li>
      											<li class="list-group-item hero-list-active">Speed: ${speed}</li>
      											<li class="list-group-item hero-list-active">Technology: ${technology}</li>
      										</ul>
      								  </div>`;
}

/*Fetch Requests*/

function getMarvelData(n) {
  let superheroList;
  let supervillainList;

  fetch('assets/data/characters.json')
  .then((res) => res.json())
  .then((data) => {
    let superheroList = Object.entries(data.superheros);
    let superhero = showSuperhero(superheroList, n);
    // console.log(superhero);
  })
  .catch(err => {
    console.log(err);
  })
}

/*Event Listeners*/

// add click eventlistener to target div with 'prev' id
prevSlide.addEventListener('click', function() {
  slideIndex -= 1; // decrease slideIndex value by 1 so previous slide is made visible by showSuperhero function
	getMarvelData(slideIndex);
}, false);

// add click eventlistener to target div with 'prev' id
nextSlide.addEventListener('click', function() {
  slideIndex += 1; // increase slideIndex value by 1 so next slide is made visible by showSuperhero function
  getMarvelData(slideIndex);
}, false);

function currentSlide(n) {
  for(let i=0; i < n.length; i++) {
    n[i].index = i; // use loop counter to set the index number for each div element
    n[i].addEventListener('click', function(e) { // add 'click' event listener to div elements
      slideIndex = e.target.index + 1; // get index number of clicked dot & change index base number to 1 to match slideIndex number
      getMarvelData(slideIndex);
    }, false);
  }
}

currentSlide(dots);

/*NEW JS END*/



function getSuperheroes(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:
    case "0":
      alert("Error! Function parameter is empty");
      return data;
    case null:
      alert("Error! Function parameter is null");
      return data;
    case false:
      alert("Error! Function parameter is false");
      return data;
    default:
      switch(typeof(data)) { // return an error for all data types other than object
        case "undefined":
          alert("Error! Function parameter is undefined");
          break;
        case "function":
          alert("Error! Function parameter is a function");
          break;
        case "number":
          alert("Error! Function parameter is a number");
          break;
        case "string":
          alert("Error! Function parameter is a string");
          return data;
        case "object":
          // console.log("Success! Function parameter is an object");
          return data.superheroes; // return object of superhero names and abilities
      }
  }
}

function getSuperheroList() {
  var superHeroes = getSuperheroes(marvelCharacters);
  var superheroList = Object.keys(superHeroes);
  return superheroList; // return array of superhero names
}

// function getSuperhero(name) { // enter superhero name as function parameter
//   var superHero = gettMarvelData("heros").name; /*global marvelCharacters*/ // get list of superheroes
//   var superHeroes = gettMarvelData("heros"); /*global marvelCharacters*/ // get list of superheroes
//   var superHero = superHeroes.name; // select superhero from superHeroes object with bracket notation using function parameter
//   this.name = superHero.name; // add marvelCharacters object properties to getSuperhero constructor function
//   this.agility = superHero.agility;
//   this.intelligence = superHero.intelligence;
//   this.magic = superHero.magic;
//   this.speed = superHero.speed;
//   this.strength = superHero.strength;
//   this.technology = superHero.technology;
// }

function getSuperhero(name) { // enter superhero name as function parameter
  var superHeroes = getSuperheroes(marvelCharacters); /*global marvelCharacters*/ // get list of superheroes
  var superHero = superHeroes[name]; // select superhero from superHeroes object with bracket notation using function parameter
  this.name = superHero.name; // add marvelCharacters object properties to getSuperhero constructor function
  this.agility = superHero.agility;
  this.intelligence = superHero.intelligence;
  this.magic = superHero.magic;
  this.speed = superHero.speed;
  this.strength = superHero.strength;
  this.technology = superHero.technology;
}

function getSupervillains(data) {
  switch(data) { // return an error for function called with an 'empty' parameter value
    case "":
    case 0:
    case "0":
      alert("Error! Function parameter is empty");
      return data;
    case null:
      alert("Error! Function parameter is null");
      return data;
    case false:
      alert("Error! Function parameter is false");
      return data;
    default:
      switch(typeof(data)) { // return an error for all data types other than object
        case "undefined":
          alert("Error! Function parameter is undefined");
          break;
        case "function":
          alert("Error! Function parameter is a function");
          break;
        case "number":
          alert("Error! Function parameter is a number");
          break;
        case "string":
          alert("Error! Function parameter is a string");
          return data;
        case "object":
          // console.log("Success! Function parameter is an object");
          return data.supervillains; // return list of supervillains
      }
  }
}

// getSupervillainList function converts supervillain object data into array of supervillain property names
function getSupervillainList() {
  var superVillains = getSupervillains(marvelCharacters);
  var supervillainList = Object.keys(superVillains);
  return supervillainList; // return array of supervillain names
}

function getSupervillain(name) { // enter supervillain name as function parameter
  var superVillains = getSupervillains(marvelCharacters); // get list of supervillains
  var superVillain = superVillains[name]; // select supervillain from superVillains object with bracket notation using function parameter
  this.name = superVillain.name; // add marvelCharacters object properties to getSupervillain constructor function
  this.agility = superVillain.agility;
  this.intelligence = superVillain.intelligence;
  this.magic = superVillain.magic;
  this.speed = superVillain.speed;
  this.strength = superVillain.strength;
  this.technology = superVillain.technology;
}

// get comic character data from the Marvel API using XMLHttpRequest object
function getMarvelData(callBack) {
  var marvelHero = function(){
      switch(superheroName) { // match superhero name to marvel api name identifier and add to marvelHero variable
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case "undefined":
          alert("Error! superheroName variable is empty");  // return an error for function called with an 'empty' parameter value
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
  };

  var marvelHeroName = marvelHero();
  var apiEndpoint = 'https://gateway.marvel.com/v1/public/';
  var resourceType = 'characters';
  var apiKey = 'e8e6c4f6d9f4f13655a0a25d4649f754';
  var apiURL = apiEndpoint + resourceType + '?name=' + marvelHeroName + '&apikey=' + apiKey;
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
          console.log("success!", this.readyState, this.status, this.statusText);
          callBack(JSON.parse(this.responseText));
      } else {
          console.log("error!", this.readyState, this.status, this.statusText);
      }
  };
  xhr.open("GET", apiURL, true);
  xhr.send();
}

// callback function that retrieves comic character data from getMarvelData function and adds to index.html using page section functions
// function that uses character data object from marvel api and extracts selected characters name, description and urls to other sites about selectedcharacter
function marvelData(data) {
    var marvelData = document.getElementById('marvelData');
    var marvelName = data.data.results[0].name;
    var marvelDescription = data.data.results[0].description;
    var marvelResources = data.data.results[0].urls;
    // console.log(marvelResources);

    // loop through array of objects containing external urls and generate list of page links
    var marvelResourceList;
    for (var item in marvelResources) {
        var type = marvelResources[item].type;
        var url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    // removed 'undefined from the beginning of the list'
    marvelResourceList = marvelResourceList.replace('undefined','');

    var thumbnailPath = data.data.results[0].thumbnail.path;
    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');
    // console.log(thumbnailPath);
    var thumbnailExtension = data.data.results[0].thumbnail.extension;

    var fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;

    marvelData.innerHTML = `<div class="results-modal-inner">
                              <div class="marvel-data-img"><img src="${fullThumbnailPath}" alt="${marvelName}"></img>
                              <div class="marvel-data-name"><h2>${heroName}</h2></div>
                              <div class="marvel-data-description"><p>${marvelDescription}</p></div>
                              <div class="marvel-data-urls"><ul>${marvelResourceList}</ul></div>
                              <button id="marvelDataButton" class="marvel-data-button" type="button">Return</button>
                            </div>`;
}

var heroName; // declare superheroName variable in global scope so it can be used by multiple functions
var superheroName; // declare superheroName variable in global scope so it can be used by multiple functions

function showSuperhero(n) {
    var superheroList = gettMarvelData("heros"); /*getSuperheroList();*/
    if (n > superheroList.length) {slideIndex = 1} // if slideIndex is > no. of slides reset to value of 1st slide
    if (n < 1) {slideIndex = superheroList.length} // if slideIndex is < 1 reset value to value of last slide

    for (var i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", ""); // loop through all dot divs and remove 'active' class name
     }

    dots[slideIndex-1].className += " active"; // add 'active' class name to dots div that matches modifed slidesIndex no.

    var heroImg = document.getElementById('heroImg');
    var heroInfo = document.getElementById('heroInfo');
    
    // use slideIndex number -1 as index no. of return array from getSuperheroList function to select individual superhero property name
    superheroName = getSuperheroList()[slideIndex-1];

    // use getSuperhero constructer function with superheroName variable as parameter to get superhero object data
    var superhero = new getSuperhero(superheroName); // add object data to superhero variable

    console.log(superhero);

    // use object dot notation on superhero variable to access object properties and add to corresponding variable
    heroName = superhero.name;
    var agility = superhero.agility;
    var intelligence = superhero.intelligence;
    var magic = superhero.magic;
    var strength = superhero.strength;
    var speed = superhero.speed;
    var technology = superhero.technology;

    // add superhero property name into template literal HTML image path and insert into heroImg div
    heroImg.innerHTML = `<img src="assets/img/${superheroName}.png" class="hero-img" alt="${superheroName}">
                        <div id="infoOverlayId" class="info-overlay">
                          <button id="infoOverlayButton" class="info-overlay-text">More Info</button>
                        </div>`;
    var marvelDataBg = document.getElementById("marvelDataBg");
    var infoOverlayButton = document.getElementById("infoOverlayButton"); // add event listener to infoOverlayButton to reveal marvelData modal
    infoOverlayButton.addEventListener("click", function(){
      marvelDataBg.classList.remove("marvel-data-hide");
      marvelDataBg.classList.add("marvel-data-reveal");
      var marvelDataButton = document.getElementById("marvelDataButton");
      marvelDataButton.addEventListener("click", function(){ // when modal is visible add event listener to marvelData button which closes modal when clicked
        marvelDataBg.classList.add("marvel-data-hide");
        marvelDataBg.classList.remove("marvel-data-reveal");
      }, false);
    }, false);

    heroInfo.innerHTML =  `<h2 class="card-title hero-title">${heroName}</h2>
        										<ul class="list-group hero-list" id="heroList">
        											<li class="list-group-item hero-list-active">Agility: ${agility}</li>
        											<li class="list-group-item hero-list-active">Intelligence: ${intelligence}</li>
        											<li class="list-group-item hero-list-active">Magic: ${magic}</li>
        											<li class="list-group-item hero-list-active">Strength: ${strength}</li>
        											<li class="list-group-item hero-list-active">Speed: ${speed}</li>
        											<li class="list-group-item hero-list-active">Technology: ${technology}</li>
        										</ul>
        								  </div>`;

    getMarvelData(marvelData); // get marvel api data when hero is displayed but not yet selected

    var heroInfoLink = document.getElementById("heroList");
    var heroInfoList = document.querySelectorAll(".hero-list li");
    var selectHeroButton = document.getElementById('selectHeroButton');

    // each time a new hero is selected reset css styles to inactive if set to active
    if(selectHeroButton.className === "select-hero select-hero-active"){
      selectHeroButton.className = "select-hero select-hero-inactive";
    }

    // add selected styles to selected catergory
    heroInfoLink.addEventListener('click', function(e){
      if(e.target.className === "list-group-item hero-list-active"){
        e.target.className = "list-group-item selected-catergory";
      }
      // add inactive styles to unselected catergories
      for(var i=0; i<heroInfoList.length; i++){
        if(heroInfoList[i].className === "list-group-item hero-list-active"){
          heroInfoList[i].className = "list-group-item hero-list-inactive";
        }
      }
      // replace inactive styles with active styles when superhero catergory is selected
      if(selectHeroButton.classList.contains("select-hero-inactive")){
        selectHeroButton.className = "select-hero select-hero-active";
      }
    }, false);

    // change hero image border and button styles when hero is selected
    selectHeroButton.addEventListener('click', function(){
      if(selectHeroButton.classList.contains("select-hero-active")){ // check that button is active before adding changes
        selectHeroButton.textContent = `${heroName}`; // add superhero name to 'selectHero' button
        selectHeroButton.style.border = "4px solid #a46e32";
        selectHeroButton.className = "select-hero select-hero-selected";
        heroImg.firstElementChild.style.border = "4px solid #FFA94A";
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

var villainName; // declare villainName variable in global scope so it can be used by multiple functions
var supervillainName;

function showSupervillain() {
  var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button
  if(selectVillainButton.classList.contains("select-villain-active")){ // check that button is active before adding data & changing styles
    var villainImg = document.getElementById('villainImg');
    var villainInfo = document.getElementById('villainInfo');
    var randomNumber =  Math.floor(Math.random() * 15); // generate a random number between 0 and 14 to match index of slides

    // use randomNumber variable as index no. of return array from getSupervillainList function to randomly select individual supervillain property name
    supervillainName = getSupervillainList()[randomNumber];

    // use getSupervillain constructer function with supervillainName variable as parameter to get supervillain object data
    var supervillain = new getSupervillain(supervillainName); // add object data to supervillain variable

    villainName = supervillain.name; // use object dot notation on superhero variable to access object properties and add to corresponding variable
    var agility = supervillain.agility;
    var intelligence = supervillain.intelligence;
    var magic = supervillain.magic;
    var strength = supervillain.strength;
    var speed = supervillain.speed;
    var technology = supervillain.technology;

    // add supervillain property name into template literal HTML image path and insert into villainImg div
    villainImg.innerHTML = `<img src="assets/img/${supervillainName}.png" class="villain-img" alt="${supervillainName}">`;

    villainInfo.innerHTML = `<h2 class="card-title villain-title">${villainName}</h2>
          										<ul class="list-group villain-list" id="villainList">
          											<li class="list-group-item villain-list-active">Agility: ${agility}</li>
          											<li class="list-group-item villain-list-active" >Intelligence: ${intelligence}</li>
          											<li class="list-group-item villain-list-active">Magic: ${magic}</li>
          											<li class="list-group-item villain-list-active" >Strength: ${strength}</li>
          											<li class="list-group-item villain-list-active">Speed: ${speed}</li>
          											<li class="list-group-item villain-list-active">Technology: ${technology}</li>
          										</ul>`;

    // change villain button and images styles when villain is selected
    selectVillainButton.textContent = `${villainName}`;
    selectVillainButton.style.border = "4px solid #a46e32";
    selectVillainButton.className = "select-villain select-villain-selected";
    villainImg.firstElementChild.style.border = "4px solid #FFA94A";
  }
}

var heroScoreCounter;  // variable to record number of times heroes win

if(heroScoreCounter > 1){ // check if variable already has recorded score, if it does don't declare variable again as this will reset value
  heroScoreCounter;
} else {
  heroScoreCounter = 1; // if variable does exist i.e is > 0 declare variable in global scope with value of 1
}

console.log("heroScoreCounter = " + heroScoreCounter);

function getHeroCatergoryScore(){ // function that returns index number and score of selected catergory
  var heroCatergoryScoreObject = {}; // create object to hold hero catergory score and selected catergory index no.
  var heroList = document.querySelectorAll("#heroList > li"); // get list of anchor elements containing hero catergory scores
  var heroListArray = Array.from(heroList); // convert heroList nodelist to array
  heroListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(element.classList.contains("selected-catergory")) {
      heroCatergoryScoreObject.selectedCatergoryIndex = index; // add selected catergory index no. to catergoryScoreObject
      var heroCatergoryScoreText = element.textContent;
      var heroCatergoryScore = parseInt(heroCatergoryScoreText.charAt(heroCatergoryScoreText.length-1)); // select last character of string and convert to number
      heroCatergoryScore === 0 ? heroCatergoryScore = 10 : heroCatergoryScore; // if heroCatergoryScore = 0 convert to 10 and add to catergoryScoreObject
      heroCatergoryScoreObject.heroCatergoryScore = heroCatergoryScore;
    }
  });
  console.log(heroCatergoryScoreObject);
  return heroCatergoryScoreObject; // return catergoryScoreObject
} // getHeroCatergoryScore function end

function getVillainCatergoryScore(heroCatergoryScoreObject){  // function that recieves heroCatergoryScoreObject, renames it as catergoryScoreObject and adds villain catergory score to object then returns object
  var catergoryScoreObject = heroCatergoryScoreObject;
  var villainList = document.querySelectorAll("#villainList > li"); // get list of anchor elements containing villain catergory scores
  var villainListArray = Array.from(villainList); // convert villainList nodelist to array
  villainListArray.forEach(function(element, index){ // loop through array of anchor elements and select element with selected-catergory class name
    if(index === catergoryScoreObject.selectedCatergoryIndex){ // if index no. of list item equals index no. of selected hero catergory list item store in catergoryScoreElement variable
      var catergoryScoreElement = element;
      catergoryScoreElement.className = "selected-catergory"; // if index number matches index for hero selected catergory get anchor element with selected-catergory class
      var catergoryScoreText = element.textContent;
      var villainCatergoryScore = parseInt(catergoryScoreText.charAt(catergoryScoreText.length-1)); // select last character of string and convert to number
      villainCatergoryScore === 0 ? villainCatergoryScore = 10 : villainCatergoryScore;  // if villainCatergoryScore = 0 convert to 10
      catergoryScoreObject.villainCatergoryScore = villainCatergoryScore; // add/create villainCatergoryScore key to catergoryScoreObject and add villainCatergoryScore variable as value
    } else if (element.classList.contains("villain-list-active")) { // select list items with villain-list-active classname
      element.classList.remove("villain-list-active");
      element.classList.add("villain-list-inactive");
    }
  });
  console.log(catergoryScoreObject);
  return catergoryScoreObject;
} // getVillainCatergoryScore function end

function compareCatergoryScore(catergoryScoreObject){
  var heroCatergoryScore = catergoryScoreObject.heroCatergoryScore;
  console.log(catergoryScoreObject.heroCatergoryScore);
  var villainCatergoryScore = catergoryScoreObject.villainCatergoryScore;

  var villainImg = document.getElementById("villainImg");
  var heroImg = document.getElementById("heroImg");

  var infinityStoneId; // declare infinityStoneId variable in compareCatergoryScore scope so is also avaliable to showResultsModal function

  function createImgOverlay(result, parentElement, overlayId){
    var ImgOverlay = document.createElement("div"); // create new div element
    ImgOverlay = ImgOverlay.innerHTML = `<div id="${overlayId}" class="overlay">
                                                <div class="overlay-text">${result}</div>
                                              </div>`; // insert div element with result variable
    parentElement.innerHTML += ImgOverlay; // add new overlay element to parent element of img element
  }

  function showResultsModal(result){ // insert HTML content into resultsModal div according to result
    var infinityStoneName_Won;
    var infinityStoneColor_Won;
    var infinityStoneName_Lost;
    var infinityStoneColor_Lost;
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
    
    if(result === "win"){
      resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
							                    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                    <h2 class="">${heroName} defeats ${villainName}</h2>
                                    <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                    <div class="results-modal-infinitystone">
                                      <p>Congratulations you have obtained the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span></p>
                                      <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                      <p>Collect all six infinity stones to win the game!</p>
                                    </div>
                                    <div class="play-again-button-bg d-flex justify-content-center">
                                      <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
                                    </div>
                                  </div>
                                 </div>`;
    } else if (result === "firstResultLose"){
      resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
							                    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                    <h2>${villainName} defeats ${heroName}</h2>
                                    <img class="hero-modal-image" src="assets/img/${supervillainName}.png">
                                    <div class="results-modal-infinitystone">
                                    <p>You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span></p>
                                    <img class="blinking-border infinitystone-modal-image" src="assets/img/infinitystone2.png">
                                    <p>Collect all six infinity stones to win the game!</p>
                                    <div class="play-again-button-bg d-flex justify-content-center">
                                      <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
                                    </div>
                                  </div>
                                </div>`;
    } else if (result === "lose"){
      resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
							                    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                    <h2>${villainName} defeats ${heroName}</h2>
                                    <img class="hero-modal-image" src="assets/img/${supervillainName}.png">
                                    <div class="results-modal-infinitystone">
                                    <p>You have lost the <span class="${infinityStoneColor_Lost}">${infinityStoneName_Lost}</span></p>
                                    <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                    <p>To complete your mission you must regain the ${infinityStoneName_Lost}!</p>
                                    <div class="play-again-button-bg d-flex justify-content-center">
                                      <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
                                    </div>
                                  </div>
                                </div>`;
    } else if (result == "firstResultDraw"){
      resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
							                    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                    <h2>${heroName} draws with ${villainName}</h2>
                                    <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                    <div class="results-modal-infinitystone">
                                    <p>You must fight again and win to aquire the <span class="power-stone-color">Power Stone</span></p>
                                    <img class="blinking-border infinitystone-modal-image" src="assets/img/infinitystone2.png">
                                    <p>Collect all six infinity stones to win the game!</p>
                                    <div class="play-again-button-bg d-flex justify-content-center">
                                      <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
                                    </div>
                                  </div>
                                </div>`;
    } else if (result == "draw"){
      resultsModal.innerHTML = `<div class="row h-100 justify-content-center results-modal-inner">
							                    <div class="my-auto col-sm-10 col-md-8 col-lg-6">
                                    <h2>${heroName} draws with ${villainName}</h2>
                                    <img class="hero-modal-image" src="assets/img/${superheroName}.png">
                                    <div class="results-modal-infinitystone">
                                    <p>You live to fight another day and still possess the <span class="${infinityStoneColor_Won}">${infinityStoneName_Won}</span></p>
                                    <img class="blinking-border infinitystone-modal-image" src="assets/img/${infinityStoneId}.png">
                                    <p>Collect all six infinity stones to win the game!</p>
                                    <div class="play-again-button-bg d-flex justify-content-center">
                                      <button id="playAgainButton" class="play-again-button" type="button">Play Again</button>
                                    </div>
                                  </div>
                                </div>`;
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

  var infinityStoneList = document.querySelectorAll(".score-counter-list > div");
  var infinityStoneArray = Array.from(infinityStoneList);
  // var heroOverlayId = document.getElementById("heroOverlayId"); // target overlay id for hero image
  // console.log(heroOverlayId);
  // var villainOverlayId = document.getElementById("villainOverlayId"); // target overlay id for villain image
  // console.log(villainOverlayId);

  if(heroCatergoryScore > villainCatergoryScore){
      heroScoreCounter += 1;
      createImgOverlay("Winner", heroImg, "heroOverlayId");
      var heroOverlayId = document.getElementById("heroOverlayId");
      console.log(heroOverlayId);
      createImgOverlay("Loser", villainImg, "villainOverlayId");
      var villainOverlayId = document.getElementById("villainOverlayId");
      console.log(villainOverlayId);
      infinityStoneId = "infinitystone" + heroScoreCounter.toString();
      infinityStoneArray.forEach(function(element, index){
        if(heroScoreCounter === index + 2){
          element.setAttribute("id", infinityStoneId);
          element.innerHTML = `<img class="glowing-border" src="assets/img/${infinityStoneId}.png">`;
        }
      });
      heroOverlayId.classList.add("overlay-fadein");
      villainOverlayId.classList.add("overlay-fadein");
      if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter === 7){
        showResultsModal("complete");
      } else if(heroCatergoryScore > villainCatergoryScore && heroScoreCounter < 7){
        showResultsModal("win");
      }
      resultsModal.classList.add("modal-fadein");
  } else if(heroCatergoryScore < villainCatergoryScore){
    createImgOverlay("Loser", heroImg, "heroOverlayId");
    createImgOverlay("Winner", villainImg, "villainOverlayId");
    heroScoreCounter -= 1;
    var lostinfinityStone = heroScoreCounter + 1;
    infinityStoneId = "infinitystone" + lostinfinityStone.toString(); // updated infinityStoneId variable to display current infinity stone
    infinityStoneArray.forEach(function(element, index){
      if(heroScoreCounter === index + 1){
        element.innerHTML = `<img src="assets/img/placeholderinfinitystone.png">`; // reset lost infinity stone to placeholder image
      }
    });
    heroOverlayId.classList.add("overlay-fadein");
    villainOverlayId.classList.add("overlay-fadein");
    if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter < 1){
      heroScoreCounter = 1;
      showResultsModal("firstResultLose");
    } else if(heroCatergoryScore < villainCatergoryScore && heroScoreCounter >= 1){
      showResultsModal("lose");
    }
    resultsModal.classList.add("modal-fadein");
} else if(heroCatergoryScore === villainCatergoryScore) {
    createImgOverlay("Draw", heroImg, "heroOverlayId");
    createImgOverlay("Draw", villainImg, "villainOverlayId");
    heroScoreCounter += 0; // keep heroScoreCounter value the same
    infinityStoneId = "infinitystone" + heroScoreCounter.toString(); // add updated result counter to infinityStoneId variable
    heroOverlayId.classList.add("overlay-fadein");
    villainOverlayId.classList.add("overlay-fadein");
    if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter === 1){
      showResultsModal("firstResultDraw");
    } else if(heroCatergoryScore === villainCatergoryScore && heroScoreCounter > 1){
      showResultsModal("draw");
    }
    resultsModal.classList.add("modal-fadein");
  }
} // compareCatergoryScore function end

function resetGame(){
  if(heroScoreCounter === 7){ // if game is complete modify playagain button
    var scoreCounter = document.getElementById("scoreCounter");
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
    var heroImg = document.getElementById('heroImg');
    var heroInfo = document.getElementById('heroInfo');
    var dotsArray = Array.from(dots); // convert dots nodelist to array
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
  
    var selectHeroButton = document.getElementById("selectHeroButton");
    selectHeroButton.className = "list-group-item select-hero select-hero-inactive";
    selectHeroButton.textContent = "Select Hero";
    selectHeroButton.style.border = "solid 4px #5C5787";

    hideDots.style.zIndex = "0";
    prevSlide.style.visibility = "visible";
    nextSlide.style.visibility = "visible";

    var villainImg = document.getElementById("villainImg");
    var villainInfo = document.getElementById('villainInfo');

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

    var selectVillainButton = document.getElementById("selectVillainButton");
    selectVillainButton.className = "select-villain select-villain-inactive";
    selectVillainButton.textContent = "Select Villain";
    selectVillainButton.style.border = "solid 4px #5C5787";
    if(resultsModal.className === "col-sm-12 results-modal modal-fadein modal-fadeout"){
      setTimeout(function(){
        resultsModal.className = "col-sm-12 results-modal";
      },3500); // delay rest of class names until fadeout effect is complete
    }
    slideIndex = 0; // reset slideIndex value to show first slide
    currentSlide(dots); // bind event listener to dot selector when reset happens
} // resetGame function end

var selectVillainButton = document.getElementById('selectVillainButton'); // target select villain button

selectVillainButton.addEventListener('click', function(){ // when selectVillainButton is clicked select/show villain & calculate winner
   if(selectVillainButton.classList.contains("select-villain-active")){ // only make changes if villain button is active
    showSupervillain();
    var heroCatergoryScoreObject = getHeroCatergoryScore(); // store returned object in heroCatergoryScoreObject variable
    console.log(heroCatergoryScoreObject);
    var catergoryScoreObject = getVillainCatergoryScore(heroCatergoryScoreObject); // pass heroCatergoryScoreObject to getVillainCatergoryScore function and store returned object in catergoryScoreObject variable
    console.log(catergoryScoreObject);
    compareCatergoryScore(catergoryScoreObject); // pass catergoryScoreObject to compareCatergoryScore function which compares catergory scores and calculates result
   }
}, false);

var resultsModal = document.getElementById("resultsModal"); // declare resultsModal in global scope so is available to showResultsModal and playAgain.addEventListener

resultsModal.addEventListener('click', function(e){
  if(e.target.id === "playAgainButton"){ // when playAgainButton is clicked add modal-fadeout class to remove modal
    resultsModal.classList.add("modal-fadeout");
    resetGame(); // reset all elements to 'inactive' state when results modal has been removed
  }
},false);

// script for adding year to footer

// select copyRight div
var copyRight = document.getElementById("copyRight");

// Return today's date and time
var currentTime = new Date()

// returns the year (four digits)
var year = currentTime.getFullYear()

// insert current year variable into copyright statement
var copyRightText = "2018 - " + year + " © Thomas Jones - All Rights Reserved";

// insert copyright statement into copyRight div
copyRight.innerHTML = copyRightText;
