function getAverage() {
    const obj = { x: 3.6, y: 7.8, z: 4.3 };
    // CHANGE BELOW
    // const x = obj.x;
    // const y = obj.y;
    // const z = obj.z;
    // CHANGE ABOVE
    const {x, y, z} = obj;
    return Math.floor((x + y + z) / 3.0);
  }
console.log(getAverage());


function getAddress() {
    let coderschool = {
      city: "HCMC",
      country: "Vietnam",
      address: {
        number: 12,
        street: "Ton Dan",
        district: "4",
      },
    };
    // CHANGE BELOW
    var { city, country, address: {street}} = coderschool;
    return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
  }

console.log(getAddress())


function getElements() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // CHANGE BELOW
//     const first = arr[0];
//   const third = arr[2];
//   const fourth = arr[4];
    const [first, second, third, fourth] = arr;
    // CHANGE ABOVE
  
    return { first, third, fourth };
  }
  console.log(getElements())


  function getNestedElements() {
    const food = [
      ["carrots", "beans", "peas", "lettuce"],
      ["apples", "mangos", "oranges"],
      ["cookies", "cake", "pizza", "chocolate"],
    ];
    // CHANGE BELOW
    // const carrots = food[0][0];
    // const cookies = food[2][0];
    // const mangos = food[1][1];
    // CHANGE ABOVE
    const [[carrots], [apples ,mangos, oranges], [cookies]] = food;
  
    return { carrots, cookies, mangos };
  }

  console.log(getNestedElements())


  function restParameters(first, ...rest) {
    return rest[0] === 1 && rest[1] === 2;
  }
  console.log(restParameters(0, 1, 2));


  function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {};
    // CHANGE BELOW
    // object.one = array[0];
    // object.two = array[1];
    // object.three = array[2];
    // object.rest = array.slice(3);
    [object.one, object.two, object.three, ...object.rest] = array;
    // CHANGE ABOVE
  
    return object;
  }
  console.log(ontoAnObject())
  
  
  function findTheMax() {
    const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];
    return Math.max(...arr1,...arr2);
  }
  console.log(findTheMax())


  function concatenateArrays() {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const result = [...arr1, ...arr2, ...arr3];
    return result;
  }

  console.log(concatenateArrays())



  function mergeObjects() {
    // what does this return?
    const obj1 = {
      a: "a from obj1",
      b: "b from obj1",
      c: "c from obj1",
      d: {
        e: "e from obj1",
        f: "f from obj1",
      },
    };
    const obj2 = {
      b: "b from obj2",
      c: "c from obj2",
      d: {
        g: "g from obj2",
        h: "h from obj2",
      },
    };
    const result = { ...obj1, ...obj2 };
    return (
      result.a === "a from obj1" &&
      result.b === "b from obj2" &&
      result.c === "c from obj2" &&
      result.d.e === undefined &&
      result.d.f === undefined &&
      result.d.g === "g from obj2" &&
      result.d.h === "h from obj2"
    );
  }
  console.log(mergeObjects())


  function multiArgument() {
    // CHANGE BELOW
    const divide = (a, b) =>  a / b;
   

    return divide(40, 10);
  }
  console.log(multiArgument())


  function spreadWithArrow() {
    // CHANGE BELOW
    const asArray =  (...args) => args;

    return asArray(1, 2, 3, 4);
  } console.log(spreadWithArrow())

  function withObject() {
    // CHANGE BELOW
    const getObject =  (favoriteCandy)=> ({favoriteCandy});
  
    return getObject("twix");
  } console.log(withObject())


  function withMultiLineExpression() {
    // CHANGE BELOW
    const getString = (name) => {
      return `
          Hello there ${name}
          How are you doing today?
        `
    };
    return getString("Ryan");
  } console.log(withMultiLineExpression())


  function curryAdd() {
    // CHANGE BELOW
   
    const curryAddition = (a) => (b) => (c) => a+b+c;
    // function curryAddition(a) {
    //   return function (b) {
    //     return function (c) {
    //       return a + b + c;
    return curryAddition(9)(3)(5);
        }; console.log(curryAdd())
    