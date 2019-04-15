var mySet = new Set();

mySet.add('a');
mySet.add('b');
mySet.add('a');

for (let element of mySet){
  console.log(element);
}

var ourSet = new Set([1,2,3,4]);

var size = ourSet.size;

var has = ourSet.has(10);
has
