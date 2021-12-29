const right = document.querySelector(".right");
const left = document.querySelector(".left");
const img = document.querySelector(".boxMain img");
//active icons
const activeIcons = document.querySelectorAll(".active ul li");
activeIcons[0].style.backgroundColor = "#ef4444";
//image array
const imgArr = [
  "./img/img1.jpg",
  "./img/img2.jpeg",
  "./img/img3.jpg",
  "./img/img-4.jpeg",
];
//length count
let imgLength = 0;
//right slider
let rightSlide = () => {
  imgLength++;
  //active icons change
  activeIcons[imgLength - 1].style.backgroundColor = "#e2e8f0";
  setTimeout(
    () => (activeIcons[imgLength].style.backgroundColor = "#ef4444"),
    1
  );

  // image change
  img.classList.add("leftAnimate1");
  setTimeout(() => {
    img.src = imgArr[imgLength];
    img.classList.remove("leftAnimate1");
  }, 800);
  if (3 < imgLength) {
    imgLength = 0;
  }
  console.log(imgLength);
};
//left slider
let leftSlide = () => {
  imgLength--;
  img.classList.add("rightAnimate1");

  //   activeIcons[0].style.backgroundColor = "#e2e8f0"
  //   if(activeIcons[0].style.backgroundColor = "#e2e8f0"){
  //       activeIcons[imgLength].style.backgroundColor = "#ef4444"
  //   }

  //   setTimeout(()=>activeIcons[imgLength-1].style.backgroundColor = "#ef4444",1)

  setTimeout(() => {
    img.src = imgArr[imgLength];
    img.classList.remove("rightAnimate1");
  }, 800);

  if (imgLength < 0) {
    imgLength = imgArr.length - 1;
  }

 function iconsChange(value1,value2){
      if(imgLength==value1){
            activeIcons[value2].style.backgroundColor = "#e2e8f0"
      
            activeIcons[imgLength].style.backgroundColor = "#ef4444"
      
        }
 }
 iconsChange(3,0)
 iconsChange(2,3)
 iconsChange(1,2)
 iconsChange(0,1)
console.log(imgLength)
 
};
right.addEventListener("click", () => rightSlide());
left.addEventListener("click", () => leftSlide());









//   if(imgLength==2){
//       activeIcons[3].style.backgroundColor = "#e2e8f0"

//       activeIcons[imgLength].style.backgroundColor = "#ef4444"

//   }
//   if(imgLength==1){
//       activeIcons[2].style.backgroundColor = "#e2e8f0"

//       activeIcons[imgLength].style.backgroundColor = "#ef4444"

//   }
//   if(imgLength==0){
//       activeIcons[1].style.backgroundColor = "#e2e8f0"

//       activeIcons[imgLength].style.backgroundColor = "#ef4444"

//   }


//   function rightAnimate(len, value, lenValue) {
//     if (imgLength == len) {
//       function sub() {
//         img.classList.add("leftAnimate1");
//         setTimeout(() => {
//           img.src = imgArr[value];
//           img.classList.remove("leftAnimate1");
//         }, 800);
//       }
//       sub();
//       imgLength = lenValue;
//     }
//   }
//   rightAnimate(1, 1, imgLength);
//   rightAnimate(2, 2, imgLength);
//   rightAnimate(3, 3, imgLength);
//   rightAnimate(4, 0, 0);
