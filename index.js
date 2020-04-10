// FETCHING HTML PARTIAL
const loadBtn = document.querySelector(".button");
const loadHere = document.querySelector(".wrapper");
let url = "./content/partial-1.html";

function handleAjaxRequest() {
    fetch(url)
        .then(function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then(function (data) {
            loadHere.innerHTML = data;
        })
        .catch(function (error) {
            loadHere.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
        })
};

loadBtn.addEventListener("click", handleAjaxRequest);
