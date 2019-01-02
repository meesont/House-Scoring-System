registerForm = document.getElementById('registerForm');
registerBtn = document.getElementById('registerBtn');
registerFormCancelBtn = document.getElementById('registerFormCancelBtn');

registerBtn.addEventListener('click', function () {
  registerForm.style.display = 'block';
}, false);

registerFormCancelBtn.addEventListener('click', function () {
  registerForm.style.display = 'none';
}, false);

window.onclick = function (event) {
  if (event.target == registerForm) {
    registerForm.style.display = 'none';
  }
}
