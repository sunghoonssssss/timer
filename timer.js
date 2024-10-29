// timer.js - 타이머 스크립트
var endDate = new Date("2024-12-31T23:59:59").getTime();

function updateTimer() {
  var now = new Date().getTime();
  var distance = endDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초 남았습니다.";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "이벤트가 종료되었습니다.";
  }
}

setInterval(updateTimer, 1000);
