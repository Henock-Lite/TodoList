function getSorage() {
  window.localStorage.setItem("todolist", list.innerHTML);
}
function takestorage() {
  const save = window.localStorage.getItem("todolist");
  if (save) {
    list.innerHTML = save;
  }
}
window.addEventListener("load", takestorage);
let form = document.querySelector("form");
let list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  getSorage();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove("checked");
    getSorage();
  } else {
    e.target.classList.add("checked");
    getSorage();
  }
});
