const btn = document.querySelector("button");
const swid = document.querySelector(".star-widget");
const coBtn = document.querySelector(".edit");
        btn.onclick = ()=>{
          swid.style.display = "none";
          post.style.display = "block";
          coBtn.onclick = ()=>{
            swid.style.display = "block";
            post.style.display = "none";
          }
          return false;
        }