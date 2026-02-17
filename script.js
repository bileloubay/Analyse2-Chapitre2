document.querySelectorAll(".frame").forEach(fr => {    
    fr.innerHTML = "<div>" + fr.innerHTML + "</div";
});

document.querySelectorAll("sp-ce").forEach(sp => {    
    sp.innerHTML = "&nbsp;".repeat(sp.textContent);
});

// const mwd = 900;
// const wwd = window.innerWidth;
// if (wwd < mwd){
//     alert(wwd/mwd);
//     document.querySelector("main").style.transform = `scale(${wwd/mwd})`;

// } 
// console.log(window.innerWidth);


