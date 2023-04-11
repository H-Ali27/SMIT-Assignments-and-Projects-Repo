//******************************QUESTION 01******************************* */
function addition(userNum1){ 
    // let number = 5; // local scope
    return function (userNum2){  //anonymous Function
        console.log(userNum1 + userNum2);
    }
}
let innerFunction = addition(2);
innerFunction(7);

// *****************************QUESTION 02*********************************/
let arr = [22,43,55];
function arraySearch(searchItem, times){
    if(times >= 0 )
    {
        if(searchItem === arr[times]){
        console.log("value is found")
        return true;
        }else{
            arraySearch(searchItem,times-1)
        }
    }
    else{   
        console.log("not found");
        return false;
        }
}
arraySearch(23,2);

// *****************************Second Way**************************/
function arraySearch(arr, target){
    if(arr.length === 0){
        return -1;
    }
    if(arr[0] === target){
        console.log("value found")
        return true;
    }
    const index = arraySearch(arr.slice(1),target);
    if(index === -1){
        console.log("not found")
        return false;
    }
    return index + 1;
}
arraySearch([23,43,55,42],56);


// *************************************QUESTION 03*********************************************//
function createElement(text){
    let newElem = document.createElement("p");
    // let para = document.getElementById("content")
   let para = document.createTextNode(text);
   newElem.appendChild(para);
   const mypara = document.getElementById("content");
   document.body.insertBefore(newElem,mypara);
}
createElement("Hello World")
createElement("Hamza ali is a software Engineer")
createElement("want to be a best developer")

//***************************************QUESTION 04******************************************* */
function addListItem(listItem){
let listElem = document.createElement("li");
let item = document.createTextNode(listItem);
listElem.appendChild(item);
document.getElementById("list").appendChild(listElem);
}
addListItem("Apple")
addListItem("Banana")
addListItem("Orange")

//******************************************QUESTION 05******************************************/
function backgroundColor(elemRef, bgColor){
    let elem = document.querySelector(elemRef);
    elem.style.backgroundColor = bgColor;
}
backgroundColor("p","yellow");
backgroundColor("li","green");

// // *****************************************QUESTION 06*******************************************/
function setObject(key,value){
    localStorage.setItem(key,JSON.stringify(value));
}
setObject("name","hamza");

// *****************************************QUESTION 07********************************************/
function getObject(key1){
    let data = JSON.parse(localStorage.getItem(key1));
    console.log(data);
}
getObject("name");
// ****************************************QUESTION 08*********************************************/
function dataStorage(obj){
    localStorage.setItem("obj",JSON.stringify(obj))
    let retrievedObject = localStorage.getItem("obj")
    console.log(JSON.parse(retrievedObject));
}

let emp = {
    name:"haider",
    class:"JS",
    level:"Beg"
}
let emp1 = {
    name:"hashim",
    class:"CS",
    level:"Adv"
}
dataStorage(emp);
dataStorage(emp1);
