console.log('Hello! It is JS');

var questionsList = document.querySelector('.questions__list');

questionsList.addEventListener('click', function(e) {
  e.preventDefault();
  var questionsLink = e.target
  if (questionsLink.classList.value === 'questions__link') {
    console.log('er')
    var parentNode = questionsLink.parentNode;
    var questionsAnswer = parentNode.querySelector('.questions__answer');
    if (questionsAnswer.style.opacity === '0') {

      questionsLink.style.color = '#ffb100';
      questionsLink.style.borderColor = '#ffb100';
      questionsAnswer.style.left = '100%';
      questionsAnswer.style.opacity = '1';
      questionsAnswer.style.position = 'static';
    } else {
      questionsLink.style.borderColor = '#ffffff'
      questionsLink.style.color = '#ffffff'
      questionsAnswer.style.opacity = '0';
      setTimeout( function () { questionsAnswer.style.position = 'absolute' } , 250)
    }

  }
}, false);
