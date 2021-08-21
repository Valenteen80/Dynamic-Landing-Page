// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    hour = (hour < 10) ? '0' + hour : hour,
    min = (min < 10) ? '0' + min : min,  
    sec = (sec < 10) ? '0' + sec : sec;   

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  if (hour % 12) {
    hour = hour % 12;
  }

  // Output Time
  time.innerHTML = hour + ':' + min + ':' + sec + ' ' + amPm;

  setTimeout(showTime, 1000);
}

showTime();

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://oir.mobi/uploads/posts/2021-06/1623446769_11-oir_mobi-p-belorusskaya-priroda-priroda-krasivo-foto-12.jpg')";
    greeting.textContent = "Добрага ранку,  и сонца на ганку!";
    document.body.style.color = "white";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('http://s2.fotokto.ru/photo/full/633/6339287.jpg')";
    greeting.textContent = "Добры дзень, ";
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://content.onliner.by/news/2016/05/original_size/1029112cdf021e529d237cddca59fccc_1464685007.jpg')";
    greeting.textContent = "Добры вечар, ";
    document.body.style.color = "white";
  }
}

setBgGreet();

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

getName();

// Set Name
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function setName(e) {
  if ((e.type === "keypress") && (e.keyCode === 13)) {
    localStorage.setItem("name", e.target.innerText);
    name.blur();
  }
  localStorage.setItem("name", e.target.innerText);
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

getFocus();

// Set Focus
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

function setFocus(e) {
  if ((e.type === "keypress") && (e.keyCode === 13)) {
    localStorage.setItem("focus", e.target.innerText);
    focus.blur();
  }
  localStorage.setItem("focus", e.target.innerText);
}

