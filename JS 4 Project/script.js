// JavaScript goes here.
// start off with 0, each question gives different amounts of points. 
// conditional at the end  such as if score is between 5 and 10,
// you are this character, etc etc
let score = 0;

//buttons
let zeroSiblingsButton = document.querySelector("#one-one");
let oneSiblingButton = document.querySelector("#one-two");
let twoSiblingsButton = document.querySelector("#one-three");
let threePlusSiblingsButton = document.querySelector("#one-four");



//first question type shi
zeroSiblingsButton.addEventListener("click", () => {
    console.log("1-1 clicked");
    zeroSiblingsButton.style.opacity = "1";
    oneSiblingButton.style.opacity = "0.5";
    twoSiblingsButton.style.opacity = "0.5";
    threePlusSiblingsButton.style.opacity = "0.5";
});
oneSiblingButton.addEventListener("click", () => {
    console.log("1-2 clicked");
    zeroSiblingsButton.style.opacity = ".5";
    oneSiblingButton.style.opacity = "1";
    twoSiblingsButton.style.opacity = "0.5";
    threePlusSiblingsButton.style.opacity = "0.5";
});
twoSiblingsButton.addEventListener("click", () => {
    console.log("1-3 clicked");
    zeroSiblingsButton.style.opacity = ".5";
    oneSiblingButton.style.opacity = "0.5";
    twoSiblingsButton.style.opacity = "1";
    threePlusSiblingsButton.style.opacity = "0.5";
});
threePlusSiblingsButton.addEventListener("click", () => {
    console.log("1-4 clicked");
    zeroSiblingsButton.style.opacity = ".5";
    oneSiblingButton.style.opacity = "0.5";
    twoSiblingsButton.style.opacity = "0.5";
    threePlusSiblingsButton.style.opacity = "1";
});



//second question starts here
let yesButton = document.querySelector("#two-one");
let noButton = document.querySelector("#two-two");;

yesButton.addEventListener("click", () => {
    console.log("2-1 clicked!");
    yesButton.style.opacity = "1";
    noButton.style.opacity = ".5";
});
noButton.addEventListener("click", () => {
    console.log("2-2 clicked!");
    yesButton.style.opacity = ".5";
    noButton.style.opacity = "1";
});




//results timin!
let resultsButton = document.querySelector("#resultButton")

resultsButton.addEventListener("click", () => {
    console.log(yesButton.style.opacity.value)

    //if yes for happy and don't cry at all
    if (noButton.style.opacity == "0.5" && zeroSiblingsButton.style.opacity == "1" && oneSiblingButton.style.opacity == "0.5") {
        window.location = "characterHTML/todd.html";
    }
    //if yes for happy is selected and you cry once in a while
    else if (noButton.style.opacity == "0.5" && oneSiblingButton.style.opacity == "1" && zeroSiblingsButton.style.opacity == "0.5") {
        window.location = "characterHTML/todd.html";
    }

    //if yes for happy and cry more than once in a while
    else if (noButton.style.opacity == "0.5" && twoSiblingsButton.style.opacity == "1" && oneSiblingButton.style.opacity == "0.5") {
        window.location = "characterHTML/mrPeanutbutter.html";
    }
    //if yes for happy and cry all the time
    else if (noButton.style.opacity == "0.5" && threePlusSiblingsButton.style.opacity == "1" && oneSiblingButton.style.opacity == "0.5") {
        window.location = "characterHTML/mrPeanutButter.html";
    }







    //if no for happy and dont cry
    else if (yesButton.style.opacity == "0.5" && zeroSiblingsButton.style.opacity == "1" && oneSiblingButton.style.opacity == "0.5") {
        window.location = "characterHTML/bojackHorseman.html"
    }
    //not happy and cry once in a while
    else if (yesButton.style.opacity == "0.5" && oneSiblingButton.style.opacity == "1" && zeroSiblingsButton.style.opacity == "0.5") {
        window.location = "characterHTML/princessCarolyn.html"
    }
    //not happy and cry more than once in a while
    else if (yesButton.style.opacity == "0.5" && twoSiblingsButton.style.opacity == "1" && zeroSiblingsButton.style.opacity == "0.5") {
        window.location = "characterHTML/sarahLynn.html"
    }
    //if no for happy is selected and cry all the time
    else if (yesButton.style.opacity == "0.5" && threePlusSiblingsButton.style.opacity == "1" && zeroSiblingsButton.style.opacity == "0.5") {
        window.location = "characterHTML/dianeNguyen.html"
    }


});



//fake1
//buttons
let fake1 = document.querySelector("#fake1");
let fake2 = document.querySelector("#fake2");
let fake3 = document.querySelector("#fake3");
let fake4 = document.querySelector("#fake4");



//first question type shi
fake1.addEventListener("click", () => {
    console.log("1-1 clicked");
    fake1.style.opacity = "1"
    fake2.style.opacity = ".5"
    fake3.style.opacity = ".5"
    fake4.style.opacity = ".5"
});
fake2.addEventListener("click", () => {
    console.log("1-2 clicked");
    fake1.style.opacity = ".5"
    fake2.style.opacity = "1"
    fake3.style.opacity = ".5"
    fake4.style.opacity = ".5"
});
fake3.addEventListener("click", () => {
    console.log("1-3 clicked");
    fake1.style.opacity = ".5"
    fake2.style.opacity = ".5"
    fake3.style.opacity = "1"
    fake4.style.opacity = ".5"
});
fake4.addEventListener("click", () => {
    console.log("1-4 clicked");
    fake1.style.opacity = ".5"
    fake2.style.opacity = ".5"
    fake3.style.opacity = ".5"
    fake4.style.opacity = "1"
});