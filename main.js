document.addEventListener("DOMContentLoaded", function () {
  var index = 1;
  changeImg = function () {
    var imgs = ["./img/Bannercuoi.png", "./img/banner111.png"];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index == imgs.length) {
      index = 0;
    }
  };
  setInterval(changeImg, 3000);
});
