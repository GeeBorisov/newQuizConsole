(function () {
  function Question(question, answers, correct) {
    (this.question = question), (this.answers = answers), (this.correct = correct);
  }

  Question.prototype.displayQuestion = function () {
    console.log('%c' + this.question, "background: #424242; color: #fafafa");
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + '. ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (answer, callback) {
    let innerScore;
    if (answer === this.correct) {
      console.log('%c Правильный ответ', 'background: #66bb6a; color: #fafafa');
      innerScore = callback(true)
    } else {
      console.log('%c Неверный ответ. Попробуйте еще раз.', 'background: #ef5350; color: #fafafa');
      innerScore = callback(false)
    }
    this.displayScore(innerScore);
  };

  Question.prototype.displayScore = function(score) {
    console.log('%c Ваш счет равен: ' + score , 'background: #fb8c00; color: #fafafa')
  }

  const q1 = new Question(
    'Какой язык программирования используется для веб-разработки?',
    ['Java', 'JavaScript', 'Phyton', 'C#'],
    1,
  );
  const q2 = new Question(
    'Что означает сокращение HTML?',
    [
      'Hero Tutorial Multi Level',
      'Hyper Text Markup Language',
      'High Task Mirage Language',
      'HTML не имеет расшифровки. Это военная разработка.',
    ],
    1,
  );
  const q3 = new Question(
    'На HTML можно создавать:',
    [
      'Мобильные приложения',
      'Программы для Linux',
      'Программы для Windows',
      'Сайты для всех браузеров и платформ',
    ],
    3,
  );

  const questions = [q1, q2, q3];

  function score () {
    let scoreValue = 0;
    return function (correct) {
        if (correct) {
            scoreValue++
        }
        return scoreValue
    }
  }

  let keepScore = score();

  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = prompt('Введите номер верного ответа: ');

    questions[n].checkAnswer(parseInt(answer), keepScore);

    if (answer !== 'exit' && answer !== null) {
        nextQuestion();
    }

  }

  nextQuestion();
})();
