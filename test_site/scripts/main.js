let myImage = document.querySelector("img");
let myText = document.querySelector("p");
let myA = document.querySelector("a");
let myLink = document.getElementById("mylink");
let list = document.getElementById("itemlist");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Huawei_logo_icon_170010.png"){
        myImage.setAttribute("src","images/apple_icon.png");
        myText.textContent = "We aim to sell more expensive" ;
        updateList(["Money", "Labour"]);
        myLink.href = "https://www.apple.com/store?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_703367184603_pgrid_13945964887_pntwk_g_pchan__pexid__ptid_kwd-10778630_&cid=aos-us-kwgo-brand-apple--slid---product-";
        myA.textContent = "Apple";
        
    }else{
        myImage.setAttribute("src","images/Huawei_logo_icon_170010.png");
        myText.textContent = "Huawei is a company that sell phones which";
        updateList(["Cheap","Useful"]);
        myLink.href = "https://www.huawei.com/cn/?ic_medium=direct&ic_source=surlent";
        myA.textContent = "Huawei";

    }
};
function updateList(items) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (let item of items) {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
}
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")
function setUsername(){
    let myName = prompt("Name please:")
    localStorage.setItem("Name",myName)
    myHeading.textContent = 'wellcome ' + myName 
};
if (!localStorage.getItem("name")) {
    setUsername();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "酷毙了" + storedName;
  }
myButton.onclick = function () {
    setUsername();
};
  