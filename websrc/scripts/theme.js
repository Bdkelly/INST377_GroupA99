const currentPage = location.href.split("/").slice(-1);
const theme = document.querySelector("#theme");

let darkMode = localStorage.getItem("darkMode");
const themeToggle = document.querySelector("#themeToggle");

function enableDarkMode() {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    if(currentPage == "about.html"){
        theme.href = "styles/darkabout.css";
    }
    else if(currentPage == "doc.html") {
            theme.href = "styles/darkdoc.css";
    }
    else if(currentPage == "") {
        theme.href = "styles/darkhome.css";
    }
    themeToggle.innerText = "Dark Mode Enabled";
}

function disableDarkMode() {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "disabled");
    if(currentPage == "about.html"){
        theme.href = "styles/aboutstyles.css";
    }
    else if(currentPage == "doc.html") {
            theme.href = "styles/docstyles.css";
    }
    else if(currentPage == "") {
        theme.href = "styles/homestyles.css";
    }
    themeToggle.innerHTML = "Light Mode Enabled";
}

if(darkMode === "enabled") {
    enableDarkMode();
}

themeToggle.addEventListener("click", function() {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});