var colors = [
    'orange',
    'yellow',
    'green',
    'red',
    'blue',
    'voilet',
    'indigo'
]

function makeBoxes(howMany) {
    var colorsAmt = colors.length;
    var currColor = 0;
    var box;
    var boxes = document.querySelector('.boxes');
    
    for(var i=0; i<howMany; i++) {  
        box = document.createElement('div');
        box.className = 'box';
        box.style = 'background-color:' + colors[currColor];
        boxes.appendChild(box);

        if (currColor === colorsAmt - 1) {
            currColor = 0;
        } else {
            currColor += 1;
        }
    } 

    boxes.addEventListener('click' , (e) => {
        e.target.parentNode.removeChild(e.target);
    }, false);
}

function isPrime(num) {
    let divisor = 2;
    while (num > divisor) {
        if (num % divisor === 0) return false;
        else divisor ++;
    }
    return true;
}

function primeFactors(num) {
    let divisor = 2;
    const factors = [];
    while (num > 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor ++;
        }
    }
    return factors;
}

var itemText = [
    { 'id': '#symptoms', 
      'text': 'It is important to be as detailed as possible with your description of symptoms. Note changes in bathroom habits, weight loss, responsiveness and anything you can think of.' },
    { 'id': '#medications',
      'text': 'Please list all medications and make sure you list the date and the dosage you gave to your pet' }
  ];

function handleItem(id, text) {
    var newElement, targetElement, currentAlert;
    currentAlert = document.querySelector('#currentAlert');

    if (currentAlert != null ) {
        currentAlert.parentNode.removeChild(currentAlert);
    }

    newElement = document.createElement('div');
    newElement.id = 'currentAlert';
    newElement.className = 'alert alert-danger';
    newElement.innerHTML = text;

    targetElement = document.querySelector(id).parentNode;
    targetElement.insertBefore(newElement, targetElement.childNodes[2]);
}

function initItem(id, text) {
    return function() {
        // closure helps to remember id and text for each particular iteration
        handleItem(id, text);
    }
}

for (let i=0; i<itemText.length; i++) {
    DOMElement = document.querySelector(itemText[i].id);
    DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text));
}

// IIFE Example
(function(howMany, colors){
    var colorsAmt = colors.length;
    var currColor = 0;
    var box;
    var boxes = document.querySelector('.boxes');
    
    for(var i=0; i<howMany; i++) {  
        box = document.createElement('div');
        box.className = 'box';
        box.style = 'background-color:' + colors[currColor];
        boxes.appendChild(box);

        if (currColor === colorsAmt - 1) {
            currColor = 0;
        } else {
            currColor += 1;
        }
    } 

    boxes.addEventListener('click' , (e) => {
        e.target.parentNode.removeChild(e.target);
    }, false);

})(20, [
    'orange',
    'yellow',
    'green',
    'red',
    'blue',
    'voilet',
    'indigo'
]);

function Hamburger(nodeName) {
    var node = document.querySelector(nodeName+ ' .hamburger');

    return {
        activate: function() {
            // again closure is helping us to gain accesss to node defined in parent func.
            node.addEventListener('click', (e) => {
                node.parentNode.querySelector('.navbar').classList.toggle('hidden');
            }, false);
        }, // activate
        hide: function() {
            node.parentNode.querySelector('.navbar').classList.add('hidden');
        }// activate
    }//return
}// Hamburger

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();



// setInterval Example
function countDown(seconds) { 
    const intervalId = setInterval(()=> {
        seconds --;
        if (seconds > 0) {
            console.log(seconds);
        } else {
            console.log("Times up!")
            clearInterval(intervalId);
        }
    }, 1000);
}

// this with bind
const myModule = {
    name: "Ahsan",
    getName: function() {
        return console.log(this.name);
    }
}

myModule.getName();

// passing the same context
const someName1 = myModule.getName.bind(myModule);

// passing the different context
const someName2 = myModule.getName.bind({name: "Naveed"});

someName1();
someName2();

function fibbonaci(count) {
    if (count === 1) return [0, 1];
    const arr = fibbonaci(count - 1);
    
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
    console.log(arr);

    return arr;
}

function removeDuplicate(arr) {
    const exists = {};
    const uniqArr = [];
    for (let i=0; i<arr.length; i++) {
        if (!exists[arr[i]]) uniqArr.push(arr[i]);
        exists[arr[i]] = true;
    }
    return uniqArr;
}

function mergeSortedArrs(arr1, arr2) {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    const mergedArr = [];
    let arr1Element = arr1[0], arr2Element = arr2[0], i = 1, j = 1;

    while (arr1Element || arr2Element) {
        if ((arr1Element && !arr2Element) || (arr1Element < arr2Element)) {
            mergedArr.push(arr1Element);
            arr1Element = arr1[i++];
        } else {
            mergedArr.push(arr2Element);
            arr2Element = arr2[j++];
        }
    }
    return mergedArr;
}

function stringReverse(str) {
    let start = 0, end = str.length - 1;
    str = str.split("")
    while (start < end) {
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start ++;
        end --;
    }
    return str.join("");
}

function revStringRecursively(str) {
    if (str === "") return str;
    return revStringRecursively(str.substr(1)) + str.charAt(0);
}

String.prototype.reverse = function () {
    if (!this || this.length < 2) return this;
    return this.split("").reverse().join("");
}

function reverseWords(sentence) {
    sentence = sentence.split(" ");
    let i=0, j=sentence.length - 1;
    while (i < j) {
        let temp = sentence[i];
        sentence[i] = sentence[j];
        sentence[j] = temp;
        j--;
        i++;
    }
    return sentence.join(" ");
}

function isPalindrome(str) {
    for(let i=0; i<str.length/2; i++) {
        if (str[i] !== str[str.length -1 -i]) return false;
    }
    return true;
}

function twoSum(arr, target) {
    for (let i=0; i<arr.length; i++) {
        if (arr.includes(target - arr[i])) return [ i, arr.indexOf(target - arr[i])];
    }
    return -1;
}

// efficient twoSum
function efficientTwoSum(arr, target) {
    const obj = {};
    for (let i=0; i<arr.length; i++) {
        if (obj[target - arr[i]]) return [i, obj[target - arr[i]]];
        else obj[target - arr[i]] = i;
    }
    return -1;
}

var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
  ];    
  
  // Result
  [
    { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
    { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
    { skill: 'html', user: [ 'Sue' ], count: 1 } 
  ]; 
  
  const result = [];
  let skillToUserMap = {};
  
  for(let i=0; i<endorsements.length; i++) {
      if (skillToUserMap[endorsements[i].skill]) {
          skillToUserMap[endorsements[i].skill].count += 1; // skillToUserMap.css
          skillToUserMap[endorsements[i].skill].user.push(endorsements[i].user); // skillToUserMap.Bill
      } else {
          skillToUserMap[endorsements[i].skill] = {};
          skillToUserMap[endorsements[i].skill].count = 1; // Error skillToUserMap.css = undefined
          skillToUserMap[endorsements[i].skill].user = [endorsements[i].user];
      }
  }
  for ( skill in skillToUserMap) {
      result.push({
      
          skill,
          user: skillToUserMap[skill].user,
          count: skillToUserMap[skill].count, 
      });
  }
  


// LinkedIn Interview - START
//For the given array of members:
var members = [
    {
        name: 'Bill Denbrough',
        id: 1
    },
    {
        name: 'Ben Hanscom',
        id: 2
    },
    {
        name: 'Mike Hanlon',
        id: 3
    },
    {
        name: 'Richie Tozier',
        id: 4
    },
    {
        name: 'Beverly Marsh',
        id: 5
    },
    {
        name: 'Eddie Kaspbrak',
        id: 6
    },
    {
        name: 'Stan Uris',
        id: 7
    }  
];
 
 /*
**  Question 1
*  <div id="content"></div>
*  insert links for each of the members into the content div
*  <a href="profile.jsp?id=[id]">[Member Name]</a>
*/

    const content = document.querySelector('#content');
    let listItems = [];
    
    members.map(member => {
        let a = document.createElement('a');
        a.setAttribute('href') = `profile.jsp?id=[${member.id}]`;
        a.innerHTML = `[${member.name}]`;
        listItems.push(a);
    });
    
   // add childs to parentNode
   listItems.forEach(item => content.appendChild(item));
   
   listItems.forEach(item => item.addEventListener('click', () => {
       const user_consent = prompt('Are your sure you want to leave?');
       if (user_consent.toLowerCase() === 'yes') {
           window.history.push(item.getAttribute('href'));
       }
   }, false));
   
   content.addEventListener('click', () => {
       const user_consent = prompt('Are your sure you want to leave?');
       if (user_consent.toLowerCase() === 'yes') {
           window.history.push(e.target.getAttribute('href'));
       }
   }, false);
   

/*
STYLES
    .container {
        text-align: center;
        display: none;
        position: relative;
    }
    
    #myLink {
        color: blue;
    }
    
    
    #tooltip {
        padding: 10px;
        background: goldenrod;
        border: 10px solid darken(goldenrod, 20);
        color: darken(brown, 20);
        text-align: center;
        display: none:
        position: absolute;
        top : 40px;
        
    }
    
    .container:hover {
      display: block;
    }
    
*/

{/* <div class="container">
    <a href="#" aria-label="link" id="myLink"> </a>
     <span id="tooltip">Tooltip text!</span>

</div> */}



// --------
// Optimization question
// <a href="1">Link One</a>
// <a href="2">Link Two</a>
// <a href="3">Link Three</a>
// ...
// <a href="200">Link 200</a>


// brute force + naive algorithm
function peakFinding(arr) {
    const peaks = []

    for (let i=0; i<arr.length; i++) {
        if (arr[i-1] && arr[i]>arr[i-1] && arr[i] > arr[i+1]) {
            peaks.push(arr[i]);
        }
    }

    if (arr[arr.length - 1 ] > arr[arr.length - 1 - 1]) {
        peaks.push(arr[arr.length - 1 ] );
    }

    return peaks.length === 0 ? -1 : peaks
} 

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    if (J.length === 0) return 0;
    const map = {};
    for (let i =0; i<J.length; i++) {
        map[J[i]] = 0;
    }
    for (let i =0; i<S.length; i++) {
        map[S[i]]++;
    }
    let sum = 0;
    const mapVals = Object.values(map).filter(Boolean);
    for (let i=0; i<mapVals.length; i++) {
        sum += mapVals[i];
    }
    return sum;
    
    
    
 
    /**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var map = {};
    for (var i =0; i<words.length; i++) {
        var transformation = transform(words[i]);
        if (map[transformation]) continue;
        else map[transformation] = true;
    }
    return Object.keys(map).length;
};

        /**
 * @param {string} word
 * @return {string} transformation
 */
var transform = function(word) {
    var morse_code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var morse_table = {};
    var transformation = '';
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for (var i =0; i<26; i++) morse_table[alphabets[i]] = morse_code[i];
    
    for (var i = 0; i<word.length; i++) {
        transformation += morse_table[word[i]];
    }
    
    return transformation;
    
}
};




/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
    for (var i =0; i<A.length; i++) {
        A[i] = A[i].reverse();
        for (var j =0; j<A[i].length; j++) {
             A[i][j] ^=  1;
    }
    }
    
    return A
    
};


