// declaring initial variables
var gameDay = document.querySelector('#gameDay')
var breakUp = document.querySelector('#breakUp')
var codeWorks = document.querySelector('#codeWorks')
var optG = document.querySelector('#imageGin')
var optV = document.querySelector('#imageVodka')
var optR = document.querySelector('#imageRum')
var optT = document.querySelector('#imageTequilla')

var headtail = document.querySelector ('#headtail')
var drinkSel = document.querySelector ('#drinkSel')

// game day event listener
gameDay.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "visible";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "hidden";

    coinFlipGD();

});

// breakup event listener

breakUp.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "hidden";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "visible";

    coinFlipBU();

});

// my code works event listeners

codeWorks.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "visible";
    optT.style.visibility = "hidden";
    optV.style.visibility = "visible";
    optR.style.visibility = "hidden";

    coinFlipCW();

});

// }

// coinflip function

function coinFlipGD(){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {
        
       console.log(coinResult);

        if (coinResult.outcome === "Heads") {
            
            headtail = coinResult;
            drinkSel = "Gin";
            gcocktailSurprise(); 
            console.log ("Gin")
        }
        else {

            headtail = coinResult;
            drinkSel = "Tequilla";
            tcocktailSurprise();
            console.log ("Tequilla")
        }
    })
    .catch(err => {
        console.error(err);
    })
}

function coinFlipCW(){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {
        
        console.log(coinResult);

        if (coinResult.outcome === "Heads") {
            
            gcocktailSurprise(); 
            console.log ("Gin")
        }
        else {

            vcocktailSurprise();
            console.log ("Vodka")
        }
    })
    .catch(err => {
        console.error(err);
    })
}


function coinFlipBU (){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {

        console.log(coinResult);

        if (coinResult.outcome === "Heads") {
            
            rcocktailSurprise(); 
            console.log ("Rum")
        }
        else {

            tcocktailSurprise();
            console.log ("Tequilla")
        }
    })
    .catch(err => {
        console.error(err);
    })
}

// COIN FLIP END
 
// FOR GIN START
// declaring GIN variables

var alcGin = document.querySelector('#alcGin')
var ginDrinkNAME = document.querySelector('#ginDrinkNAME')
var ginDrinkICON = document.querySelector('#ginDrinkICON')
var ginDrinkID = document.querySelector('#ginDrinkID')
var ginRecipe = document.querySelector('#ginRecipe')
let ginObj = JSON.parse(localStorage.getItem("gin"));


function getRandomNumber (min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

// CALLING RANDOM GIN COCKTAIL
function gcocktailSurprise () {
    var rand_alphabet = getRandomString(1)
    var api_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + rand_alphabet
    // console.log (rand_alphabet)
    // console.log(api_url)
	fetch(api_url)
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Gin") {
            console.log (data.drinks[rand_drink].strInstructions)
            ginRecipe.innerHTML = data.drinks[rand_drink].strDrink;
        }

        ginDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        ginDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        ginDrinkICON.style.visibility = "hidden";

        ginDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        document.querySelector('.ginImg').src = data.drinks[rand_drink].strDrinkThumb;

        console.log (ginDrinkNAME.innerHTML);
        console.log (ginDrinkICON.innerHTML);
        console.log (ginDrinkID.innerHTML);

        foodSurprise ();

    let drinkObj = {
            name: data.drinks[rand_drink].strDrink,
            id: data.drinks[rand_drink].idDrink,
            recipe: data.drinks[rand_drink].strInstructions,
            icon: data.drinks[rand_drink].strDrinkThumb,
     };  
    localStorage.setItem ("gin", JSON.stringify(drinkObj))
    })
	.catch(function() {

	});
}

// FOR GIN END

// FOR VODKA START
// declaring all VODKA variables

var alcVodka = document.querySelector('#alcVodka')
var vodkaDrinkNAME = document.querySelector('#vodkaDrinkNAME')
var vodkaDrinkICON = document.querySelector('#vodkaDrinkICON')
var vodkaDrinkID = document.querySelector('#vodkaDrinkID')
var vodkaRecipe = document.querySelector('#vodkaRecipe')
let ginObjV = JSON.parse(localStorage.getItem("vodka"));


 // CALLING RANDOM VODKA COCKTAIL
function vcocktailSurprise () {   
    fetch(api_url)
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Vodka") {
            console.log (data.drinks[rand_drink].strInstructions)
            vodkaRecipe.innerHTML = data.drinks[rand_drink].strDrink;
            
        }

        vodkaDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        vodkaDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        vodkaDrinkICON.style.visibility = "hidden";

        vodkaDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        document.querySelector(".vodkaImg").src = data.drinks[rand_drink].strDrinkThumb;

        console.log (vodkaDrinkNAME.innerHTML);
        console.log (vodkaDrinkICON.innerHTML);
        console.log (vodkaDrinkID.innerHTML);

        foodSurprise ();

        let drinkObj = {
            name: data.drinks[rand_drink].strDrink,
            id: data.drinks[rand_drink].idDrink,
            recipe: data.drinks[rand_drink].strInstructions,
            icon: data.drinks[rand_drink].strDrinkThumb,
     };  
    localStorage.setItem ("vodka", JSON.stringify(drinkObj))
    })
	.catch(function() {

	});
}
// FOR VODKA END

// FOR TEQUILLA START

// declaring all TEQUILLA variables

var alcTequilla = document.querySelector('#alcTequilla')
var TequillaDrinkNAME = document.querySelector('#TequillaDrinkNAME')
var TequillaDrinkICON = document.querySelector('#TequillaDrinkICON')
var TequillaDrinkID = document.querySelector('#TequillaDrinkID')
var TequillaRecipe = document.querySelector('#TequillaRecipe')
let ginObjT= JSON.parse(localStorage.getItem("tequilla"));

// CALLING RANDOM TEQUILLA COCKTAIL

function tcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Tequilla") {
            console.log (data.drinks[rand_drink].strInstructions)
            TequillaRecipe.innerHTML = data.drinks[rand_drink].strDrink;
        }

        TequillaDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        console.log (TequillaDrinkNAME.innerHTML);

        TequillaDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        console.log (TequillaDrinkICON.innerHTML);
        TequillaDrinkICON.style.visibility = "hidden";

        TequillaDrinkID.innerHTML = data.drinks[rand_drink].idDrink;
        console.log (TequillaDrinkID.innerHTML);

        TequillaRecipe.innerHTML = data.drinks[rand_drink].strInstructions;
        console.log (TequillaRecipe.innerHTML);

        document.querySelector('.tequillaImg').src = data.drinks[rand_drink].strDrinkThumb;

        foodSurprise ();

        let drinkObj = {
            name: data.drinks[rand_drink].strDrink,
            id: data.drinks[rand_drink].idDrink,
            recipe: data.drinks[rand_drink].strInstructions,
            icon: data.drinks[rand_drink].strDrinkThumb,
     };  
    localStorage.setItem ("tequilla", JSON.stringify(drinkObj))

	})
	.catch(function() {

	});
}

// FOR TEQUILLA END

// FOR RUM START
// declaring all RUM variables

var alcRum = document.querySelector('#alcRum')
var rumDrinkNAME = document.querySelector('#rumDrinkNAME')
var rumDrinkICON = document.querySelector('#rumDrinkICON')
var rumDrinkID = document.querySelector('#rumDrinkID')
var rumRecipe = document.querySelector('#rumRecipe')
let ginObjR = JSON.parse(localStorage.getItem("rum"));

function rcocktailSurprise () {
    var rand_alphabet = getRandomString(1)
    var api_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + rand_alphabet
	fetch(api_url)
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Rum" || "Dark Rum") {
            console.log (data.drinks[rand_drink].strInstructions)
            rumRecipe.innerHTML = data.drinks[rand_drink].strDrink;
        }

        rumDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        rumDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        rumDrinkICON.style.visibility = "hidden";
        rumDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        document.querySelector(".rumImg").src = data.drinks[rand_drink].strDrinkThumb;

        console.log (rumDrinkNAME.innerHTML);
        console.log (rumDrinkICON.innerHTML);
        console.log (rumDrinkID.innerHTML);

        foodSurprise ();

        let drinkObj = {
            name: data.drinks[rand_drink].strDrink,
            id: data.drinks[rand_drink].idDrink,
            recipe: data.drinks[rand_drink].strInstructions,
            icon: data.drinks[rand_drink].strDrinkThumb,
     };  
    localStorage.setItem ("rum", JSON.stringify(drinkObj))

	})
	.catch(function() {

	});
}

// FOR RUM END

// FOOD PAIRING

var foodNAME = document.querySelector('#foodNAME')
var foodRecipe = document.querySelector('#foodRecipe')
var foodICON = document.querySelector('#foodICON')
var foodLink = document.querySelector('#foodLink')


function foodSurprise () {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        // var max = data.drinks.length
        // console.log(max)

        // rand_food = getRandomNumber(0, max)        
        // console.log(rand_food)

        foodNAME.innerHTML = data.meals.strMeal;
        foodRecipe.innerHTML = data.meals.strInstructions;
        foodICON.innerHTML = data.meals.strMealThumb;
        foodLink.innerHTML = data.meals.strYoutube


        document.querySelector("src",".foodImg") = data.meals.strMealThumb;

        console.log (foodNAME.innerHTML);
        console.log (foodRecipe.innerHTML);
        console.log (foodICON.innerHTML);
        console.log (foodLink.innerHTML);

	})
	.catch(function() {

	});
}



// SAVING TO LOCAL STORAGE
document.querySelector(".saveBtn").addEventListener("click", function(){
    console.log("i was clicked");
    let prevSiblings = saveBtn.previousElementSibling;
    console.log(prevSiblings);
})

document.querySelector("/clearHist").addEventListener("click", function(){

})
console.log(ginObj);
console.log(ginObjV);
console.log(ginObjR);
console.log(ginObjT);