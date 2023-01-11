const btn=document.querySelector("#bt");

btn.addEventListener("click",function (){
  fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {document.getElementById("t-container").textContent=data.activity})
  });

