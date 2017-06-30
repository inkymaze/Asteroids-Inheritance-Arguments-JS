// function sum() {
//   let arr = Array.prototype.slice.call(arguments);
//   let result = 0;
//   arr.forEach(function(num){
//     result += num;
//   });
//   return result;
// }
//
//
//
// function sumRest(...nums) {
//   let result = 0;
//   nums.forEach(function(num) {
//     result += num;
//   });
//   return result;
// }
// //
// // console.log(sumRest(1, 2, 3, 4));
// // console.log(sumRest(1, 2, 3, 4, 5));
//
//arguments myBind
Function.prototype.myBind = function () {
  let fun = this;
  let ctx = arguments[0];
  let args = Array.prototype.slice.call(arguments);
  let sliced = args.slice(1);
    return function () {
      let args2 = Array.prototype.slice.call(arguments);
      return fun.apply(ctx, sliced.concat(args2));
    };
};

// rest myBind
Function.prototype.myBind = function (...args) {
  let ctx = args[0];
  let sliced = args.slice(1);
    return (...callArgs) => {
      return this.apply(ctx, sliced.concat(callArgs));
    };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// // markov.says("meow", "Ned");
// // // Markov says meow to Ned!
// // // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    console.log(numbers);
    if (numbers.length === numArgs) {
      let result = 0;
      numbers.forEach( function (n) {
        result += n;
      });
      return result;
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const otherSum = curriedSum(4);
// console.log(otherSum(5));
// console.log(otherSum(30));
// console.log(otherSum(20));
// console.log(otherSum(1));
// 
// Function.prototype.curry = function (numArgs) {
//   let numbers = [];
//   let that = this;
//   function _curried() {
//     let newArr = Array.prototype.slice.call(arguments);
//     newArr.forEach(function (n) {
//       numbers.push(n);
//     });
//     // console.log(numbers);
//     if (numbers.length === numArgs) {
//       return that.apply(null, numbers);
//     }else {
//       return _curried;
//     }
//   }
//   return _curried;
// };

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  const _curried = (...args) => {
    args.forEach(function (n) {
      numbers.push(n);
    });
    // console.log(numbers);
    if (numbers.length === numArgs) {
      return this.apply(null, numbers);
    }else {
      return _curried;
    }
  };
  return _curried;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
let f1 = sumThree.curry(3);
console.log(f1 = f1(4));
console.log(f1 = f1(20));
console.log(f1 = f1(6));
