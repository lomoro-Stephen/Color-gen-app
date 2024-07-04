(function(){
    const WrapEl = document.querySelector(".wrap");
    for (let index = 0; index < 12; index++) {
        const colorBoxEl = document.createElement("div");
        colorBoxEl.classList.add("palletEl");
        WrapEl.appendChild(colorBoxEl);
    }

    const allPalletBoxs = document.querySelectorAll(".palletEl");
    generator();

    function generator(){
        allPalletBoxs.forEach((palletBox) => {
            const newColor = randomColor();
            palletBox.style.backgroundColor = "#" + newColor;
            palletBox.innerHTML = "#" + newColor;
        });
    }

    function randomColor(){
        const chars = "0123456789abcdef";
        const colorCodeLength = 6;
        let colorCode = "";
        for (let index = 0; index < colorCodeLength; index++) {
            const randomNum = Math.floor(Math.random() * chars.length);
            colorCode += chars[randomNum];
        }
        return colorCode;
    }




// var typewriter = document.getElementById('typewriter');
// var texts = [' Graphics Designer', 'UI & UX Designer', 'Web Designer'];
// var currentText = 0;
// var letterCount = 0;

// function type() {
//     if (letterCount < texts[currentText].length) {
//         letterCount++;
//         typewriter.textContent = texts[currentText].substring(0, letterCount);
//         setTimeout(type, 100);
//     } else {
//         currentText++;
//         if (currentText >= texts.length) {
//             currentText = 0;
//         }
//         letterCount = 0;
//         setTimeout(type, 2000);
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     type();
// });

//lazy load of images

// const lazyImage =document.querySelectorAll('.lazy');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             let img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.remove('loading');
//             img.classList.add('loaded')
//             observer.unobserve(img);
//         }
//     })
// });
// lazyImage.forEach(img => {
//     observer.observe(img);
// });





//observer
function createIntersectionObserver(className, classToAdd) {
    const observer2 = new IntersectionObserver((entries) => {
        // const Container = document.querySelectorAll("");
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
            } else {
                entry.target.classList.remove(classToAdd);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(className);
    hiddenElements.forEach((el) => observer2.observe(el));
}

createIntersectionObserver('.hiddenContentFromTop', 'show__YContent');
createIntersectionObserver('.hiddenBtnToBottom', 'show__YContent');
createIntersectionObserver('.hiddenLeft', 'showToLeft');
createIntersectionObserver('.hiddenRight', 'showToLeft');
createIntersectionObserver('.hiddenImage', 'show__YContent');
createIntersectionObserver('.hiddenCardToLeft', 'showToLeft');
createIntersectionObserver('.HiddenToBottom', 'fromBottom');

//custom cursor
/*
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.customCursor');
  
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  
    document.addEventListener('mouseenter', function () {
      cursor.style.opacity = 1;
    });
  
    document.addEventListener('mouseleave', function () {
      cursor.style.opacity = 0;
    });
  });
  */


})();
