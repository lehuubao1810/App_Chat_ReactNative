//Bai1
//alert("Hello gyu"); canh bao

// var age =19; // khai bao bien so
// var firstName = "Bao";//khai bao bien string
// var lastName = " Le";
// var online = true;//khai bao bien boolean

// var a,b;

// a=null;//khong cso gia tri
// b=2211;

// const huubao = "handsome";
// var fullName = firstName + lastName;

// console.log("Your age is "+age);
// console.log("Hello",firstName);
// console.log("Are you online",online)
// console.log(a)
// console.log(b)
// console.log("My fullName is",fullName)
// console.log(fullName +" is "+huubao)

//Bai2
//var friend = 10;

//friend = friend +1;
//friend = friend -1;
//friend = friend *2;
//friend = friend/2;
//friend = friend**2; //giai thua
//var gruop = friend%3; //(=1) chia lay phan du

//friend +=1;
//friend -=1;
//friend *=1;
//friend /=1;

//console.log(friend);

//bai3 

//var myName = window.prompt("What your name?")//tao canh bao nhap ten
//console.log("Hello",myName)
//nhap text tren man hinh 
//document.getElementById("myButton").onclick = function(){ //lay ID cua button
//    var myName = document.getElementById("myText").value;  //ID cua input Text
//    console.log("Hello",myName);  
//}

//bai4
//var age = window.prompt("How old are you?");//tao canh bao input Text
//console.log("Happy birthday");
//mac dinh la string
//age = Number(age);//chuyen thanh number

//age +=1;

//console.log(age);

//var myVar;

//myVar = Number("3.14");//chuyen sang number
//myVar = String(3.14);//chuyen sang string
//myVar = Boolean(0)

//bai5: function()

//function sayHello(myName){
//    console.log("Hello",myName);
//};
//var a = window.prompt("Your name: ");

//sayHello(a);

//c1
//function FtoC(F){
//    C = 5/9 * (F -32);
//    console.log("F to C =",C);
//}
//var F= window.prompt("Enter F: ");
//F = Number(F);
//FtoC(F);

//c2
// function FtoC(F){
//     return 5/9 * (F -32);
// }
// var F= window.prompt("Enter F: ");
// var C = FtoC(F);
// console.log("F to C =",C);

//bai6: Object

// var human = {
//     name : "Bao", //nho dau phay
//     age : 19, //chu y dau 2 cham " : "
//     eat : function(){
//         console.log("I'm eating rice")
//     },
//     drink : function(){
//         console.log("I'm drinking orange")
//     }
// }
// //goi thuoc tinh 2 cach
// human.name;
// human['name'];

// console.log(human.name);
// human.eat();

//bai7 mang( array)

// var cars = ["Lambo","Nissan"];//khai bao mang

// console.log(cars[0]);
// cars.push("Toyota");//add an element
// console.log(cars);
// cars.pop();//removes last element

// var a = cars.length; // return length of array
// console.log(a);

// cars = cars.sort();//sap xep element theo a -> z
// console.log(cars);

// cars = cars.reverse();//dao nguoc ptu(reverse element in array)

//bai8 if else
// var ex = window.prompt("Your ex:");
// if(ex==1){
//     console.log("Noob")
// }
// else{
//     console.log("Pro")
// }

//bai9 switch case
// var age = window.prompt("Your age:")
// switch(age){
//     case "18":
//         console.log("Noob");
//         break;
//     case "19":
//         console.log("Pro");
//         break;
//     default :
//         console.log("Get out in here");
// }

