document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.stpart');
    const viewportHeight = window.innerHeight;
    const scrollProgress = document.documentElement.scrollTop;

    sections.forEach((section, index) => {
        const sec = section.querySelector('.strpartcont');
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const topPos = scrollProgress - getPreviousElementsHeight(section);
        const border = sectionHeight - viewportHeight;

        // Під час скролу ми перевіряємо лише один раз висоту попередніх елементів і положення
        if (rect.top === 0 && border > topPos) {
            sec.style.transform = `translateY(-${topPos}px)`;
        }
    });
});

function getPreviousElementsHeight(element) {
    let totalHeight = 0;
    let currentElement = element.previousElementSibling;

    // Обчислюємо висоту лише один раз для кожного елемента
    while (currentElement) {
        totalHeight += currentElement.offsetHeight;
        currentElement = currentElement.previousElementSibling;
    }

    return totalHeight;
}


// const sections = document.querySelectorAll('.stpart');
// const allH = calculateTotalHeight(sections);

// document.querySelector('body').style.height = allH+'px';


// document.addEventListener('scroll', function () {
//   const viewportHeight = window.innerHeight;
//   const scrollProgress = document.documentElement.scrollTop;

//   sections.forEach((section, index) => {
//     const rect = section.getBoundingClientRect();
//     let rectTop = rect.top;
//     const rectHeight = rect.height;
//     const inner = section.querySelector('.strpartcont');
//     let prevElements = getPreviousElementsHeight(section);
//     prevElements = prevElements ? prevElements : 0;
//     const topPos = scrollProgress - prevElements;
//     const border = rectHeight - viewportHeight;
//     const changeSec = (scrollProgress + viewportHeight - prevElements);

//     if(index == 1) {
//         console.log(changeSec)
//     }

//     if(scrollProgress + viewportHeight >= prevElements - 100 && changeSec <= viewportHeight && index !== 0) {
//         section.style.transform = `translateY(${changeSec * -1}px)`;
//     }
   
//     if (rectTop <= 50 && topPos <= border) {
//         inner.style.transform = `translateY(-${topPos}px)`;
//     }
//   });
// });

// function getPreviousElementsHeight(element) {
//   let totalHeight = 0;
//   let currentElement = element.previousElementSibling;

//   // Обчислюємо висоту лише один раз для кожного елемента
//   while (currentElement) {
//     totalHeight += currentElement.offsetHeight;
//     currentElement = currentElement.previousElementSibling;
//   }

//   return totalHeight;
// }



// function calculateTotalHeight(sections) {
//     let totalHeight = 0;
//     sections.forEach(section => {
//         totalHeight += section.offsetHeight;
//     });
//     return totalHeight;
// }