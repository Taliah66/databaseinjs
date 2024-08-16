const person ={
  name: "Taliah Dev"
}

const personToJSON = JSON.stringify(person);
const JSONToPerson = JSON.parse(personToJSON);// converts JSON to jacascript object
console.log(JSONToPerson);
