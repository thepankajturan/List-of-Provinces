function startup() {
    console.log("successfully linked");

    const name = "Pankaj Pankaj";
    const username = "panpanka";
    const sid = 991668392;
    const pName = "Computer Programming";
    const country = "India";
    const greeting = `Fall 2023 Assignment#2 for ${name} from ${country}`;
    const footerText = `My Login: ${username} / My ID: ${sid} / My Program: ${pName}`;

    // Provinces list Objects
    const on = document.getElementById("on");
    const qc = document.getElementById("qc");
    const ns = document.getElementById("ns");
    const nb = document.getElementById("nb");
    const mb = document.getElementById("mb");
    const bc = document.getElementById("bc");
    const pe = document.getElementById("pe");
    const sk = document.getElementById("sk");
    const ab = document.getElementById("ab");
    const nl = document.getElementById("nl");


    const mainHeader = document.getElementById("main-header");
    mainHeader.innerText = greeting;

    const footerObj = document.getElementById("footer");
    footerObj.innerText = footerText;


    let btn = document.getElementById("button");
    btn.addEventListener("click", buttonClicked);


    function buttonClicked() {
        console.log("Button is clicked");

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "../json/panpanka.json", true);

        xhr.onload = function () {

           const provincesData = JSON.parse(this.responseText);

           ab.innerHTML = `<a href="/pages/second.html?name=${provincesData[0].name}"><img class="flag-img" src="${provincesData[0].flag}" alt="${provincesData[0].name}" /> <br> ${provincesData[0].name}</a>`;
           bc.innerHTML = `<a href="/pages/second.html?name=${provincesData[1].name}"><img class="flag-img" src="${provincesData[1].flag}" alt="${provincesData[1].name}" /> <br> ${provincesData[1].name}</a>`;
           mb.innerHTML = `<a href="/pages/second.html?name=${provincesData[2].name}"><img class="flag-img" src="${provincesData[2].flag}" alt="${provincesData[2].name}" /> <br> ${provincesData[2].name}</a>`;
           nb.innerHTML = `<a href="/pages/second.html?name=${provincesData[3].name}"><img class="flag-img" src="${provincesData[3].flag}" alt="${provincesData[3].name}" /> <br> ${provincesData[3].name}</a>`;
           nl.innerHTML = `<a href="/pages/second.html?name=${provincesData[4].name}"><img class="flag-img" src="${provincesData[4].flag}" alt="${provincesData[4].name}" /> <br> ${provincesData[4].name}</a>`;
           ns.innerHTML = `<a href="/pages/second.html?name=${provincesData[5].name}"><img class="flag-img" src="${provincesData[5].flag}" alt="${provincesData[5].name}" /> <br> ${provincesData[5].name}</a>`;
           on.innerHTML = `<a href="/pages/second.html?name=${provincesData[6].name}"><img class="flag-img" src="${provincesData[6].flag}" alt="${provincesData[6].name}" /> <br> ${provincesData[6].name}</a>`;
           pe.innerHTML = `<a href="/pages/second.html?name=${provincesData[7].name}"><img class="flag-img" src="${provincesData[7].flag}" alt="${provincesData[7].name}" /> <br> ${provincesData[7].name}</a>`;
           qc.innerHTML = `<a href="/pages/second.html?name=${provincesData[8].name}"><img class="flag-img" src="${provincesData[8].flag}" alt="${provincesData[8].name}" /> <br> ${provincesData[8].name}</a>`;
           sk.innerHTML = `<a href="/pages/second.html?name=${provincesData[9].name}"><img class="flag-img" src="${provincesData[9].flag}" alt="${provincesData[9].name}" /> <br> ${provincesData[9].name}</a>`;
            
        }
        
        xhr.send();

    }

    const backBtn = document.getElementById("go-back-btn");
    backBtn.addEventListener("click", goBack);
    
    function goBack() {
        window.history.back();
    }


}
