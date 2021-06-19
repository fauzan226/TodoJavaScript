const names = ["Feri", "Akhtar", "Azka"];
const numbers = [3, 2, 5];
const objects = [
  {
    name: "Feri",
    age: 3,
  },
  {
    name: "Akhtar",
    age: 2,
  },
  {
    name: "Azka",
    age: 5,
  },
];

for (let index = 0; index < names.length; index++) {
  console.log(names[index]);

}

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);

}

for (let index = 0; index < objects.length; index++) {
  console.log(objects[index].name);
  console.log(objects[index].age);

}