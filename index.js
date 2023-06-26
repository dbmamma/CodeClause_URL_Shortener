let longURL=document.getElementById("longurl");
let shorten=document.getElementById("shorten");
let shortURL=document.getElementById("shorturl");
let copy=document.getElementById("copy");
shorten.addEventListener("click",()=>{
  let url=longURL.value;
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`)
    .then((resp)=>resp.json())
    .then((value)=>{
      shortURL.value=value.result.short_link;
    })
    .catch((error)=>{
      shortURL.value="Oops something went Wrong!";
    });
});
copy.addEventListener("click",()=>{
  navigator.clipboard.writeText(shortURL.value);
  copy.innerHTML="Copied!";
  setTimeout(()=>{
    copy.innerHTML="Copy";
  },1000);
});
