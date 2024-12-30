import "./style.css";
import { aboutPage, careerPage, homePage } from "./classes";

const content = document.getElementById("content");

const link = document.getElementsByClassName("headerLink");
const Homepage = homePage();
const Aboutpage = aboutPage();
const Careerpage = careerPage();

if(link.length > 0){
    Array.from(link).forEach(link => {
        link.addEventListener("click", () => {
            const nav = link.innerText;
            navCase(nav);
        })
    })
}
// ---------------------------------------------------------------
function navCase(nav){
    switch(nav){
        case "Home":
            console.log("Home page");
            Removechild();
            content.appendChild(Homepage);
            break;
        case "About":
            console.log("About us page");
            Removechild();
            content.appendChild(Aboutpage);
            break;
        case "Career":
            console.log("Career page");
            Removechild();
            content.appendChild(Careerpage);
            break; 
    }
}
function Removechild(){
    if(content.firstChild){
        content.removeChild(content.firstChild)
    }
}
