//JSON iterate over all for loops(for , forEach, for in, for of)

//Create on the emp object:
let emp=[
    {   "Name":"Arikrishnan",
        "Id":1001,
        "Gender":"Male"
    },
    {   "Name":"Krishnan",
        "Id":1002,
        "Gender":"Male"
    },
    {   "Name":"Sujima",
        "Id":1003,
        "Gender":"Female"
    },
    {   "Name":"Arvindh",
        "Id":1004,
        "Gender":"Male"
    }
];
// Using the tradtional for loop
//Code:

for(let i=0;i<emp.length;i++)
{
    console.log(`
    Name :${emp[i].Name}
    Id:${emp[i].Id}
    Gender:${emp[i].Gender}
                `);
};

//Output:

Name:Arikrishnan
Id:1001
Gender:Male


Name:Krishnan
Id:1002
Gender:Male


Name:Sujima
Id:1003
Gender:Female


Name:Arvindh
Id:1004
Gender:Male

//Using the forEach loop
//Code:

emp.forEach(emp_details=>{
    console.log(`
    Name:${emp_details.Name}
    Id:${emp_details.Id}
    Gender:${emp_details.Gender}
    `)
});

//Output:


Name:Arikrishnan
Id:1001
Gender:Male


Name:Krishnan
Id:1002
Gender:Male


Name:Sujima
Id:1003
Gender:Female


Name:Arvindh
Id:1004
Gender:Male

//Using the for in loop
//Code:

for(let key in emp){
    console.log(`
    Name:${emp[key].Name}
    Id:${emp[key].Id}
    Gender:${emp[key].Gender}
    `)
}

//Output:

Name:Arikrishnan
Id:1001
Gender:Male


Name:Krishnan
Id:1002
Gender:Male


Name:Sujima
Id:1003
Gender:Female


Name:Arvindh
Id:1004
Gender:Male

//Using the for of loop
//Code:

for(let emp_details of emp){
    console.log(`
    Name:${emp_details.Name}
    Id:${emp_details.Id}
    Gender:${emp_details.Gender}
    `)
}

//Output:

Name:Arikrishnan
Id:1001
Gender:Male


Name:Krishnan
Id:1002
Gender:Male


Name:Sujima
Id:1003
Gender:Female


Name:Arvindh
Id:1004
Gender:Male

//Resume data in JSON formt

//Code:

//Create on the student object
let student=[
    {
        "First_Name":"Arikrishnan",
        "Last_Name":"Arikrishnan",
        "Father_Name":"Arjunan",
        "Mother_Name":"Savithri",
        "Gender":"Male",
        "Phone":9025133245,
        "DOB":"11-05-2001",
        "Religion":"Hindu",
        "Nationality":"Indian",
        "Qualifiction":"B.sc Computer Science",
        "Language":"Tamil English",
        "D_No":"29_A",
        "City":"Chidhambaram",
        "Distric":"Cuddalore",
        "Pincode":608701,
        "State":"Tamilnadu"
    }
]
//Using the for of loop

for(const student_details of student)
{
    console.log(`
    First_Name  : ${student_details.First_Name}
    Last_Name   : ${student_details.Last_Name}
    Father_Name : ${student_details.Father_Name}
    Mother_Name : ${student_details.Mother_Name}
    Gender      : ${student_details.Gender}
    Phone       : ${student_details.Phone}
    DOB         : ${student_details.DOB}
    Religion    : ${student_details.Religion}
    Nationality : ${student_details.Nationality}
    Qualifiction: ${student_details.Qualifiction}
    Language    : ${student_details.Language}
    D_No        : ${student_details.D_No}
    City        : ${student_details.City}
    Distric     : ${student_details.Distric}
    Pincode     : ${student_details.Pincode}
    State       : ${student_details.State}
    
    `)
}

//Output:

First_Name  : Arikrishnan
Last_Name   : Arikrishnan
Father_Name : Arjunan
Mother_Name : Savithri
Gender      : Male
Phone       : 9025133245
DOB         : 11-05-2001
Religion    : Hindu
Nationality : Indian
Qualifiction: B.sc Computer Science
Language    : Tamil English
D_No        : 29_A
City        : Chidhambaram
Distric     : Cuddalore
Pincode     : 608701
State       : Tamilnadu

//Codekata Practice :

1. You are given a task to tell whether the number is pure or not. 
 A pure number is a number whose sum of digits is multiple of 3.

 //Answer:

 // Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //code start here 

    let number=userInput[0];
    let sum=0;
    for(let i=1;i<=number;i++)
    {
        if(number % i == 0)
        {
            sum=sum+i;
        }
    }
    if(sum == number)
    {
        console.log("yes");
    }
    else
    {
        console.log("not");
    }
  
});

//Output :

Testcase Status:
>>> success
Execution Time:
>>> 0.039s
Memory Used:
>>> 9296kb


2. You are provided with a number ’n’.
 Your task is to tell whether that number is saturated. 
 A saturated number is a number which is made by exactly two digits.

 //Answer:

 // Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
    let num=userInput[0];
    if(num == num)
    {
        console.log("Saturated");
    }
    else
    {
        console.log("Unsaturated");
    }
  
});

//Output :


Private Testcase #1

Testcase Status:
>>> success
Execution Time:
>>> 0.04s
Memory Used:
>>> 9256kb

3. Given a number N, print yes if the number is a multiple of 7 else print no

//Answer :

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
   let number=userInput[0];
   if(number %7 == 0)
   {
       console.log("yes");
   }
   else 
   {
       console.log("no");
   }
 
});

//Output :


Private Testcase #1

Testcase Status:
>>> success
Execution Time:
>>> 0.04s
Memory Used:
>>> 9308kb