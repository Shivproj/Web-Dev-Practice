let students = [
  {
    id: 1,
    Name: "Shiv",
    Class: 1,
    Marks: 85,
    Subject: "English",
  },
  {
    id: 2,
    Name: "Sai",
    Class: 1,
    Marks: 65,
    Subject: "English",
  },
  {
    id: 3,
    Name: "Ias",
    Class: 3,
    Marks: 9,
    Subject: "English",
  },
  {
    id: 4,
    Name: "Vish",
    Class: 1,
    Marks: 85,
    Subject: "English",
  },
  {
    id: 5,
    Name: "Mahesh",
    Class: 1,
    Marks: 71,
    Subject: "English",
  },
  {
    id: 6,
    Name: "Rahul",
    Class: 7,
    Marks: 62,
    Subject: "Social",
  },
  {
    id: 7,
    Name: "Boy",
    Class: 7,
    Marks: 76,
    Subject: "Social",
  },
  {
    id: 8,
    Name: "Man",
    Class: 7,
    Marks: 87,
    Subject: "Social",
  },
  {
    id: 9,
    Name: "Mohsin",
    Class: 7,
    Marks: 25,
    Subject: "Social",
  },
  {
    id: 10,
    Name: "Swami",
    Class: 9,
    Marks: 85,
    Subject: "Science",
    
  },
];

students.forEach(function calculateGrade(marks) {
  let a = marks.Marks;
  if (a >= 80) marks.Grade = "A";
  else if (a < 80 && a >= 60) marks.Grade = "B";
  else if (a < 60 && a >= 30) marks.Grade = "C";
  else marks.Grade = "D";
});

let z = document.querySelector("#grade");
z.addEventListener("change", calc);
function calc() {
  let match = students.filter(function (item) {
    return item.Marks > z.value;
  });
  console.log(match);




}
students.forEach(function print(items){
    console.log(items);
})
