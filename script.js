let askNumber = function (text) {
        let result = prompt(text);

        return result;
      };

      let firstNumber = askNumber("Ведіть першу цифру");
      let secondNumber = askNumber("Ведіть другу цифру");

      const isNotEmpty = function (number) {
        let result = Boolean(number);

        return result;
      };

      const isFirstNumberNotEmpty = isNotEmpty(firstNumber);
      const isSecondNumberNotEmpty = isNotEmpty(secondNumber);

      function showMessage(a) {
        console.log(a);
      }

      if (isFirstNumberNotEmpty && isSecondNumberNotEmpty) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        function checkIsFirstNumberLessThanSecondNumber(a, b) {
          return a < b;
        }

        let isFirstNumberLessThanSecondNumber =
          checkIsFirstNumberLessThanSecondNumber(firstNumber, secondNumber);

        if (isFirstNumberLessThanSecondNumber) {
          let userAnswer = confirm("Ви впевнені?");

          const checkIsNumber = function (a) {
            const isNumber = typeof a === "number";

            return isNumber;
          };

          let minus = function (a, b) {
            const isANumber = checkIsNumber(a);
            const isBNumber = checkIsNumber(b);

            if (isANumber && isBNumber) {
              return a - b;
            } else {
              showMessage("One of the numbers is not a number");
            }
          };

          if (userAnswer === true) {
            const firstNumberMinusSecond = minus(firstNumber, secondNumber);
            showMessage(firstNumberMinusSecond);
          }
        } else {
          const firstNumberMinusSecond = minus(firstNumber, secondNumber);

          showMessage(firstNumberMinusSecond);
        };

        const checkIsNumberEqualsToZero = function (a) {
          return a === 0;
        };

        let isSecondNumberZero = checkIsNumberEqualsToZero(secondNumber);

        if (isSecondNumberZero) {
          showMessage("Ділення не виконано, друге число є 0");
        } else {
          showMessage(firstNumber / secondNumber);
        }
        
        showMessage(firstNumber + secondNumber);
        showMessage(firstNumber * secondNumber);
      } else {
        showMessage("Користувач відмовився вводити цифри");
      };