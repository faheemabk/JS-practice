function getLength(str){
    console.log('name of the string:', str);
    console.log('length of the string:', str.length);
}


getLength('faheem');

function findIndexOf(str, target){
    console.log("Original String", str)
    console.log("Index of Target:", str.indexOf(target))
}
 */
findIndexOf('Hello Everyone', 'Everyone')

function findLastIndexOf(str, target) {
    console.log('original string:', str)
    console.log('the last index of target is', str.lastIndexOf(target));
}

findLastIndexOf('DoodleWoodleWoodle', 'Woodle');


function getSlice(str, start, end){
    console.log("Original String", str);
    console.log('Sliced String', str.slice(start, end));
}

getSlice('jemima', 2, 4);




 function getSubString(str, start, end){
    console.log("Original string", str);
    console.log("Modified string", str.substring(start, end))
}

getSubString("hello world", 0, 5) 

Basically cuts the string according to the users requirements. 

function replaceTheString(str,target, replacement){
    console.log("Original String", str);
    console.log("Replaced String", str.replace(target, replacement));
}
 replaceTheString('HelloWorld', 'He', 'Javascript');

replaces the targeted part of the string with whatever replacement user has written

function splitTheString(str, splitindex){
    console.log("Unmodified String", str);
    console.log("String after Split", str.split(splitindex));
}

splitTheString('Faheem Manyar', ' ') 

 function trimTheString(str){
  console.log("Original String", str);
  console.log("Trimmed String", str.trim());
}

trimTheString('    Hello World       '); 



function toUpper(str){
    console.log('String in Lower Case', str)
    console.log('String Converted To UpperCase', str.toUpperCase())
}

toUpper('faheemmanyar')




function toLower(str){
    console.log('String in UpperCase', str);
    console.log('String in LowerCase', str.toLowerCase());
}

toLower('FAHEEMMANYAR')