/*
Jeff  6/13/2023
Learning Regex - Coding Train Tutorial series: https://www.youtube.com/watch?v=7DG3kCDx53c 
Regex practice exercises: https://regexone.com/lesson/matching_characters?
index.js
*/

"use strict"

console.log("index.js is hooked up!");

/*__________________________________________________
Literal Characters (literally this character only):

Meta Characters (any character of this kind, or in this range):
\d  =  any digit 0-9
\w  =  any letter or number A-Za-z0-9 (word character)
\s  =  any whitespace (but not a <br> unless scoped)
\D  =  not a digit
\W  =  anything that is not a letter or number (!word character)
\S  =  anything that is not a whitespace
 .  =  any character ( \. is needed to specifically match a period )

 Quantifiers (specify how many instances of a character, group, or character class)
 *  =  0 or more
 +  =  1 or more
 ?  =  0 or 1    ( ? can be used as an optional letter/number -- ie,  tube?s - will search for tube or tubes)
 {3} =  exactly this amount 3
 {3,}  = this number or more 3~
 {3,5}  = a range between these numbers 3,4,5

 Position
 ^   = beginning
 $   = end
 \b  = word boundary  ( \b\w{10}\b  -this would get a 10 letter/digit word )
[abc]  =  Only a, b, or c
[^abc] 	=  Not a, b, nor c

555-555-5555 or (555)867-4567  would be:  [\d?(]{3,4}[-?)]\d{3}-\d{4}  
some-body@gmail.com  would be:  .+[@]{1}\w+\.\w+
____________________________________________________*/

/*  Replace an H2 tag innerText if Regex Matches  */
let regexCode = /[\d?(]{3,4}[-?)]\d{3}-\d{4}/g
let textElement= document.querySelector('.text-shadow-h2');
let originalText= document.querySelector('main').innerText;
 
if (originalText.match(regexCode)) {
   let newStr = originalText.replace(regexCode, '')
   console.log(newStr);
   textElement.innerText = newStr
}



/*  Grabbing Elements / Tags / Attributes */
let boolAclass = /[a<]+\sclass="/;
let boolHref = /[a<]+\shref=/;

let theTags = ['<a class="nav"', '<ul class="navbar-nav"', '<a href="https://getbootstrap.com" target="_blank">']

console.log(theTags);

theTags.forEach(function(element, i, obj) {
    if (element.match(boolHref)) {
       obj.splice(i,1)
       // let newElement = element.slice(8, -1)
       // theTags.push(newElement)
       let result = element.replace(boolHref, '')
       theTags.push(result)
    }
   console.log(theTags);
});