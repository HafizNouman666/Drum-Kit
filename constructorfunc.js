
//this is demonstration of audio function or how audio function work
//traditional way 
// var bellboy3 ={
//     name1: "nouman",
//     age1: "21"
// }
// console.log(bellboy3)

//efficient way to create a function
function bellboy(name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
    this.clean= function(){
        console.log("cleaning in progress...");
    }
}

// var bellboy1 = new bellboy("nouman","21","true",["English","Urdu"]);
// var bellboy2 = new bellboy("ali","21","true",["English","Punjabi"]);

// console.log(bellboy1.name);
// console.log(bellboy2.name);
var bellboy2 = new bellboy("ali","21","true",["English","Punjabi"]);
console.log(bellboy2.clean());