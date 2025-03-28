/*
ZU-TASK:

Shunday function yozing, uni 2 ta parametri bo'lsin, biri array va biri string. Function arrayda berilgan malumotlarni 2-parametrdagi string qiymati asosida guruhlab qaytarsin.
MASALAN:
const data = [
  { name: 'Alice', age: 25, city: 'London' },
  { name: 'Bob',   age: 30, city: 'New York' },
  { name: 'Charlie', age: 25, city: 'London' },
];
console.log(groupBy(data, 'city')); // { 'London': [ { name: 'Alice', age: 25, city: 'London' }, { name: 'Charlie', age: 25, city: 'London' } ], 'New York': [ { name: 'Bob', age: 30, city: 'New York' } ] }
*/

// interface T  {
//     [key: string]: any;
// }

// function groupBy(array: T[], key: keyof T) {
//     const result: T = {};
//     for (const item of array) {
//       const groupKey = String(item[key]);
//       if (!result[groupKey]) {
//         result[groupKey] = [];
//       }
//       result[groupKey].push(item);
//     }
//     return result;
//   }

//   const data = [
//     { name: 'Alice', age: 25, city: 'London' },
//     { name: 'Bob', age: 30, city: 'New York' },
//     { name: 'Charlie', age: 25, city: 'London' },
//   ];
//   const natijaZU = groupBy(data, "city");

//   console.log(natijaZU);

/*
    ZT-TASK
    Shunday function yozing, u parametridagi array ichidagi barcha nollarni array oxiriga qoyib qolgan raqamlar ketma-ketligini saqlasin.
    MASALAN: moveZeroes([0, 1, 0, 3, 12]) return [1, 3, 12, 0, 0] 

*/
// function moveZeroes(nums: number[]): number[] {
//     const nonZeroes = nums.filter(num => num !== 0);
//     const zeroes = nums.filter(num => num === 0);
//     return [...nonZeroes, ...zeroes];
// }

// const natija = moveZeroes([0, 1, 0, 3, 12]);
// console.log(natija);

/*
ZR-Task
Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0
*/
// function firstUniqueCharIndex(str: string): number {
//     const charCount = str.split('').reduce<Record<string, number>>((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});

//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return i;
//         }
//     }

//     return -1;
// }
// const natija = firstUniqueCharIndex("stamp")
// console.log(natija);
// ==============================================================================

/*
ZS-TASK:

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
MASALAN: sumOfUnique([1,2,3,2]) return 4
*/

// ===============================================================================
/**
 ZR-TASK:

Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0

*/
// function firstUniqueCharIndex(str: string): number {
//     const charCount = str.split('').reduce<Record<string, number>>((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});

//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return i;
//         }
//     }

//     return -1;
// }
// const natija = firstUniqueCharIndex("stamp");
// console.log(natija);

// ===============================================================================

/*
    ZP-TASK
*/
// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicatesForLoop(arr: number[]): number[] {
//     const count: Record<number, number> = {};
//     const result: number[] = [];

//     for (const num of arr) {
//         count[num] = (count[num] || 0) + 1;
//     }

//     for (const key in count) {
//         if (count[key] > 1) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }
// const natija1 = findDuplicatesForLoop([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(natija1);

/*
ZO-TASK:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

*/

// function countNumberAndLetters(input: string): { number: number; letter: number } {
//     const numbers = input.match(/[0-9]/g)?.length || 0;
//     const letters = input.match(/[a-zA-Z]/g)?.length || 0;

//     return { number: numbers, letter: letters };
// }
// console.log(countNumberAndLetters("string152%¥"));

// ZN-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(input: string) {
//     let openCount = 0;
//     let closeCount = 0;
//     for (const char of input) {
//         if (char === '(') openCount++;
//         if (char === ')') closeCount++;
//     }
//     return openCount === closeCount;
//   }
//   // Call
//   const result = areParenthesesBalanced("string()ichida(qavslar)soni()balansda");
//   console.log('result: =>', result);

// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: number[], index: number) {
//   const rotate = index % arr.length;
//   return [...arr.slice(1 - rotate), ...arr.slice(0, rotate + 1)];
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string) {
//   return str.toLowerCase().split(' ').join('-');
// }
// // Call
// const natija = stringToKebab('I love Kebab');
// console.log('natija:', natija);

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();

// function printNumbers() {
//     let count = 1;
//     const intervalId = setInterval(() => {
//       console.log(count);
//       if (count === 5) {
//         clearInterval(intervalId);
//       }
//       count++;
//     }, 1000);
//   }
//   // Call
//   const natija = printNumbers();
//   console.log("Boshla:",natija);

// // ZI-TASK:

// function delayHelloWorld(str: string){
//     setTimeout(() => {
//         console.log(str);
//     }, 3000);
//  }
// // Call
// const natija = delayHelloWorld("Hello World!");
// console.log("natija:", natija);

// ZH - TASK
// function findDisappearedNumbers(arr: number[]): number[] {

//     const maxNum = Math.max(...arr);

//     const allNumbers = Array.from({ length: maxNum }, (_, i) => i + 1);

//     const missingNumbers = allNumbers.filter(num => !arr.includes(num));

//     return missingNumbers;
//   }

// const natija = findDisappearedNumbers([1,3,4,7]);
// console.log("natija:", natija); // Output: [2, 5, 6]

/*
TASK ZG
String sifatida berilgan string parametrni
snake case'ga o'tkazib beradigan function yozing.
MASALAN: convertToSnakeCase('name should be a string')
return 'name_should_be_a_string'

*/
// const convertToSnakeCase = (str: string) => {
//     return str.split(" ").join("_");
// }
// const natija = convertToSnakeCase('name should be a string');
// console.log("TASK-ZG: =>", natija);

// TASK ZE
// function removeDuplicate(str: string): string {

//     const uniqueChars = new Set<string>();
//     for (const char of str) {
//         uniqueChars.add(char); // Add each character to the Set
//     }
//     return Array.from(uniqueChars).join('');
// }

// // Example usage
// const natija1 = removeDuplicate("stringg")
// console.log("stringg==> ",natija1); // Output: 'string'

/*
TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.
*/

// function changeNumberInArray(num1: number, arr: number[], num2: number) {
//     arr.forEach((value, index) => {
//         if (index === num1) {
//             arr[index] = num2;
//         }
//     });
//     return arr;
// }
// // Call
// const natijamiz = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log('TASK-ZD:', natijamiz);

/*  TASK ZC

    Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
    Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.
    MASALAN: celsiusToFahrenheit(0) return 32;
    MASALAN: celsiusToFahrenheit(10) return 50;
    Yuqoridagi misolda, 0°C, 32°F'ga teng.
    Yoki 10 gradus Selsiy, 50 Farenhaytga teng.
    °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
*/
// function celsiusToFahrenheit1(celsius: number): number {
//     return (celsius * 9) / 5 + 32;
// }
// // Call
// const natija = celsiusToFahrenheit1(0);
// console.log("ZC-TASK: =>", natija);

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45
// function randomBetween(min: number, max: number): number {
//     return (Math.random() * (max - min + 1) + min) | 0;
// }
// // Call
// const result = randomBetween(30, 50);
// console.log('ZB-TASK: =>', result);

// ZA TASK

// type Person = { age: number };

// function sortByAge(arr: Person[]): Person[] {
//     return arr.slice().sort((a, b) => a.age - b.age); // Create a copy before sorting
// }

// const people = [{ age: 23 }, { age: 21 }, { age: 13 }];
// const sortedPeople = sortByAge(people);

// console.log("people:",people);        // Output: [{ age: 23 }, { age: 21 }, { age: 13 }]
// console.log("sortedPeople  ",sortedPeople);  // Output: [{ age: 13 }, { age: 21 }, { age: 23 }]

/*
// Z-TASK:
//
// Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2
*/
// function sumEvents(arr: number[]) {
//     // Buyerda bizni arrayimizni ichida tashkil topkan sonlardan
//     // juft sonlarni yigindisini saqlaymiz
//     let doubleNum = 0;
//     // for loop orqalik arr.length loop qilib i mizni sonini tenlab olamiz
//     for (let i = 0; i < arr.length; i++) {
//         // i 3ga teng va uni foiz orqalik juft sonini doubleNum ga saqlab, qaytaryapmiz.
//         if (arr[i] % 2 === 0) {
//             doubleNum += arr[i];
//         }
//     }
//     return doubleNum;
// }
// const result22 = sumEvents([1, 2, 3]);
// console.log("result: =>", result22);

/*
Y-TASK:
    Shunday function yozing, uni 2 ta array parapetri bolsin. 
    Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
    findIntersection([1,2,3], [3,2,0]) return [2,3]
*/
// function findIntersection2(arr1: number[], arr2: number[]) {
//     return arr1.filter(value => arr2.includes(value));
// }
// // Call
// const natijabek = findIntersection2([1, 2, 3], [3, 2, 0]);
// console.log('result: =>', natijabek);

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: any, str: string) {
//   let count = 0;

//   for (let key in obj) {
//       if (key === str) count++;
//       if(typeof obj[key] === 'object' && obj[key] !== null) {
//           count += countOccurrences(obj[key], str)
//       }
//   }
//   return count
// }

// const result = countOccurrences(
//   {
//       model: 'Bugatti',
//       steer: {
//           model: 'HANKOOK', size: 30,
//       },
//   },
//        'model'
// );
// console.log('TASK-X: =>', result);

/*W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
*/

// function chunkArr(arr: number[], numSize: number) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i += numSize) {
//     newArr.push(arr.slice(i, i + numSize));
//   }
//   return newArr;
// }

// const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const natija999 = chunkArr(arrays, 3);

// console.log('W-TASK: =>', natija999);

/*
V-TASK:
Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/

// function countChars(str: string): Record<string, number> {
//     const result: Record<string, number> = {};

//     str.split('').forEach(char => {
//       result[char] = (result[char] || 0) + 1;
//     });

//     return result;
//   }

// const natija88 = countChars("hello");
// console.log('V-TASK:', natija88);

/// function missingNumber(num: number[]) {
//     let arrNums = num.length * (num.length + 1) / 2;

//     let allNums = num.reduce((ele, nums) => ele + nums, 0);

//     return arrNums - allNums;
// }

// // Call
// const natija10 = missingNumber([3, 0, 1]);
// console.log('s-task:', natija10);

/*
U-TASK:

Shunday function yozing, uni number parametri bolsin 
va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

*/
// function sumOdds(input:number) {
//     let count = 0;
//     for (let i = 1; i < input; i += 2) {
//         count++;
//     }
//     return count
// }

// const natija = sumOdds(5)
// const natija2 = sumOdds(9)
// const natija3 = sumOdds(11)
// console.log("return:",natija)
// console.log("return:",natija2)
// console.log("return:",natija3)

console.log("<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");
/* Project Standards:
    -Logging Standards
    -Naming Standards
    function, method, variable => camalCase
    class => PascalCase
    folder => KEBAB-CASE
    css => sake_case
*/

/* Request:
    Traditional Api
    Rest Api
    Graphql Api
    ...
*/

/* FrontEnd Development:
    Traditional FrontEnd Development => BSSR (Admin) => EJS
    Modern FrontEnd Development => SPA (Users) => REACT
*/

/* Cookies:
  request + join qiladi.
  Self Destroy => O'zini o'zi yo'q qolish hususiyatiga ega.
*/

/** Validation:
    FrontEnd validation,
    BackEnd validation,
    Database validation.
*/
console.log("<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
//
// function mergeSortedArrays(num: number[], setNum: number[]) {
//     const sortNum = [...num, ...setNum].sort((a, b) => a - b);

//     return sortNum;

// }
// // Call
// const natija90 = mergeSortedArrays([0,3,4,31], [4,6,30]);
// console.log('result:', natija90);

/*
R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
*/
// console.log("<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>");

// function calculte(str:string) {
//     let sum = 0;
//     for(let i = 0; i < str.length; i++) { // function == string qabul qiladi
//         if(!isNaN(parseInt(str[i]))) {    // Check qilamiz agar Not NaN == false ==> true --> Integerga parse qil
//             let num = parseInt(str[i]);   //
//             sum += num                    // Add integer values
//         }
//         // let num = parseInt(str[i]);
//         // sum += num
//     }
//     return sum;
// }
// function calculte(str:string) {
//     let sum = 0;
//     for(let i = 0; i < str.length; i++) { // function == string qabul qiladi
//         if(!isNaN(parseInt(str[i]))) {    // Check qilamiz agar Not NaN == false ==> true --> Integerga parse qil
//             let num = parseInt(str[i]);   //
//             sum += num                    // Add integer values
//         }
//         // let num = parseInt(str[i]);
//         // sum += num
//     }
//     return sum;
// }

// const natija = calculte("1+3");
// console.log(natija)
// const natija = calculte("1+3");
// console.log(natija)

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: {[key: string]: any}) {
//     return Object.entries(obj);
// };

// const natija99 = objectToArray({ a: 10, b: 20 });
// console.log('p-task:', natija99);

/* O-task
Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/

// function calculateSumOfNumbers(values: any[]) {
//     return values.reduce((sum, value) => {
//         if (typeof value === 'number') {
//             return sum + value;
//         }
//         return sum;
//     }, 0
// );
// };

// // tekshirish
// const natija = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log("Natija:",natija);

// N-TASK
// Define

// function palindromCheck(str: string) {

//     const newPalindrom = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
//     const newReverse = newPalindrom.split('').reverse().join('');
//     return newReverse === newPalindrom;
// }
// // Call
// const natija = palindromCheck("son");
// console.log('N-TASK:', natija);

// M-TASK
// Define
// function getSquareNumbers(arr: number[]) {
//     return arr.map(ele => ({
//         number: ele,
//         square: ele * ele
//     }));
// }
// // Call
// const natija1 = getSquareNumbers([1, 2, 3]);
// console.log('M-TASK:', natija1);
// const natija2 = getSquareNumbers([89, 90, 91]);
// console.log('M-TASK:', natija2);

/**
 L-TASK: 

Shunday function yozing, u string qabul qilsin
va string ichidagi hamma sozlarni chappasiga yozib
va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

 */
// function reverseSentence(str: string) {
//     return str.split('').reverse().join('');
// }

// const teskarinatija = reverseSentence("we like conding!")
// console.log("we like coding! <=>",teskarinatija);

/* K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/
// function countVowels(str:string): number {
//     // Katta va kichik harfdagi unli harflarga mos keladigan RegEx
//     const vowels = str.match(/[aeiouAEIOU]/g);

//     return vowels ? vowels.length : 0;
//     // agar vowels ni ichida unli harf bulsa, uni sonini return, bumasa 0 ni return
// }
// console.log(countVowels("string"));
// console.log(countVowels("Hello, my name is Jony"));

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

/*
PM2 COMMANDS: 

pm2 ls
pm2 start dist/server.js --name=LAMELIN

pm2 start "npm run start:dev" --name=LAMELIN
pm2 stop id ==> id dgani project index raqami(pm2 start -> qayta active qlish)
pm2 delete id  ==> first stop and delete project
pm2 restart id ==> when run this command check table by running ==> pm2 ls
pm2 monit ==> monitoring 

*/
