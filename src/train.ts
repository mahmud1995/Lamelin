/* K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/  
function countVowels(str:string): number {
    // Katta va kichik harfdagi unli harflarga mos keladigan RegEx 
    const vowels = str.match(/[aeiouAEIOU]/g);

    return vowels ? vowels.length : 0;
    // agar vowels ni ichida unli harf bulsa, uni sonini return, bumasa 0 ni return
}
console.log(countVowels("string"));
console.log(countVowels("Hello, my name is Jony"));







/*
J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

// function findLongestWord(str:string) {
//     return str
//         .split(' ')
//         .sort((str1, str2) => str2.length - str1.length)[0];
// }
// const natija = findLongestWord("I come from Uzbekistan");
// console.log("Natija:", natija);


/*
    Traditional FD(Forntend Development) => BSSR(Burak Admin loyihasi) => EJS(framework)
    Modern FD(Frontend Development) => SPA(Single Page Application) => REACT(library)
*/ 



// function majorityElement(arr: number[]) {
//     return arr.sort((arr1) =>
//         arr.filter(ele => ele === arr1).length
//     )[arr.length - 1];
// }
// //Call
// const majelemresult = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log('RESULT:', majelemresult);





/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
// */
// function getDigits(input: string): string {
// 	// Digitlarni tenglashtirish uchun RegEx dan foydalanib, ularni single stringga birlashtiramiz
// 	return input.replace(/\D/g, '');
// }
// const birinchiDigit = getDigits("m14i1t");
// console.log(birinchiDigit);












// class Person {
// 	age: number;
// 	firstName: string;
// 	lastName:string;
// 	constructor(age:number, firstName: string,  lastName: string) {
// 		this.age = age;
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// }
// const person1 = new Person(99, "Martin", "robertson");
// console.log(person1);


// const hasError : boolean = false;
// const completed : boolean = true;

// const result = completed && hasError;
// console.log("AND '&&' operator result:",result)

// const result2 = completed || hasError;
// console.log("OR '||' operator result:", result2);

// Unions

// type MyBoolean = true | false;
// // 
// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnserTen = 1 | 3 | 5 | 7| 9;
// // Unions => xar xil type larni nazorat qilishni ta'minlaydi
// function getLength(obj: string| string[]) {
//   return obj.length;
// }
// const makhmud = getLength("Makhmud");
// console.log(makhmud);

// function wrapInArray(obj:string | string[]) {
//   if (typeof obj === "string") {
//     return [obj];
//   }
//   return obj;
// };

// const arrayString = wrapInArray("mmdfmasmfms");
// const arrayarray = wrapInArray(["mmdfmasmfms","mmdfmasmfms","mmdfmasmfms","mmdfmasmfms"]);
// console.log(arrayString)

// // // CLASS in TypeScript
// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name:string, id: number){
//       this.name = name;
//       this.id = id;
//   }
// }

// const makhmud: User = new UserAccount("Makhmud", 1919);
// console.log(`New Bank account owner: ${makhmud}`); // SuperString ichida object ishlamasakan
// console.log("New Bank account owner:",makhmud);



// /* INTERFACE DECLARATION */
// interface User {
//   name:string;
//   id:number;
// };
// let User = ["Ali", 29];
// console.log(User);


// // Defining Types - 2
// // const user = {
// //   name: "Jony",
// //   id: 29,
// // };
// // console.log("Type of name:",typeof(user.name));
// // console.log("Type of id:",typeof(user.id));
// // /* Object user1 + Object (interface) User */
// // const user : User 
  

// // Defining Types - 1
// // TypeScript - Uzining type ga qarab ishlatadi qachonki har qanaqa variable qurilsa
// // // // // ESLATMA MISOL ORQALI // // // // 

// /*
// const user = {
// 	name: string, // XATO --> string FAQAT => type lar uchun, buyerda qiymat urniga ishlatilgan
// 	id: number,	  // XATO NIMAGA? --> number FAQAT type lar uchun, qiymatlar uchun emas
// }
// */

// const obj = { width: 10, height: 2};
// console.log(`this obj has: ${obj}`);
// console.log("this obj has:",obj);
// console.log("*************************");

// const area = obj.width * obj.height
// console.log(`obj.width * obj.height = ${area}`);


// let box : string = "Jony";
// Can we assign box variable to the number?
// box = 100; // Type 'number' is not assignable to type 'string'






























/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/
// function getPositive(arr: number[]): string {
//   return arr.filter(num => num > 0).join('');
// }
// const result1 = getPositive([1,-4,2])
// console.log();

// function getPositive(arr: number[]): string {
//   let result = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i];
//     }
//   }
//   return result;
// }

// console.log(getPositive([1,-4, 2]));





/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat
 array pass bolsin va function bizga osha arrayning 
 eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
*/

// function getHighestIndex(arr: number[]) {
//     // defining new variable
//     let greatest;
//     let greatestIndex;
//     // looping through the arr parameter of function
//     for (let i = 0; i < arr.length; i++) {
//       // giving the condition if a found number is not the greatest
//       // in that case arr[i] is greater than that.
//       if (!greatest || arr[i] > greatest) {
//         greatest = arr[i];
//         // if not the greatestIndex = looped array of i
//         greatestIndex = i;
//       }
//     }
//     return greatestIndex;
//   }
//   let array = [5, 21, 12, 21, 8];
//   const result = getHighestIndex(array);
//   console.log("result:", result);