/*navbar*/
const nav = document.getElementById("navbar");
const fixnav = nav.offsetTop;
window.onscroll = function myFunction(){
    if (window.pageYOffset > fixnav){
        nav.style.backgroundColor = "crimson";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}
/*navbar*/


/*Menu Mobile*/
const menu = document.getElementById("menu");
const widgetMenu = document.getElementById("widget-menu");
const line1 = document.getElementsByClassName("line")[0];
const line2 = document.getElementsByClassName("line")[1];
const line3 = document.getElementsByClassName("line")[2];
menu.onclick = function btnMenu(){
    if(widgetMenu.style.left=="0px"){
        widgetMenu.style.left="-320px";
    }else{
        widgetMenu.style.left="0";
    }
    line1.style.transform = (line1.style.transform=="rotate(45deg)") ? "rotate(0deg)" : "rotate(45deg)";
    line2.style.transform = (line2.style.transform=="rotate(-45deg)") ? "rotate(0deg)" : "rotate(-45deg)";
    line3.style.transform = (line3.style.transform=="rotate(45deg)") ? "rotate(0deg)" : "rotate(45deg)";
}
/*Akhir Mobile*/
/*header*/
const dynamicText = document.getElementById("hero-p");
const words = ["Pajak", "Akuntansi", "Keuangan", "Audit"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect()
/* akhir header*/