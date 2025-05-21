function checkName () {
    // check if entered name is valid
    var nameBox = document.getElementById("inputname");
    var name = nameBox.value;
    var success = true;

    if (name.length>=4) {
        for (var i=0; i<name.length; i++) {
            if (/^[A-Za-z]$/.test(name[i])==false){
                success=false;
            }
        }
        if (success){
            nameBox.style.borderColor = "green";
        } else{
            nameBox.style.borderColor = "red";
        }
    } else {
        nameBox.style.borderColor = "red";
    }
}

function checkPhone () {
    // check if entered phone number is valid
    var phoneBox = document.getElementById("inputphone");
    var phone = phoneBox.value;

    if (/^\d\d\d \d\d\d \d\d\d\d$/.test(phone)==false) {
        phoneBox.style.borderColor = "red";
    } else {
        phoneBox.style.borderColor = "green";
    }
}

function checkProductID () {
    // check if entered product ID is valid
    var productIDBox = document.getElementById("productnum");
    var productID = productIDBox.value;
    var productCodes = ['SS101', 'AA101', 'SS102', 'PS101'];
    var success = false;

    for (var code of productCodes) {
        if (productID==code){
            success = true;
            break;
        }
        continue;
    }

    if (success) {
        productIDBox.style.borderColor = "green";
    }
    else{
        productIDBox.style.borderColor = "red";
    }
}

function checkMessage () {
    // check if entered message is valid
    var msgBox = document.getElementById("inputMessage");
    var message = msgBox.value;

    if (message.length>=10 && message.length<=30) {
        msgBox.style.borderColor = "green";
    } else {
        msgBox.style.borderColor = "red";
    }
}

function updateStatus() {
    // hide/show product ID depending on status
    var msgReason = document.getElementById("productinfo");
    var productLabel = document.getElementById("productid");
    var productIDBox = document.getElementById("productnum");

    if (msgReason.checked) {
        productLabel.className = "visible";
        productIDBox.className = "textbox visible";
    } else {
        productLabel.className = "hidden";
        productIDBox.className = "textbox hidden";
    }
}

function backToTop(event) {
    // back to top button function
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function displayGreeting() { 
    // day-specific message display
    var today = new Date(); 
    var day = today.getDay();
    var msg = "";

    if (day == 0) {     //if it is sunday
        msg = "Have a Soft & Snuggly Sunday !"; 
    }
    else if (day == 1) { 
        msg = "Have a Marvelously Made Monday!"; 
    }
    else if (day == 2) { 
        msg = "Have a Tangle-Free Tuesday!"; 
    }
    else if (day == 3) { 
        msg = "Have a Whimsical & Wonderful Wednesday!"; 
    }
    else if (day == 4) { 
        msg = "Have a Threaded Thursday!"; 
    }
    else if (day == 5) { 
        msg = "Have a Fluffy & Fun Friday!"; 
    }
    else if (day == 6) { 
        msg = "Have a Snug & Cozy Saturday!"; 
    }
    document.getElementById("deal-subtitle").innerHTML = msg;
}
            
document.addEventListener("DOMContentLoaded", displayGreeting);

function scrollFunction() {
    //enhanced parallax
    var scroll = window.scrollY;
    var outer = document.getElementById("memberlist");
    var m = -0.5;
    var b = 0;
    
    var newTop = m*scroll + b;
    
    outer.style.backgroundPositionY = newTop + "px";
}

function scrollFunction2() {
    //scrollfire
    var scroll = window.scrollY;
    
    var title = document.getElementById("title");
    var subtitle = document.getElementById("deal-subtitle");
    var abouttitle = document.getElementById("about-title")
    var teamtitle = document.getElementById("team-title")
    var productstitle = document.getElementById("products-title")
    var contacttitle = document.getElementById("contact-title")
    var referencestitle = document.getElementById("references-title")

    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var s6 = document.getElementById("s6");
    var t1 = s1.offsetTop;
    var t2 = s2.offsetTop;
    var t3 = s3.offsetTop;
    var t4 = s4.offsetTop;
    var t5 = s5.offsetTop;
    var t6 = s6.offsetTop;

    title.style.transform = "scale(1, 1)";
    subtitle.style.transform = "scale(1, 1)";
    abouttitle.style.transform = "scale(1, 1)";
    teamtitle.style.transform = "scale(1, 1)";
    productstitle.style.transform = "scale(1, 1)";
    contacttitle.style.transform = "scale(1, 1)";
    referencestitle.style.transform = "scale(1, 1)";

    if (scroll > t6) {
        referencestitle.style.transform = "scale(1.15, 1.15)";
    } else if (scroll > t5) {
        contacttitle.style.transform = "scale(1.15, 1.15)";

    } else if (scroll > t4) {
        productstitle.style.transform = "scale(1.15, 1.15)";
    } else if (scroll > t3) {
        teamtitle.style.transform = "scale(1.15, 1.15)";
    } else if (scroll > t2) {
        abouttitle.style.transform = "scale(1.15, 1.15)";
    } else if (scroll > t1) {
        title.style.transform = "scale(1.15, 1.15)";
        subtitle.style.transform = "scale(1.15, 1.15)";
    }
}
