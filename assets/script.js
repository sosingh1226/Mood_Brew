// declaring initial variables
var gameDay = document.querySelector('#gameDay')
var breakUp = document.querySelector('#breakUp')
var codeWorks = document.querySelector('#codeWorks')
var optG = document.querySelector('#imageGin')
var optV = document.querySelector('#imageVodka')
var optR = document.querySelector('#imageRum')
var optT = document.querySelector('#imageTequilla')

// game day event listener
gameDay.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "visible";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "hidden";

    var h = optG;
    var t = optT;

    coinFlipGD(h, t);

});

// breakup event listener

breakUp.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "hidden";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "visible";

    var h = optT;
    var t = optR;

    coinFlipBU(h, t);

});

// my code works event listeners

codeWorks.addEventListener("click", function (event) {
    event.preventDefault();
    optG.style.visibility = "visible";
    optT.style.visibility = "hidden";
    optV.style.visibility = "visible";
    optR.style.visibility = "hidden";

    var h = optG;
    var t = optV;

    coinFlipCW(h, t);

});

// }

// coinflip function

function coinFlipGD(h, t){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {
        
        h = ginDrinkICON.innerHTML
        t = TequillaDrinkICON.innerHTML

        console.log(coinResult);

        if (coinResult.outcome === "Heads") {
            
            gcocktailSurprise(); 
            console.log ("Gin")
            // console.log (ginRecipe.innerHTML)
        }
        else {

            tcocktailSurprise();
            console.log ("Tequilla")
            // console.log (TequillaRecipe.innerHTML)
        }
    })
    .catch(err => {
        console.error(err);
    })
}

function coinFlipCW(h, t){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {
        
        h = ginDrinkICON.innerHTML
        t = vodkaDrinkICON.innerHTML

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

function coinFlipBU(h, t){
    fetch("https://coin-flip1.p.rapidapi.com/headstails", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87793f4121msha09b62ad07f5ca0p1e0594jsn2ed17993aa0e",
            "x-rapidapi-host": "coin-flip1.p.rapidapi.com"
        }
    })
    .then(function(resp) { return resp.json() }) 
    .then(coinResult => {
        
        h = rumDrinkICON.innerHTML
        t = TequillaDrinkICON.innerHTML

        console.log(coinResult);

        if (coinResult.outcome === "Heads") {
            
            rcocktailSurprise(); 
            console.log ("Rum")
            // console.log (ginRecipe.innerHTML)
        }
        else {

            tcocktailSurprise();
            console.log ("Tequilla")
            // console.log (TequillaRecipe.innerHTML)
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
var ginDrinkNAME = document.querySelector("#ginDrinkNAME")
var ginDrinkICON = document.querySelector("#ginDrinkICON")
var ginDrinkID = document.querySelector("#ginDrinkID")
var ginRecipe = document.querySelector("ginRecipe")



alcGin.addEventListener("click", function (event) {
    event.preventDefault();
	gcocktailSurprise();
});

function getRandomNumber (min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
    // console.log (result);
}
 
// CALLING RANDOM GIN COCKTAIL

function gcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Gin") {
            console.log (data.drinks[rand_drink].strInstructions)
        }

        ginDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        ginDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        ginDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        console.log (ginDrinkNAME.innerHTML);
        console.log (ginDrinkICON.innerHTML);
        console.log (ginDrinkID.innerHTML);

	})
	.catch(function() {

	});
}

// FOR GIN END

// FOR VODKA START
// declaring all VODKA variables

var alcVodka = document.querySelector('#alcVodka')
var vodkaDrinkNAME = document.querySelector("#vodkaDrinkNAME")
var vodkaDrinkICON = document.querySelector("#vodkaDrinkICON")
var vodkaDrinkID = document.querySelector("#vodkaDrinkID")
var vodkaRecipe = document.querySelector("vodkaRecipe")

function vcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Vodka") {
            console.log (data.drinks[rand_drink].strInstructions)
        }

        vodkaDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        vodkaDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        vodkaDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        console.log (vodkaDrinkNAME.innerHTML);
        console.log (vodkaDrinkICON.innerHTML);
        console.log (vodkaDrinkID.innerHTML);
	})
	.catch(function() {

	});
}

// FOR VODKA END

// FOR TEQUILLA START

// declaring all TEQUILLA variables

var alcTequilla = document.querySelector('#alcTequilla')
var TequillaDrinkNAME = document.querySelector("#TequillaDrinkNAME")
var TequillaDrinkICON = document.querySelector("#TequillaDrinkICON")
var TequillaDrinkID = document.querySelector("#TequillaDrinkID")
var TequillaRecipe = document.querySelector("#TequillaRecipe")


alcTequilla.addEventListener("click", function (event) {
    event.preventDefault();
	tcocktailSurprise();
});

// CALLING RANDOM TEQUILLA COCKTAIL

function tcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        TequillaDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        console.log (TequillaDrinkNAME.innerHTML);

        TequillaDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        console.log (TequillaDrinkICON.innerHTML);

        TequillaDrinkID.innerHTML = data.drinks[rand_drink].idDrink;
        console.log (TequillaDrinkID.innerHTML);

        TequillaRecipe.innerHTML = data.drinks[rand_drink].strInstructions;
        console.log (TequillaRecipe.innerHTML);
	})
	.catch(function() {

	});
}

// FOR TEQUILLA END

// FOR RUM START
// declaring all RUM variables

var alcRum = document.querySelector('#alcRum')
var rumDrinkNAME = document.querySelector("#rumDrinkNAME")
var rumDrinkICON = document.querySelector("#rumDrinkICON")
var rumDrinkID = document.querySelector("#rumDrinkID")
var rumRecipe = document.querySelector("rumRecipe")

function rcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Rum" || "Dark Rum") {
            console.log (data.drinks[rand_drink].strInstructions)
        }

        rumDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        rumDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        rumDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        console.log (rumDrinkNAME.innerHTML);
        console.log (rumDrinkICON.innerHTML);
        console.log (rumDrinkID.innerHTML);
	})
	.catch(function() {

	});
}

// FOR RUM END
