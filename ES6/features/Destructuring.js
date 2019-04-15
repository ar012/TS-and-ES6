
const values = ['John', 'Smith'];
const [first, last] = values; 


console.log(first);

const address = { 
  street: '123 Flinders st',
  city: 'Melbourne',
  state: 'Victoria'
};

// const { street, city, state } = address;

// console.log(street);


const person = { 
  name: 'Mosh', 
  address: {
     billing: { 
        street: '123 Flinders st',
        city: 'Melbourne',
        state: 'Victoria'
     }
  }
};

const { street, city, state } = person.address.billing; 


console.log(street);

