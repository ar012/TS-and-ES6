var map = new Map();
map.set('name', 'Arif');
map.set('id', 123);
map.set('interest', 'JS, Python');


var res = map.get('name');

var res2 = map.get('id');

var res3 = map.get('interest');

var res4 = map.size;


var res5 = map.keys();

console.log(res5);


var res6 = map.values();

console.log(res6);

for (let key of map.keys()) {
  console.log("Map Key: " + key);
 }

 for (let element of map){
   console.log(element);
 }

 for (let [key, value] of map){
   console.log(key+" - "+value);
 }