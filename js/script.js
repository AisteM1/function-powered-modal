var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector (".modal-x");

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
}

//Bonus Step
// var openModal = function () {
// modal.classList.add ("show-modal");
//button.innerText = "You've got this!!!";
// };

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerTex = "You've got this!!!";
});

//Bonus Step
//openModal();


modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  //console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal ();
    }
  }
});