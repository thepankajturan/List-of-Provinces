function startup() {

    const name = "Pankaj Pankaj";
    const username = "panpanka";
    const sid = 991668392;
    const pName = "Computer Programming";
    const country = "India";
    const footerText = `My Login: ${username} / My ID: ${sid} / My Program: ${pName}`;


    const footerObj = document.getElementById("footer");
    footerObj.innerText = footerText;

    const provinceDetails = document.getElementById("provinceDetails");
    const queryParams = new URLSearchParams(window.location.search);
    const provinceName = queryParams.get("name");

    function loadProvinceDetails() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/List-of-Provinces/json/second.json", true);
        xhr.onload = function () {
            if (xhr.status == 200) {

                const provinceData = JSON.parse(this.responseText);
                const selectedProvince = provinceData[provinceName];

                if (selectedProvince) {
                    provinceDetails.innerHTML = `<br>
                    <h2>${provinceName}</h2>
                    <br><a href="third.html"><img class="flag-img" src="${selectedProvince.flag}" alt="${provinceName}" /></a>
                     <br><br>
                    <p>${selectedProvince.description}</p>
                    <br>
                    <h3>Major Cities:</h3>
                    <ul>
                        <li>${selectedProvince.cities[0]}</li>
                        <li>${selectedProvince.cities[1]}</li>
                        <li>${selectedProvince.cities[2]}</li>
                    </ul> 
                    `;
                } else {
                    console.error("Province not found.")
                }

            } else {
                console.error("Failed to load Province Details.");
            }
        }

        xhr.send();
    }

    loadProvinceDetails();


    const backBtn = document.getElementById("go-back-btn");
    backBtn.addEventListener("click", goBack);
    
    function goBack() {
        window.history.back();
    }

}
