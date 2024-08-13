// making the sun and moon button a varible
const button = document.getElementById("toggleButton");
//varible to track the which mode is on
let lightMode = true;
//varibles for the bottom varible
const header = document.querySelector("header");
const aboutMe = document.getElementById("aboutMe");
const skills = document.getElementById("skills");
const tippyTop  = document.getElementById("top");
//array varibles for the drop down list
const projectDropDown = document.getElementsByClassName("projectDropDown");
const paragraphDropDown = document.getElementsByClassName("word");
//function for light and dark mode
function lightAndDarkMode(){
    //if light mode is true we are changing the website to be dark.
    if(lightMode){
        //elements for the background, text, and bottom borders
        document.body.style.backgroundColor = "#373c3c";
        document.body.style.color = "#fffff2";
        header.style.borderColor =  "#fffff2";
        aboutMe.style.borderColor =  "#fffff2";
        skills.style.borderColor =  "#fffff2";
        tippyTop.style.backgroundColor = "rgb(181, 61, 165)";
        //changing the button to look like a moon
        button.style.borderColor = "rgba(162, 162, 162, 0.81";
        button.style.backgroundColor = "rgba(162, 162, 162, 0.81)";
        button.style.boxShadow = "5px 0 10px 3px rgba(229,229,229,0.3), 0 0 10px 2px rgba(229,229,229,0.3), 5px 0 10px 3px rgba(229,229,229,0.3), 0px 0 3px 2px rgba(229,229,229,0.3)";
        //changing the light mood to false
        lightMode = false;
    }
    else{
        // reverting all the changes that were made
        document.body.style.backgroundColor = "#fffff2";
        document.body.style.color = "#373c3c";
        tippyTop.style.backgroundColor = "lightblue";
        header.style.borderColor =  "#373c3c";
        aboutMe.style.borderColor =  "#373c3c";
        skills.style.borderColor =  "#373c3c";
        button.style.borderColor = "#ffde00";
        button.style.backgroundColor = "#ffde00"
        button.style.boxShadow = "0 0 0 3px #ffde0080, 0 0 0 6px #ffde0040, 0 0 0 9px #ffde0020, 0 0 0 12px #ffde0010";
        lightMode = true;
    }
}
//calling the function if the button is clicked
button.addEventListener("click", lightAndDarkMode);

//this is the drop down function that has a parameter of i
function dropDown(i){
    // if the display is hidden we want the to make it appear when clicked
    if(paragraphDropDown[i].style.display === "none"){
        paragraphDropDown[i].style.display = "block"; 
    }
    // We want to hide the text after the project title is clicked again
    else{
        paragraphDropDown[i].style.display = "none"; 
    }
}
// for each project in the list we have an event handler for if the title is clicked
for (let i = 0; i < projectDropDown.length; i++) {
    projectDropDown[i].addEventListener('click', function(){dropDown(i);

    });
}
