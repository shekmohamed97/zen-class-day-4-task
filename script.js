//1.Do the below programs in anonymous function & IIFE and arrow function:

//  1.Print odd numbers in an array:

//annonymous function:
const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const printOddNumbers2 = function(arr){
  for (let i=0;i<arr.length;i++){
    if(arr[i]%2 !==0){
      console.log(arr[i]);
    }
  }
}
printOddNumbers2(numbers1);
//IIFE:
const numbers2 = [1,2,3,4,5,6,7,8,9,10];
 (function (arr){
  for (let i=0;i<arr.length;i++){
    if(arr[i]%2 !==0){
      console.log(arr[i]);
    }
  }
})(numbers2);

//arrow function:
const numbers3 = [1,2,3,4,5,6,7,8,9,10];
 ((arr)=>{
  for (let i=0;i<arr.length;i++){
    if (arr[i]%2 !==0){
      console.log(arr[i]);
    }
  }
})(numbers3);



//2.Convert all the strings to title caps in a string array:

//annoymus function:

const stringArray=["hello","world","javascript","example"];
const convertToTitlecase=function(arr){
  const titleCaseArray=arr.map(function(word){
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  });
  return titleCaseArray;
};
 const result2=convertToTitlecase(stringArray);
 console.log(result2);  

 //IFEE:

const stringArray2=["hello","world","javascript","example"];
(function(arr){
  const titleCaseArray=arr.map(function(word){
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  });
  console.log(titleCaseArray);
})(stringArray2);

//arrow function:

const stringArray3=["hello","world","javascript","example"];
((arr)=>{
  const titleCaseArray=arr.map(function(word){
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  });
  console.log(titleCaseArray);
})(stringArray3);

//3.Sum of all numbers in an array:

//annonymus function:

const numbers=[1,2,3,4,5];
const calculateSum=function(arr){
  let sum=0;
  for (let i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
};

const result3=calculateSum(numbers);
console.log(result3);


//IFEE FUNCTION:

const numbers4=[1,2,3,4,5];
(function(arr){
  let sum=0;
  for (let i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  console.log(sum);

})(numbers4);

//arrow function:
const numbers5=[1,2,3,4,5];
((arr)=>{
  let sum=0;
  for (let i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  console.log(sum);

})(numbers5);

//4.Return all the prime numbers in an array:

//annonymus function:

const numbers6=[2,3,4,5,6,7,8,9,10];
const findPrimes=function(arr){
const isPrime=function(num){
  if (num<=1)return false;
  for (let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
};
return arr.filter((num)=>isPrime(num));
};
const result5=findPrimes(numbers6);
console.log(result5);

//IFEE function:

const numbers7=[2,3,4,5,6,7,8,9,10];
(function(arr){
const isPrime=function(num){
  if (num<=1)return false;
  for (let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
};

const result5=arr.filter((num)=>isPrime(num));
console.log(result5);
})(numbers7);

//arrow function:

const numbers8=[2,3,4,5,6,7,8,9,10];
((arr)=>{
const isPrime=function(num){
  if (num<=1)return false;
  for (let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
};

const result5=arr.filter((num)=>isPrime(num));
console.log(result5);
})(numbers7);


//5.Return all thealindromes in an array:

//annonymus function:

const strings=["level","hello","madam","world","racecar"];
const findPalindromes=function(arr){
  const isPalindrome=function(str){
    const reversed=str.split("").reverse().join("");
    return str===reversed;
  };
  return arr.filter((word)=>isPalindrome(word));
};
const result=findPalindromes(strings);
console.log(result);

//IIFE FUNCTION:

const strings2=["level","hello","madam","world","racecar"];
(function(arr){
  const isPalindrome=function(str){
    const reversed=str.split("").reverse().join("");
    return str===reversed;
  };
  const Palindromes=arr.filter((word)=>isPalindrome(word));
  console.log(Palindromes);
})(strings2);

//arrow function:


const strings3=["level","hello","madam","world","racecar"];
((arr)=>{
  const isPalindrome=function(str){
    const reversed=str.split("").reverse().join("");
    return str===reversed;
  };
  const Palindromes=arr.filter((word)=>isPalindrome(word));
  console.log(Palindromes);
})(strings3);

//6.Return median of two sorted arrays of the same size.

//annonymus function:

const arr3=[1,3,5];
const arr4=[2,4,6];

const findMedian=function(arr3,arr4){
  const mergedArray=arr3.concat(arr4).sort((a,b)=>a-b);
  const length=mergedArray.length;
  const mid = Math.floor(length/2);

  if (length%2===0){
    return (mergedArray[mid - 1]+mergedArray[mid])/2;
  }else{
    return mergedArray[mid];
  }
};
const result6=findMedian(arr3,arr4);
console.log(result6);

// IIFE function:

const arr5=[1,3,5];
const arr6=[2,4,6];

(function(arr5,arr6){
  const mergedArray=arr5.concat(arr6).sort((a,b)=>a-b);
  const length=mergedArray.length;
  const mid = Math.floor(length/2);

  if (length%2===0){
    console.log((mergedArray[mid-1]+mergedArray [mid])/2);
  }else{
    console.log (mergedArray[mid]);
  }
})(arr5,arr6);

//arrow function:


const arr7=[1,3,5];
const arr8=[2,4,6];

((arr7,arr8)=>{
  const mergedArray=arr7.concat(arr8).sort((a,b)=>a-b);
  const length=mergedArray.length;
  const mid = Math.floor(length/2);

  if (length%2===0){
    console.log((mergedArray[mid-1]+mergedArray [mid])/2);
  }else{
    console.log (mergedArray[mid]);
  }
})(arr7,arr8);

//7.Remove duplicates from an array:

// annonymus function:

const arrayWithDuplicates=[1,2,2,3,4,4,5,6,6];
const removeDuplicates= function (arr9){
  return arr9.filter((value, index) => arr9.indexOf(value) === index);
};
const result4=removeDuplicates(arrayWithDuplicates);
console.log(result4);

// IIFE function:

const arrayWithDuplicates2=[1,2,2,3,4,4,5,6,6];
(function (arr10){
  const uniqueArray=arr10.filter((value,index)=>arr10.indexOf(value)===index);
   console.log(uniqueArray);
})(arrayWithDuplicates2);

// arrow function:

const arrayWithDuplicates3=[1,2,2,3,4,4,5,6,6];
( (arr10)=>{
  const uniqueArray=arr10.filter((value,index)=>arr10.indexOf(value)===index);
   console.log(uniqueArray);
})(arrayWithDuplicates3);

// 8.Rotate an array by k times:

// annonymus function:

const array2=[1,2,3,4,5];
const k=3;

const rotateArray=function(arr11,k){
  const rotations= k % arr11.length;
  const rotateArray=[...arr11.slice(rotations),...arr11.slice(0,rotations)];
  return rotateArray;
};
const result7=rotateArray(array2,k);
console.log(result7);

// IIFE function:

const array3=[1,2,3,4,5];
const k1=3;

(function(arr12,k1){
  const rotations= k1 % arr12.length;
  const rotateArray=[...arr12.slice(rotations),...arr12.slice(0,rotations)];
  console.log(rotateArray);
})(array3,k1);

// arrow function:

const array4=[1,2,3,4,5];
const k2=3;

((arr13,k2)=>{
  const rotations= k2 % arr13.length;
  const rotateArray=[...arr13.slice(rotations),...arr13.slice(0,rotations)];
  console.log(rotateArray);
})(array4,k2);
