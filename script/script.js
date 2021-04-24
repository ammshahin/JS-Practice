/*document.getElementById('btn').addEventListener('click', messege);

function messege(x){
    let y;
    y = x.target;
    console.log(y);
    
}   

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/; 
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;


str = "2xy3xy7xy8xy";
str = "01788888888";
str = "+8801811888889";

re = /^\+8801[0-9]{9}$/;

str = "+8801811888889";



console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}   

var student = {
    name : "akib",
    age : 12,
    vcity : "magura"
};

var  student_json = JSON.stringify(student);

console.log(student_json);

var stud_new = JSON.parse(student_json);

console.log(stud_new);  

document.getElementById("get_data").addEventListener('click',loadData);

function loadData(){
    //console.log("Button clicked");
    let xhr  = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);
    xhr.onload = function(){
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if(xhr.status === 200){
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }
    }
    xhr.send();
    
};


document.getElementById('get_data').addEventListener('click',getJokes);

function getJokes(x){
    let numb = document.getElementById('getJokes').value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${numb}`, true);

    xhr.onprogress = function(){
        document.getElementById("output").innerHTML = `Loading......`;
    }

    xhr.onload = function(){
        if(xhr.status === 200){
            let data = JSON.parse(this.responseText);
            let joke = data.value
            let output = "<ul>"
            joke.forEach(function(item) {
                //console.log(item.joke);
                output += ` <li> ${item.joke} </li> `
            });

            output += "</ul>"
            document.getElementById("output").innerHTML =  output;
        }
    }

    xhr.send();

} 
pppppppppp
let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
]

function createPerson(person, callback) {
    let prom = new Promise(function(resolve, rejevct){
        persons.push(person);
        resolve();
    })
    return prom;
 }
 
 function getPerson() {
     setTimeout(function(){
         let output = '';
         persons.forEach(function(person){
             output += `<li>${person.firstName} ${person.lastName}</li>`
         }); 
         document.getElementById('output').innerHTML = output;
     }, 500);
 }
 
 createPerson({firstName:"Rony", lastName: "Chy"})
        .then(getPerson);  */


document.getElementById("get_data").addEventListener("click", clicked);

function clicked(){
    fetch(`http://api.icndb.com/jokes/random/100`)
        .then(res => res.json())
        .then((dta) => {
            let joke = dta.value;
            let data = '';
            joke.forEach(x => { 
                data += `<li> ${x.joke} </li>`;
                
                //console.log(x.joke);
            });
            document.getElementById('data').innerHTML = data;
            //console.log(joke);
        }).catch((err) => {
            console.log(err);
        });
}