const btn = document.querySelector('.header_profile');

btn.addEventListener('click', function (e) {
  var link = 'login.html';
  location.href = link;
  console.log(100);
  console.log(this); // <button id="btn">Button</button>
  console.log(e.currentTarget); // <button id="btn">Button</button>
  console.log(this === e.currentTarget); // true
});
