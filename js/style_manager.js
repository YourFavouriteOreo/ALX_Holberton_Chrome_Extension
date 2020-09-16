function skinChange() {
  // Change the skin and remove or apply dark mode
  chrome.storage.sync.get("skin", function (data) {
    var bodyElement = document.getElementsByTagName("body")[0];
    if (data.skin == "dark") {
      bodyElement.classList.add("dark");
      chrome.storage.sync.get("firstDark", function (data) {
        if (!data.firstDark) {
          displayDarkSide(bodyElement);
        }
      });
    } else {
      if (bodyElement.classList.contains("dark")) {
        bodyElement.classList.remove("dark");
      }
    }
  });
}

function joinTheDarkSide() {
  // Remember the setup was complete and remove the modal
  chrome.storage.sync.set({ firstDark: true });
  document.getElementById("open-modal").remove();
}

function displayDarkSide(bodyElement) {
  var modal = document.createElement("div");
  modal.id = "open-modal";
  modal.classList.add("custom-modal-window");
  modal.innerHTML += `
  <div>
      <div class="flex">
      <img id="darth_image" src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=daniel-cheung-B7N0IjiIJYo-unsplash.jpg&w=640" style="width:50%;"/>
      <div style="width:50%;text-align:center;"> 
      <h1> <strong>Welcome to the dark side!</strong> </h1>
      <p> We have ice cream and cookies! </p>
      <button id="joinButton" class="btn btn-default"> Join The Dark Side</button>
      </div>
      </div>
    </div>
`;
  bodyElement.innerHTML += modal.outerHTML;
  document.getElementById("joinButton").onclick = joinTheDarkSide;
}
// Do initial skin check
skinChange();

// Import Fira Code
document.getElementsByTagName("head")[0].innerHTML +=
  '<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet">';

// Actual automated testing code
function test() {
  var x = document.getElementsByClassName("correction_request_test_send");
  for (var item = 0; item < x.length; item++) {
    x[item].click();
  }
}

// Check if in a projects link to know whether to inser additional function
if (window.location.href.includes("/projects/")) {
  var taskButton = document.createElement("button");
  taskButton.textContent = "Perform All Tests";
  taskButton.classList.add("btn-default");
  taskButton.classList.add("btn");
  taskButton.onclick = test;
  var gaps = document.getElementsByClassName("gap");
  var tasks = null;
  for (var i = 0; i < gaps.length; i++) {
    if (gaps[i].textContent.includes("Task")) {
      tasks = gaps[i];
      break;
    }
  }
  tasks.after(taskButton);
}
