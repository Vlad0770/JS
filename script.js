let askNumber = function (text) {
        let result = prompt(text);

        return result;
      };

      let firstNumber = askNumber("Ведіть першу цифру");
      let secondNumber = askNumber("Ведіть другу цифру");

      

        console.log(firstNumber / secondNumber);
        console.log(Number(firstNumber) + Number(secondNumber));
        console.log(firstNumber * secondNumber);
        console.log(firstNumber - secondNumber);
    