//const tinderUser = new Object()  // singleton object
const tinderUser = {}   // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "nitul"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "nitul@gmail.com",

        fullName:{
            userfullname:{
                 
                firstName: "nitul",
                lastName: "das",
        }

    }
}

//console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "nit@gmail.com"
    },
    {
        id: 1,
        email: "das@gmail.com"
    },
    {
        id: 1,
        email: "neooh@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); // to access the keys
//console.log(Object.values(tinderUser)); // to access the values of keys
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nitul"
}

//console.log(course.courseInstructor);

const {courseInstructor: inst} = course  // destructuring
//console.log(courseInstructor);
console.log(inst);

//JSON


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
