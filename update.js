const person ={
  name: "Taliah Dev"
}

const personToJSON =  JSON.stringify(person);

localStorage.setItem("person", personToJSON);//overwriting
