class elementCreator{
    constructor(tag, id, classname, display){
        this.tag = tag;
        this.id = id;
        this.classname = classname;
        this.display = this.display;

        const temp = document.createElement(tag);
        temp.id = id;
        temp.className = classname;
        temp.style.display = display;
        this.element = temp;
    }
    getElement(){
        return this.element;
    }
}
// ------------------------------------------
export function homePage(){

    const temp1 = new elementCreator("div", "Home", "", "grid");
    const temp2 = new elementCreator("h1", "homeTitle", "", "grid");
    const temp3 = new elementCreator("p", "", "description", "");

    const home = temp1.getElement();
    const homeTitle = temp2.getElement();
    const description = temp3.getElement();

    description.innerText = "Home is where i live.";
    homeTitle.innerText = "Home";
    home.appendChild(homeTitle);
    home.appendChild(description);

    return home;
}
export function aboutPage(){

    const temp1 = new elementCreator("div", "About", "", "grid");
    const temp2 = new elementCreator("h1", "aboutTitle", "", "grid");
    const temp3 = new elementCreator("p", "", "description", "");

    const about = temp1.getElement();
    const aboutTitle = temp2.getElement();
    const description = temp3.getElement();

    description.innerText = "Where we live, what we sell, and our contact number";
    aboutTitle.innerText = "About";
    about.appendChild(aboutTitle);
    about.appendChild(description);

    return about;
}
export function careerPage(){

    const temp1 = new elementCreator("div", "Career", "", "grid");
    const temp2 = new elementCreator("h1", "careerTitle", "", "grid");
    const temp3 = new elementCreator("p", "", "description", "");

    const career = temp1.getElement();
    const careerTitle = temp2.getElement();
    const description = temp3.getElement();

    description.innerText = "A list of career";
    careerTitle.innerText = "Career";
    career.appendChild(careerTitle);
    career.appendChild(description);

    return career;
}
