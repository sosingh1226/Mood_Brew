// Navbar-Kailee

// variables
// var gameDay = document.getElementById(option1)

// var breakUp = document.getElementById(option2)

// var codeWorks = document.getElementById(option3)

// var wildCard = document.getElementById(option4)

// array for drinks
// var drinks = [
//     {
//         Type:"Game Day",
//         Alcohol: ["Tequila", "Gin"]
//     },
//     {
//         Type: "Break Up",
//         Alcohol: ["Tequila", "Rum"]
//     },
//     {
//         Type: "My Code Works",
//         Alcohol: ["Gin", "Vodka"]
//     }

// ]

// Function 
// function getDrink(){
    // show choices function

// }

// Show Drink outcome from categories
// var alcoholoption1 = document.querySelector("#alcoholoption1")
// var alcoholoption2 = document.querySelector("#alcoholoption2")


// event listener for category buttons

document.getElementById("gameDay").addEventListener("click", function(event){
    event.preventDefault();

    console.log("hello");
    optG.style.visibility = "visible";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "hidden";

    var h = optG;
    var t = optT;

    coinFlipGD(h, t);
})


document.getElementById("breakUp").addEventListener("click", function(event){
    event.preventDefault();

    console.log("hayyy");
    optG.style.visibility = "hidden";
    optT.style.visibility = "visible";
    optV.style.visibility = "hidden";
    optR.style.visibility = "visible";

    var h = optT;
    var t = optR;

    coinFlip(h, t);
})


document.getElementById("codeWorks").addEventListener("click", function(event){
    event.preventDefault();

    console.log("hiiii");
    optG.style.visibility = "visible";
    optT.style.visibility = "hidden";
    optV.style.visibility = "visible";
    optR.style.visibility = "hidden";

    var h = optG;
    var t = optV;

    coinFlip(h, t);
})

// document.getElementById("option4").addEventListener("click", function(){
//     console.log("hiiii")
// })

// BY SOUMYA

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
        else if (coinResult.outcome === "Tails") 
            tcocktailSurprise();
            console.log ("Tequilla")
            // console.log (TequillaRecipe.innerHTML)
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

        ginDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        ginDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        ginDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        var ginID = ginDrinkID.innerHTML;

        console.log (ginDrinkNAME.innerHTML)
        console.log (ginDrinkICON.innerHTML)
        console.log (ginID)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Gin") {
            console.log (data.drinks[rand_drink].strInstructions)
        }

        for (let i = 0; i < data.drinks.length; i++) {

            if (ginID === data.drinks[i].idDrink) {
                ginRecipe.innerHTML = data.drinks[i].strInstructions; 
            }
            console.log (ginRecipe.innerHTML) 
        }
	})
	.catch(function() {

	});
}

// function fullRecipe(ginID) {
//     fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(newdata) {

//         for (let i = 0; i < newdata.drinks.length; i++) {

//             if (ginID === newdata.drinks[i].idDrink) {
//                 ginRecipe.innerHTML = newdata.drinks[i].strInstructions; 
//             }
//             console.log (ginRecipe.innerHTML) 
//         }
//     })
// 	.catch(function() {
//     });
// }

// FOR GIN END

// FOR VODKA START

// function gcocktailSurprise () {
// 	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(data) {

//         var max = data.drinks.length
//         console.log(max)

//         rand_drink = getRandomNumber(0, max)        
//         console.log(rand_drink)

//         ginDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
//         ginDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
//         ginDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

//         var ginID = ginDrinkID.innerHTML;

//         console.log (ginDrinkNAME.innerHTML)
//         console.log (ginDrinkICON.innerHTML)
//         console.log (ginID)

//         if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Vodka") {
//             console.log (data.drinks[rand_drink].strInstructions)
//         }

//         fullRecipe(ginID)
// 	})
// 	.catch(function() {

// 	});
// }

// function fullRecipe(ginID) {
//     fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(newdata) {

//         for (let i = 0; i < newdata.drinks.length; i++) {

//             if (ginID === newdata.drinks[i].idDrink) {
//                 ginRecipe.innerHTML = newdata.drinks[i].strInstructions; 
//             }
//             console.log (teqRecipe.innerHTML) 
//         }
//     })
// 	.catch(function() {
//     });
// }

// FOR VODKA END

// FOR TEQUILLA START

// declaring TEQUILLA variables
var TequillaRecipe = document.querySelector("TequillaRecipe")
var TequillaDrinkICON = document.querySelector("#TequillaDrinkICON")

// CALLING RANDOM TEQUILLA COCKTAIL

function tcocktailSurprise () {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then (function (resp) { return resp.json() })
    .then(function(data) {

        var max = data.drinks.length
        console.log(max)

        rand_drink = getRandomNumber(0, max)        
        console.log(rand_drink)

        TequillaDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
        TequillarinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
        TequillaDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

        var teqID = TequillaDrinkID.innerHTML;

        console.log (TequillaDrinkNAME.innerHTML)
        console.log (TequillaDrinkICON.innerHTML)
        console.log (teqID)

        if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Tequilla") {
            console.log (data.drinks[rand_drink].strInstructions)
        }

        for (let i = 0; i < data.drinks.length; i++) {

            if (teqID === data.drinks[i].idDrink) {
                TequillaRecipe.innerHTML = data.drinks[i].strInstructions; 
            }
            console.log (TequillaRecipe.innerHTML) 
        }
	})
	.catch(function() {

	});
}

// function fullRecipe(teqID) {
//     fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(newdata) {

//         for (let i = 0; i < newdata.drinks.length; i++) {

//             if (teqID === newdata.drinks[i].idDrink) {
//                 TequillaRecipe.innerHTML = newdata.drinks[i].strInstructions; 
//             }
//             console.log (TequillaRecipe.innerHTML) 
//         }
//     })
// 	.catch(function() {
//     });
// }

// FOR TEQUILLA END

// FOR RUM START

// function gcocktailSurprise () {
// 	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(data) {

//         var max = data.drinks.length
//         console.log(max)

//         rand_drink = getRandomNumber(0, max)        
//         console.log(rand_drink)

//         ginDrinkNAME.innerHTML = data.drinks[rand_drink].strDrink;
//         ginDrinkICON.innerHTML = data.drinks[rand_drink].strDrinkThumb;
//         ginDrinkID.innerHTML = data.drinks[rand_drink].idDrink;

//         var ginID = ginDrinkID.innerHTML;

//         console.log (ginDrinkNAME.innerHTML)
//         console.log (ginDrinkICON.innerHTML)
//         console.log (ginID)

//         if (data.drinks[rand_drink].strIngredient1 || data.drinks[rand_drink].strIngredient2 || data.drinks[rand_drink].strIngredient3 || data.drinks[rand_drink].strIngredient4 === "Rum") {
//             console.log (data.drinks[rand_drink].strInstructions)
//         }

//         fullRecipe(ginID)
// 	})
// 	.catch(function() {

// 	});
// }

// function fullRecipe(ginID) {
//     fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then (function (resp) { return resp.json() })
//     .then(function(newdata) {

//         for (let i = 0; i < newdata.drinks.length; i++) {

//             if (ginID === newdata.drinks[i].idDrink) {
//                 ginRecipe.innerHTML = newdata.drinks[i].strInstructions; 
//             }
//             console.log (ginRecipe.innerHTML) 
//         }
//     })
// 	.catch(function() {
//     });
// }

// FOR RUM END



