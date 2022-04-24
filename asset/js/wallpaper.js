const images = ["wallpaper1.jpg","wallpaper2.jpg","wallpaper3.jpg","wallpaper4.jpg","wallpaper5.jpg","wallpaper6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

wallpaper = document.querySelector("body");

wallpaper.style.background = `url(https://ryuryu10.github.io/Momentum-X/asset/images/background/${chosenImage})`;
