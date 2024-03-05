// const pi=3.14; //not change value
// let age=20;
// console.log(age);
// console.log(pi);

// {
//  let a=10;
//  console.log(a);

// }// this is block


// let price= 100.4

// const student={
//     name:"amrut golani",
//     age : 20,
//     cgps :8.2,
// }


// console.log(student);

// let  mod="dark";
// let color;

// if (mod === "dark" )
// {
//     color = "black";


// }
// else
// {
//     color = "any"
// }

// console.log(color);

// alert("hello");  pop box

// let num=prompt("enter no:");

// if(num % 5 === 0)
// {
//     console.log("multiple of 5");
// }
// else{
//     console.log("not multiple of 5");
// }
// let score =prompt("enter no:");
// let gread;

// if(score >= 90 && score <= 100)
// {
//     gread="a"; 
// }
// else if(score >= 70 && score <= 89)
// {
//     gread="b";
// }
// else if(score >= 60 && score <= 79)
// {
//     gread="c";
// }
// else if(score >= 40 && score <= 59)
// {
//     gread="d";
// }
// else
// {
//     grade="f";
// }
// console.log(grade);

// for (let i=1; i<=5; i++)
// {
//     console.log("hello");
// }
// console.log("loop has ended")

// let n =prompt("enter no");
// let sum =0;
// for(let i=0; i<=n; i++)
// {
//     sum =sum +i;

// }
// console.log("sum is",sum)

// let str="animal";

// for (i of str)
// {
//     console.log(i)
// }


// let stu = {
//     name: "amrut"

// }

// for( let key in stu)
// {
//     console.log(key,stu[key]);
// }

// for (let num=0; num<=100; num++)
// {
//    if(num%2 == 0)
//    {
//     console.log(num);
//    }
// }

// let gamenum =25;

// let usernum = prompt("guess the game number");

// while(usernum != gamenum)
// {
//     usernum = prompt("again guass rigth numnber");
// }
// console.log("rigth")

// let str ="helojhsvhbsd";
// console.log(str[4]);

// let stu = {
//         name: "amrut"
    
//      }
// let sentence=`jkbcviwsbwjeb${stu.name}`; //literals template
// console.log(sentence);

// let str ="  my name is amrut";
// console.log(str.trim());

// let num = "1234567";
// // let number = "123456789";
// console.log(num.slice(1,6));

// //  let a=num.concat(number);


// let b =num.replace("7","8");
// console.log(b);

// let str = prompt("enter full name");
// let fullname ="@" + str +str.length;
// console.log(fullname);

// let array = [12,34,23,23,234,543];
// console.log(array[0]=88)
// console.log(array)

// let city = ["ahmedabad" ,"surat","baroda","bardoli"];
// console.log(city)

// let mark =[230,450,570,680,790,806,460];

// for ( let i=0; i<mark.length; i++)
// {
//     let offer = mark[i]/10;
//     mark[i] -= offer;
// }
// console.log(mark);
// let sum = 0;
// for (let val of mark)
// {
//     sum = sum + val;
// }
// console.log(sum);

// let a =["a","b","c","d"];
// // a.slice(2);

// a.splice(1,2,"x","x")
// console.log(a)
// let b= a.push("snjdv");
// console.log(a)


// *****  functions  *****

// function myfun(msg)
// {
//     console.log(msg);
// }

// myfun("i love you");

// function sum(x,y)
// {
//     return x+y;
    
// }

// let val =sum(3,4);
// console.log("sum of two number",val);


// const arrowsum = (a,b) =>
// {
//     return a+b;
// };

// function vowels()
// {
//     for(let val of str)
//     {
        
//     }
// }

// vowels();

// let arr =[1,2,3,4,5,6]

// arr.forEach(function printval(val,idx)
// {
//     console.log(val,idx);
// })
//  let arr =[1,2,3,4,5,6]

// //  arr.forEach(function mysun(num)
//  let nearary= arr.forEach((num)=>
//  {
//     console.log(num*num);
//  });

//  console.log(nearary)


// let aar =[1,2,3,4,5,6]

// let newarr = aar.filter((val)=>
// {
//  return val % 2 == 0;
// });
// console.log(newarr);

let mark = [87,58,69,25,9,5,89,59,5,95]

let newarr = mark.reduce((val,abc)=>
{
    return val + abc;
});
console.log(newarr);
