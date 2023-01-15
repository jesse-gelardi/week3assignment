
console.log('Hello!');

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

        //1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
            //▪ Do not use numbers to reference the last element, find it programmatically, 
          // ▪ ages[7] – ages[0] is not allowed!
          //console.log(agesArray);
          console.log(ages[ages.length - 1] - ages[0]);
          
        //1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

      ages.push(25);
      console.log(ages);
      console.log(ages[ages.length - 1] - ages[0]);

        //1c. Use a loop to iterate through the array and calculate the average age. 

        let total = 0
        for(var i = 0; i < ages.length; i++) {
            total += ages[i];
        }
        let average = total/ages.length;
        console.log(average);

    //2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

    var names = ['Sam' , 'Tommy' , 'Tim' , 'Sally' , 'Buck' , 'Bob']
    console.log(names);

        //2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

        var letterLength = 0

        for(var i = 0; i < names.length; i++){
            letterLength += names[i].length;
        }
        var namesAverage = letterLength/names.length;
        console.log(namesAverage);

        //2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
        let result = ' ';
        for(var i = 0; i < names.length; i++) {
            result = result.concat(names[i] + ' ');
        }

    //3. How do you access the last element of any array?
        //Since elements are accessed using an index (the first one being "0"), the last element can be found by using an negative index. 
              //For an example, this should print out "Bob" to the console:
               console.log(names[names.length -1]);

    //4. How do you access the first element of any array?
        //Since an index begins with "0" in Javascript, you can access the first element by referencing this value.
            //For example:
            console.log(names[0]);

    //5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
      let nameLengths = [];
      for (var i = 0; i < names.lengths; i++) {
          nameLengths[i] = names[i].length;
      }

    //6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
      sum = 0;
      for (var i = 0; i < nameLengths.length; i++) {
        sum = sum + nameLengths[i];
      }
      console.log(sum);

    //7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
      function repeat(word, n) {
          var repeatWord = ' ';
          for (i = 1; i <= n; i++) {
            repeatWord = repeatWord + word;
            } 
            return(repeatWord)
          }
          console.log(repeat('Hello!', 3));

    //8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
            //▪ The full name should be the first and the last name separated by a space.
    function fullName(firstName, lastName) {
        return firstName.concat(' ', lastName);
    }
    console.log('Jesse' + ' ' + 'Gelardi')

    //9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    function isGreaterThan100 (array) {
      sum = 0;
      for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }
      if (sum > 100) {
        return true;
      }
      else {
        return false;
      }
    }
    console.log(isGreaterThan100(ages));

    //10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
    function averageOf (array) {
      sum = 0;
      for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }
      return(sum / array.length);
    }
    console.log(averageOf(ages));

    //11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    function findAverage (arrayOne, arrayTwo) {
       var totalOne = 0; 
      for (var i = 0; i < arrayOne.length; i++) {
        totalOne += arrayOne[i];
      }
      var totalTwo = 0;
      for (var i = 0; i < arrayTwo.length; i++) {
          totalTwo += arrayTwo[i];
      }
      var averageOne = totalOne / arrayOne.length;
      var averageTwo = totalTwo / arrayTwo.length;
      if (averageOne > averageTwo) {
        return true;
      } 
      else {
        return false;
      }
    }

    //12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
   
    let IsHotOutside = true;
    let moneyInPocket = 0;

    function willBuyDrink (isHotOutside, moneyInPocket) {
      if (IsHotOutside === true && moneyInPocket > 10.50) {
        console.log('You should probably buy a drink!');
      } else {
        console.log('You should not buy a drink.');
      }}

    //13. Create a function of your own that solves a problem. 
            //▪ In comments, write what the function does and why you created it.
var rollD6 = Math.floor(
  Math.random() * 6 ) +1;
    console.log('You rolled a ' + rollD6);
      if (rollD6 >= 4) {
          console.log('Your roll is a success!')
    } if (rollD6 < 4) {
          console.log('Your roll is a failure.')}
  