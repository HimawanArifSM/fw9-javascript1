let data = {
    id : 1,
    name : "Leane Graham",
    userName : "Bret",
    email : "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenbrough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}
let dataSaya={
    name : "Himawan",
    email: "himawanarif7@gmail.com",
    hobby: "memancing"
}
const dataNew={...data, ...dataSaya}

console.log(dataNew)

const {address}=data;
const {street, city} = address;
console.log(street + '\n' + city)