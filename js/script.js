const imageSources = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png",
  "img/11.png",
  "img/12.png",
  "img/13.png",
  "img/14.png",
  "img/15.png",
  "img/16.png",
  "img/17.png",
  "img/18.png",
  "img/19.png",
  "img/20.png",
  "img/21.png",
];

const articlesData = [
  {
    title: "Article Title 1",
    content: "Article content goes here...",
    image: "/img/3.png",
    date: "January 1, 2023",
  },
  {
    title: "Article Title 2",
    content: "Another article content...",
    image: "/img/4.png",
    date: "February 15, 2023",
  },
];

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.getElementById("imageSlider");
let index = 0;

function populateSlider() {
  slider.innerHTML = "";
  imageSources.forEach((src, i) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("gambar");

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Artwork ${i + 1}`;

    imageDiv.appendChild(img);
    slider.appendChild(imageDiv);
  });
}

populateSlider();

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = slider.children.length - 1;
  }
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  if (index < slider.children.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateSlide();
});

function updateSlide() {
  const newTransformValue = -index * 100 + "%";
  slider.style.transform = `translateX(${newTransformValue})`;
}

const articleSection = document.getElementById("articleData");

articlesData.forEach((article) => {
  const articleElement = document.createElement("div");
  articleElement.classList.add("article");

  const articleImage = document.createElement("img");
  articleImage.src = article.image;
  articleImage.alt = "Article Image";

  const articleContent = document.createElement("div");
  articleContent.classList.add("article-content");

  const articleTitle = document.createElement("h3");
  articleTitle.textContent = article.title;

  const articleParagraph = document.createElement("p");
  articleParagraph.textContent = article.content;

  const publishDate = document.createElement("small");
  publishDate.classList.add("publish-date");
  publishDate.textContent = `Published on ${article.date}`;

  articleContent.appendChild(articleTitle);
  articleContent.appendChild(articleParagraph);
  articleContent.appendChild(publishDate);

  articleElement.appendChild(articleImage);
  articleElement.appendChild(articleContent);

  articleSection.appendChild(articleElement);
});

let slideInterval;

function startSlideInterval() {
  slideInterval = setInterval(() => {
    if (index < slider.children.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateSlide();
  }, 3000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

const sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("mouseover", stopSlideInterval);
sliderContainer.addEventListener("mouseout", startSlideInterval);

document.addEventListener("DOMContentLoaded", () => {
  startSlideInterval();
});
