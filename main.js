const toggler = document.getElementById('toggler');
const innerToggler = document.getElementById('innerToggler')
const price1 = document.getElementById('price1'),
  price2 = document.getElementById('price2'),
  price3 = document.getElementById('price3');



toggler.addEventListener('click', function () {
  console.log('clicked');

  if (price1.innerHTML === '$19.99') {
    price1.innerHTML = '$199.99';
    price2.innerHTML = '$249.99';
    price3.innerHTML = '$339.99';
    // Toggler
    innerToggler.style.right = '28px';
  } else {
    price1.innerHTML = '$19.99';
    price2.innerHTML = '$24.99';
    price3.innerHTML = '$39.99';
    //Togller
    innerToggler.style.right = '5px';
  }
});