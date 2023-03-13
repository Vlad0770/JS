let firstNumber;
      let secondNumber;

      firstNumber = prompt('Ведіть першу цифру');
      secondNumber = prompt('Ведіть другу цифру');

      if (firstNumber && secondNumber) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);


        let isFirstNumberLessThanSecondNumber = firstNumber < secondNumber;

        if (isFirstNumberLessThanSecondNumber) {
          let userAnswer = confirm('Ви впевнені?');

          if (userAnswer === true) {
            alert(firstNumber - secondNumber);
          }
        } else {
            alert(firstNumber - secondNumber);
        }

        let isSecondNumberZero = secondNumber === 0;

        if (isSecondNumberZero) {
            alert('Ділення не виконано, друге число є 0');
        } else {
            alert(firstNumber / secondNumber);
        }

        alert(firstNumber + secondNumber);

        alert(firstNumber * secondNumber);
      } else {
        alert('Користувач відмовився вводити цифри');
      }

