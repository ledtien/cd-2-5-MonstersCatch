// Assignment 1
const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

const nameWithA = inventors.filter( function checkName(inventor) {
      return inventor.startsWith("A") }
);
console.log(nameWithA);

  const sameFirstAndLastName = inventors.filter(function (name) {
      return name.split(" ")[0][0] === name.split(" ")[1][0]
  })
console.log(sameFirstAndLastName);

  inventors.sort();
  console.log(inventors);

  inventors.sort((a, b) => a.length - b.length );
  console.log(inventors);

  const lenghtOfName = inventors.map((fullName) => fullName.length);
  console.log (lenghtOfName);

  const upperCaseName = inventors.map((upperCase) => upperCase.toUpperCase());
  console.log(upperCaseName);

  

  const firstName = inventors.reduce(
      (prev, current) => prev + current.split(" ")[0] + " ", ""
  
  
  )
  console.log(firstName)

