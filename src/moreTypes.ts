let response:any = "42"
let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "keep Going"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);


// any and unknown 

let value: any
value = "gopal"
value = [1, 2, 3, 4, 5]
value = 2.4
value.toUpperCase() // it is not possible in unknown

let newValue: unknown

newValue = "typescript"
newValue = [1, 2, 3, 4, 5]
newValue = 56

if (typeof newValue === 'string') {
    newValue.toUpperCase()
}


try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}

const data: unknown = "Learning typescript"
const strData: string = data as string


type Role = "admin" | "user" | "superadmin"

function redirectBasedRole(role: Role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return
    }

    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return
    }
    role;
}


function neverReturn(): never {
    while (true) { }
}