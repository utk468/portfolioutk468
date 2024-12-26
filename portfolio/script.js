function handleScrollAnimations() {
    const sections = document.querySelectorAll(".container"); 

    
    const observerOptions = {
        root: null,         
        threshold: 0.2,     
    };

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            const lines = entry.target.querySelectorAll(".line"); // Lines within the section
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add 'visible' class to the section
                revealLinesOnScroll(lines);           // Reveal lines
            } else {
                entry.target.classList.remove("visible"); // Remove 'visible' class from the section
                hideLinesOnScroll(lines);              // Reset lines
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    sections.forEach((section) => observer.observe(section));
}


function revealLinesOnScroll(lines) {
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("visible"); 
        }, index * 300); 
    });
}


function hideLinesOnScroll(lines) {
    lines.forEach((line) => {
        line.classList.remove("visible"); 
    });
}


handleScrollAnimations();











const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", (event) => {
    navMenu.classList.toggle("hidden");
    event.stopPropagation();
});


document.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});


navMenu.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});







const images = [
    "SC1.png",
    "SC2.png",
    "SC3.png",
    "SC4.png",
    "SC5.png"
];

const sliderImage = document.getElementById("slider-image");

let currentIndex = 0;
let intervalId;

function changeImage() {
   
    sliderImage.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out, border-radius 0.5s ease-out";
    sliderImage.style.opacity = 0;
    sliderImage.style.transform = "scale(1.1)"; 
   
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        sliderImage.src = images[currentIndex];
        sliderImage.style.transition = "none"; 
        sliderImage.style.opacity = 0; 
        sliderImage.style.transform = "scale(0.9)"; 
    
        setTimeout(() => {
            sliderImage.style.transition = "opacity 0.5s ease-in, transform 0.5s ease-in, border-radius 0.5s ease-in";
            sliderImage.style.opacity = 1;
            sliderImage.style.transform = "scale(1)"; 
        }, 50); 
    }, 500); 
}


function startSlider() {
    intervalId = setInterval(changeImage, 5000); // Automatically change image every 5 seconds
}


function stopSlider() {
    clearInterval(intervalId); 
}


sliderImage.addEventListener("mouseover", stopSlider); // Stop on hover
sliderImage.addEventListener("mouseout", startSlider); // Resume on mouse leave

startSlider();





const images1 = [
    "DM1.png",
    "DM2.png",
    "DM3.png",
    "DM4.png"
];


const sliderImage1 = document.getElementById("slider-image1");

let currentIndex1 = 0;
let intervalId1;


function changeImage1() {
    
    sliderImage1.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out, border-radius 0.5s ease-out";
    sliderImage1.style.opacity = 0;
    sliderImage1.style.transform = "scale(1.1)"; 
   
    setTimeout(() => {
        currentIndex1 = (currentIndex1 + 1) % images1.length; 
        sliderImage1.src = images1[currentIndex1]; 
        sliderImage1.style.transition = "none"; 
        sliderImage1.style.opacity = 0; 
        sliderImage1.style.transform = "scale(0.9)"; 
        
        setTimeout(() => {
            sliderImage1.style.transition = "opacity 0.5s ease-in, transform 0.5s ease-in, border-radius 0.5s ease-in";
            sliderImage1.style.opacity = 1;
            sliderImage1.style.transform = "scale(1)"; 
        }, 50); 
    }, 500);
}

function startSlider1() {
    intervalId1 = setInterval(changeImage1, 3000); 
}


function stopSlider1() {
    clearInterval(intervalId1); 
}

sliderImage1.addEventListener("mouseover", stopSlider1); // Stop on hover
sliderImage1.addEventListener("mouseout", startSlider1); // Resume on mouse leave

startSlider1();






const images2 = [
    "CP1.png",
    "CP2.png",
    "CP3.png",
    "CP4.png",
    "CP5.png",
    "CP6.png",
    "CP7.png"
];


const sliderImage2 = document.getElementById("slider-image2");

let currentIndex2= 0;
let intervalId2;


function changeImage2() {
   
    sliderImage2.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out, border-radius 0.5s ease-out";
    sliderImage2.style.opacity = 0;
    sliderImage2.style.transform = "scale(1.1)"; 
   


    setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % images2.length; 
        sliderImage2.src = images2[currentIndex2]; 
        sliderImage2.style.transition = "none"; 
        sliderImage2.style.opacity = 0; 
        sliderImage2.style.transform = "scale(0.9)"; 
        

        
        setTimeout(() => {
            sliderImage2.style.transition = "opacity 0.5s ease-in, transform 0.5s ease-in, border-radius 0.5s ease-in";
            sliderImage2.style.opacity = 1;
            sliderImage2.style.transform = "scale(1)"; 
        }, 50); 
    }, 500); 
}


function startSlider2() {
    intervalId2 = setInterval(changeImage2, 3000); // Automatically change image every 3 seconds
}


function stopSlider2() {
    clearInterval(intervalId2); 
}

sliderImage2.addEventListener("mouseover", stopSlider2); // Stop on hover
sliderImage2.addEventListener("mouseout", startSlider2); // Resume on mouse leave

startSlider2();







function toggleMenu1() {
    closeAllMenusExcept(1);
    const menuContent = document.getElementById("menuContent1");
    menuContent.classList.toggle("active");
}


function toggleMenu2() {
    closeAllMenusExcept(2);
    const menuContent = document.getElementById("menuContent2");
    menuContent.classList.toggle("active");
}


function toggleMenu3() {
    closeAllMenusExcept(3);
    const menuContent = document.getElementById("menuContent3");
    menuContent.classList.toggle("active");
}


function toggleMenu4() {
    closeAllMenusExcept(4);
    const menuContent = document.getElementById("menuContent4");
    menuContent.classList.toggle("active");
}


function toggleMenu5() {
    closeAllMenusExcept(5);
    const menuContent = document.getElementById("menuContent5");
    menuContent.classList.toggle("active");
}


function toggleMenu6() {
    closeAllMenusExcept(6);
    const menuContent = document.getElementById("menuContent6");
    menuContent.classList.toggle("active");
}


function toggleMenu7() {
    closeAllMenusExcept(7);
    const menuContent = document.getElementById("menuContent7");
    menuContent.classList.toggle("active");
}


function closeAllMenusExcept(activeMenu) {
    for (let i = 1; i <= 7; i++) {
        if (i !== activeMenu) {
            const menuContent = document.getElementById(`menuContent${i}`);
            if (menuContent) {
                menuContent.classList.remove("active");
            }
        }
    }
}


window.onclick = function (event) {
    for (let i = 1; i <= 7; i++) {
        const menuButton = document.querySelector(`.menu-button${i}`);
        const menuContent = document.getElementById(`menuContent${i}`);
        if (
            !event.target.closest(`.menu-button${i}`) &&
            !event.target.closest(`#menuContent${i}`)
        ) {
            menuContent.classList.remove("active");
        }
    }
};







document.addEventListener("DOMContentLoaded", () => {
  
  function animateProgressBars(entries, observer) {
    entries.forEach(entry => {
      const bar = entry.target;

      if (entry.isIntersecting) {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth; 
      } else {
        bar.style.width = "0%"; 
      }
    });
  }

  const observerOptions = {
    root: null, 
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver(animateProgressBars, observerOptions);

  document.querySelectorAll(".progress-bar").forEach(bar => {
    observer.observe(bar); 
  });
});







document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.querySelector(".contact-container");

   
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    contactContainer.classList.add("visible");
                } else {
                    
                    contactContainer.classList.remove("visible");
                }
            });
        },
        { threshold: 0.2 } 
    );


    setTimeout(() => {
        observer.observe(contactContainer);
    }, 500); 
});
