const $txt = document.querySelector(".txt");
const content = "이름 : 김세진\n학부 : 정보융합학부\n학번 : 2020204081\n키-체중 : 175cm-74kg\n \n안녕하세요 반갑습니다^^";
let contentIndex = 0;

let typing = function () {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
      $txt.innerHTML += "<br />";
      contentIndex++;
    }
    if (contentIndex > content.length) {
      $txt.textContent = "";
      contentIndex = 0;
    }
    if (contentIndex >= content.length) { // 조건 수정
        clearInterval(intervalId); // setInterval 중지
    }
  };
  
  // 0.2초간격으로 typing 함수 실행
  intervalId = setInterval(typing, 100);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

