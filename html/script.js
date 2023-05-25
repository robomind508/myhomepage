const pattern = document.getElementById("pattern");

let r = 255;
let g = 255;
let b = 255;

// 마우스 이벤트 감지
document.addEventListener("mousemove", function(event) {
  // 마우스 좌표
  const x = event.clientX;
  const y = event.clientY;

  // 패턴 변경
  pattern.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(${r}, ${g}, ${b}, 0.5), rgba(0, 0, 0, 0.5))`;
});

document.addEventListener("click", function() {
    r = Math.floor(Math.random() * 256); // 0부터 255 사이의 랜덤한 정수
    g = Math.floor(Math.random() * 256); // 0부터 255 사이의 랜덤한 정수
    b = Math.floor(Math.random() * 256); // 0부터 255 사이의 랜덤한 정수
});
  
