window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
        document.getElementById("name").style.display = "block";
    } else {
        document.getElementById("name").style.display = "none";
    }
}

function func_contact() {
    document.getElementById("main").style.display = "none";
    document.getElementById("cont").style.display = "block";
}

function func_main() {
    document.getElementById("main").style.display = "block";
    document.getElementById("cont").style.display = "none";
}