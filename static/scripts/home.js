var join_btn = document.getElementById("join-btn");
var create_btn = document.getElementById("create-btn");
var modal = document.getElementById("bg-modal");
var close = document.querySelector(".close");

join_btn.onclick = function() {
    modal.style.display = "flex";
}

close.addEventListener("click", function() {
    modal.style.display = "none";
});

create_btn.onclick = function() {
    console.log("created clicked");
}