// দুটি সংখ্যার মান অদলবদল (Swap) করুন (তৃতীয় ভেরিয়েবল ব্যবহার করে এবং ব্যবহার না করে)
// let a=10;
// let b=20;
// let c;

// c=a;
// a=b;
// b=c;

// console.log("a ",a,"b ",b);

// [a,b]=[b,a]

// console.log(a,b)

// ।একটি বছর (Year) ইনপুট নিয়ে সেটি লিপ ইয়ার (Leap Year) কি না তা বের 

// let inputYear=prompt("Enter a year :");

// inputYear=Number(inputYear)

// if((inputYear%4==0 && inputYear%100 !=0) || (inputYear%400==0)){
// alert("Leap Year");
// }
// else{
//     alert("Not a leap Year")
// }


// একটি সংখ্যা পজিটিভ, নেগেটিভ নাকি শূন্য (Zero) তা কন্ডিশন দিয়ে চেক করুন।

// let inputNumber=prompt("Enter a Number:");
// inputNumber=Number(inputNumber);

// if(inputNumber === 0){
//     alert("Zero");
// }
// else if(inputNumber < 0){
//     alert("Negative Number");
// }
// else{
//     alert("Positive Number")
// }

// তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যাটি খুঁজে বের করার লজিক লিখুন।
// let numberOne=Number(prompt("Enter First Number : "));
// let numberTwo=Number(prompt("Enter Second Number : "));
// let numberThree=Number(prompt("Enter Third Number : "));

// if(numberOne > numberTwo && numberOne > numberThree){
//     console.log("Number One is Big",numberOne);
// }
// else if (numberTwo > numberOne && numberTwo > numberThree){
//     console.log("Number Two is Big",numberTwo);
// }
// else{
//     console.log("Number Three is Big",numberThree);
// }
// একটি ইনপুট ক্যারেক্টার (Character) ভাওয়েল (Vowel) নাকি কনসোনেন্ট (Consonant) তা পরীক্ষা করুন।

// let inputChar=prompt("Enter a character :");

// inputChar=inputChar.toLocaleLowerCase();
// if(inputChar=="a" || inputChar=="e" || inputChar=="i" || inputChar=="o" || inputChar=="u"){
// console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

//১ থেকে ১০০ পর্যন্ত সব জোড় (Even) সংখ্যাগুলো লুপ ব্যবহার করে প্রিন্ট করুন।

// let number=100;



// for(let i=1;i<=100;i++){

//     if(i%2==0){
//         console.log(i);
//     }

// }

//লুপ ব্যবহার করে ১ থেকে ৫০ পর্যন্ত সংখ্যাগুলোর যোগফল বের করুন।

// let n=50;
// let sum=0;

// for(let i= 1 ; i <=  50;i++ ){
//     sum=sum+i

// }
// console.log(sum)

/*
যেকোনো একটি নির্দিষ্ট সংখ্যার নামতা (Multiplication Table) লুপ দিয়ে তৈরি করুন।

*/

// let n=10;
// for(let i=1;i<=10;i++){
//     let r=n*i;
//     console.log(`${n} x ${i}=${r}`);
    
// }

/*
একটি সংখ্যার ফ্যাক্টোরিয়াল (Factorial) বের করার প্রোগ্রাম লিখুন (যেমন: 5! = 120)
*/ 



function findFactorial(n){

    if(n>=0){
        let result =1;

        for(let i=1;i<=n;i++){
            result=i*result;
        }
        return result;
    }
    

}
console.log(findFactorial(10));




/*
একটি সংখ্যা প্রাইম বা মৌলিক সংখ্যা (Prime Number) কি না তা লুপ দিয়ে যাচাই করুন।
*/ 

/*ফিবোনাচ্চি সিরিজ (Fibonacci Series) এর প্রথম ১০টি সংখ্যা লুপ দিয়ে জেনারেট করুন (0, 1, 1, 2, 3...)।*/ 

/*
একটি স্ট্রিংকে সম্পূর্ণ উল্টো (Reverse) করে প্রিন্ট করুন (যেমন: "hello" হয়ে যাবে "olleh")।একটি স্ট্রিং প্যালিনড্রোম (Palindrome) কি না তা চেক করুন (যেমন: "madam" উল্টালেও "madam" থাকে)।একটি বাক্যের (Sentence) মধ্যে মোট কতটি ভাওয়েল (Vowel) আছে তা গণনা করুন।একটি বড় স্ট্রিংয়ের প্রতিটি শব্দের প্রথম অক্ষর ক্যাপিটাল (Capitalize) করার লজিক লিখুন।একটি দীর্ঘ স্ট্রিং থেকে নির্দিষ্ট একটি শব্দ (Word) কতবার আছে তা খুঁজে বের করুন।
*/

// let str="hello";

// console.log(str);



/*
একটি সংখ্যার অ্যারে (Array) থেকে সবচেয়ে বড় এবং সবচেয়ে ছোট সংখ্যাটি খুঁজে বের করুন।একটি অ্যারের সব উপাদানগুলোর গড় (Average) মান বের করুন।একটি অ্যারে থেকে সমস্ত ডুপ্লিকেট (Duplicate) বা ডাবল উপাদানগুলো বাদ দিয়ে শুধু ইউনিক উপাদানগুলো রাখুন।একটি অ্যারের ভেতরের উপাদানগুলোকে কীভাবে রিভার্স বা উল্টো করে সাজাবেন (বিল্ট-ইন মেথড ছাড়া)?দুটি আলাদা অ্যারেকে যুক্ত করে একটি একক শর্টেড (Sorted/ক্রমানুসারে সাজানো) অ্যারে তৈরি করুন।একটি মিক্সড অ্যারে থেকে শুধুমাত্র সংখ্যাগুলোকে (Numbers) ফিল্টার করে আলাদা একটি অ্যারেতে নিন।
*/


/*
৩ জন ছাত্রের নাম ও আইডিসহ একটি অবজেক্ট অ্যারে তৈরি করুন এবং লুপ দিয়ে শুধু তাদের নাম প্রিন্ট করুন।একটি অবজেক্টের ভেতর নির্দিষ্ট কোনো "কী" (Key) বা প্রোপার্টি বিদ্যমান আছে কি না তা চেক করুন।অবজেক্ট ডিস্ট্রাকচারিং ব্যবহার করে একটি নেস্টেড অবজেক্ট থেকে ডেটা বের করুন।একটি অবজেক্টের সব 'Keys' এবং সব 'Values' কে আলাদা দুটি অ্যারেতে রূপান্তর করুন।স্প্রেড অপারেটর (...) ব্যবহার করে দুটি আলাদা অবজেক্টকে মার্জ (Merge) বা একত্র করুন।
*/

/*
একটি ফাংশন লিখুন যা ইনপুট হিসেবে সেলসিয়াস তাপমাত্রা নেবে এবং ফারেনহাইটে রূপান্তর করবে।একটি ফাংশন তৈরি করুন যা একটি অ্যারে এবং একটি সংখ্যা নেবে; সংখ্যাটি ওই অ্যারেতে কত নম্বর ইনডেক্সে আছে তা খুঁজে দেবে (Linear Search)।১ থেকে ৫০ পর্যন্ত সংখ্যা প্রিন্ট করুন, তবে ৩ এর গুণিতক হলে "Fizz", ৫ এর গুণিতক হলে "Buzz" এবং ৩ ও ৫ উভয়ের গুণিতক হলে "FizzBuzz" প্রিন্ট করুন (Classic FizzBuzz Challenge)।
*/


/*
 
target = 3

*/

// let arr = [5, 7, 8, 2, 1];

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);


//     for (let j = 0; j < arr.length; j++) {
//         if (i != j) {
//             let r = arr[i] + arr[j];
//             // console.log(r);

//             if(r==3){
//                 console.log("Successful",arr[i],arr[j]);
                
//             }
            
//         }
//     }
// }


// let arr=[5,8,7,1,2];

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
    
    
//     for(let j=0;j<arr.length;j++){
//         if(i != j){
//             let r =arr[i]-arr[j];
//             if(r==4){
//                 console.log("successFul",arr[i],arr[j],r);
                
//             }
//         }
//     }
    
// }

// let arr=[5,-7,8,-11,12];
// let a=[];
// let b=[];


// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(arr[i]<0 ){
//         // console.log(arr[i]);

//         a.push(arr[i]);
        
//     }else{
//         // console.log("Positive",arr[i]);
//         b.push(arr[i]);
        
//     }
// }

// console.log(a,b);
