$(document).ready(function(self) {
  console.log(2);
  // body 를 밀고 배너 생기게 해라
  $('body').css({
    "padding-top": "160px",
  });
  $('.topbnr_wrap').css({
    top: "0",
  });
  $('.head_wrap').css({
    top: "50px"
  });
})

function bnrclose() {
  console.log(3);
  $('body').css({
    "padding-top": "110px"
  });
  $('.topbnr_wrap').css({
    "padding-top": "110px",
    display: "none"
  });
  $('.head_wrap').css({
    top: "0"
  });
}
