const hamburger = document.querySelector(".hamburger");
const navList =document.querySelector(".nav-list");
if (hamburger){
    hamburger.addEventListener("click",()=>{
        navList.classList.toggle("open");
    });
}


const popup = document.querySelector(".join");
const popupkapat=document.querySelector(".join-close");
if(popup){
    popupkapat.addEventListener("click",() => {
        popup.classList.add("hide-join");
    });

    window.addEventListener("load",() => {
        setTimeout(()=> {
            popup.classList.remove("hide-join");
        },1000);
    });
}

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}


