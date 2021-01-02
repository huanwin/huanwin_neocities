const dm = localStorage.getItem("huanwin-dark-mode");

if (dm) {
    add_dark();
}

const dlt = document.querySelector("#dlt");

dlt.addEventListener('click', event => {
    configure_dark_mode();
})

function configure_dark_mode() {
    let body = document.querySelector("body");
    let bq = document.querySelectorAll("blockquote");
    if (localStorage.getItem("huanwin-dark-mode")) {
        remove_dark();
    }
    else {
        add_dark();
    }
}

function add_dark() {
    let body = document.querySelector("body");
    let bq = document.querySelectorAll("blockquote");
    body.classList.add("dark-mode");
    bq.forEach(function(b) {
        b.classList.add("dark-mode");
    });
    localStorage.setItem("huanwin-dark-mode", "true");
}

function remove_dark() {
    let body = document.querySelector("body");
    let bq = document.querySelectorAll("blockquote");
    body.classList.remove("dark-mode");
    bq.forEach(function(b) {
        b.classList.remove("dark-mode");
    })
    localStorage.removeItem("huanwin-dark-mode");
}