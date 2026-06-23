let ctr = 0;
function callback() {
   

    const el = document.querySelectorAll("h2")
    el.innerHTML = ctr;
     console.log(ctr);
   
    ctr += 1;
}

setInterval(callback, 1000);

