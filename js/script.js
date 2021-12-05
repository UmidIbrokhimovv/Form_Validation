  let form = document.querySelector('#form'),
      emailInp = document.querySelector('#email-input'),
      passwordInp = document.querySelector('#password-input');

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    
    if (emailInp.value.length == 0) {
      alert('Please check the email')
    } else if (passwordInp.value.length <= 6) {
      alert('Password cannot be 6 caracters')
    } else if (passwordInp.value.length >= 20) {
      alert('Password raqamlari soni 20ta dan oshmasligi kerak!')
    }else {
      emailInp.value = "";
      passwordInp.value = "";
    }
  })