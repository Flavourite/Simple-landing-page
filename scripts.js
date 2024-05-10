"use strict";

const header = document.querySelector("header");
const sliders = document.querySelector(".slider");
const rightArrowBtn = document.querySelector(".right__arrow");
const leftArrowBtn = document.querySelector(".left__arrow");
const slides = document.querySelectorAll(".slide");
const nav = document.querySelector(".nav");

header.style.height = `${window.getComputedStyle(sliders).height}`;

nav.addEventListener("mouseover", (e) => {
  //   console.log(nav.children);
  //   [...nav.children].forEach((child) => {
  //     child.target.classList.add("hover");
  //   });
  //   console.log(e.target.closest("li"));
  if (e.target.classList.contains("nav-link")) {
    console.log(e.target);
    e.target.classList.add("hover");
  }
});
nav.addEventListener("mouseout", (e) => {
  //   console.log(e.target.closest("li"));
  if (e.target.classList.contains("nav-link")) {
    console.log(e.target);
    e.target.classList.remove("hover");
  }
});

const slider = function () {
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const sliderFunctionality = function (eachSlide) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${eachSlide * 100}%)`;
    });
  };

  const nextSlide = () => {
    curSlide === maxSlide ? (curSlide = 0) : curSlide++;
    sliderFunctionality(curSlide);
  };
  const prevSlide = () => {
    curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
    sliderFunctionality(curSlide);
  };
  rightArrowBtn.addEventListener("click", nextSlide);
  leftArrowBtn.addEventListener("click", prevSlide);
};
slider();
