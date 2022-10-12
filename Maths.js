// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(let i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }

//   answer = factorial(5)
//   console.log(answer);


  function factorial(n){
      let i=1;
      while (n > 1) {
          i++;
          n /=i;
      }
      console.log (i)
  }
factorial(120)

