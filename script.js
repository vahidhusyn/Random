
function gentext(){
    var word=[ 'Word','Hate','Red','Yellow','Fight','Grey','Tight','Rope','Use','Elegant','Rose','Fork','Spoon','Loud','Dress','Green','Marble','Long','Short','Big','Small','Gun', 'Freak', 'Beautiful', 'Money', 'Lion', 'Tiger', 'Honey', 'Horn', 'Dark'];

    var para= document.querySelector(".wordgen");
    para.innerHTML=word[Math.floor(Math.random()*word.length)];

}

function gencolor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    var box= document.querySelector(".colorgen");
    box.style.backgroundColor = "#" + randomColor;
    box.innerHTML= "#" + randomColor;
    // if (box.style.display === "none") {
    //     box.style.display = "block";
    //   }
}

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   gencolor.addEventListener("click", setBg);
//   setBg();