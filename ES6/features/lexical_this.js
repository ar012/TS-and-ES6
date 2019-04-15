const obj = {
    name: 'selftics',
    print: function () {
        console.log(this)
    }
}
console.log(obj.name)
console.log(obj.print())

// const obj2 = {
//     name: 'selftics',
//     print: function() {
//        setTimeout(function() {
//            console.log(this)
//        }.bind(this), 1000); 
//     }
// }

const obj2 = {
    name: 'selftics',
    print: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

obj2.print()

const obj3 = {
    name: 'selftics',
    print: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
}

obj3.print()

console.log(2 + 3);