function startup() {

    const name = "Pankaj Pankaj";
    const username = "panpanka";
    const sid = 991668392;
    const pName = "Computer Programming";
    const country = "India";
    const activityDiv = document.getElementById("activity");
    const footerText = `My Login: ${username} / My ID: ${sid} / My Program: ${pName}`;

    const footerObj = document.getElementById("footer");
    footerObj.innerText = footerText;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.boredapi.com/api/activity", true);
    xhr.onload = function () {
        const apiData = JSON.parse(this.responseText);
        const activity = apiData.activity;
        const type = apiData.type;

        activityDiv.innerHTML = `<h3>Activity: </h3><h4>${activity}</h4><h3>Type: </h3><h4>${type}</h4>`;


    }

    xhr.send();


    const btn = document.getElementById("button");

    btn.addEventListener("click", buttonClicked);

    function buttonClicked() {
        console.log("Button Clicked");

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.boredapi.com/api/activity", true);
        xhr.onload = function () {
            const apiData = JSON.parse(this.responseText);
            const activity = apiData.activity;
            const type = apiData.type;

            activityDiv.innerHTML = `<h3>Activity: </h3><h4>${activity}</h4><h3>Type: </h3><h4>${type}</h4>`;


        }

        xhr.send();


    }


    const tableBody = document.querySelector('.styled-table tbody');
    const xhr2 = new XMLHttpRequest();

    xhr2.open("GET", "https://date.nager.at/api/v2/publicholidays/2020/CA", true);
    xhr2.onload = function () {
        const apiData = JSON.parse(this.responseText);
        console.log(apiData[0].name);
        function populateTableWithData(data) {
            data.forEach(holiday => {
                const row = tableBody.insertRow();
                const nameCell = row.insertCell(0);
                const dateCell = row.insertCell(1);

                nameCell.textContent = holiday.name;
                dateCell.textContent = holiday.date;
            });
        }

        populateTableWithData(apiData);
    }

    xhr2.send();

    const backBtn = document.getElementById("go-back-btn");
    backBtn.addEventListener("click", goBack);
    
    function goBack() {
        window.history.back();
    }
}