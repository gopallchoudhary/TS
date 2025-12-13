interface chaiType {
    name: string,
    price?: number,
    isHot: boolean
}

const chai: chaiType = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const gingerTea: Tea = {
    name: "Ginger tea",
    price: 20,
    ingredients: ["tea leaves", "sugar", "milk"]
}

type Cup = { size: string }
let smallCup: Cup = {
    size: "200ml"
}

let bigCup = { size: "500ml", material: "steel" }
smallCup = bigCup


type Brew = { brewTime: number }
let chaiBrew = { brewTime: 5, beans: "Africa" }
let coffeeBrew: Brew = chaiBrew



type User = {
    username: string,
    password: string
}

const u: User = {
    username: "Gopal",
    password: "12345"
}


type Item = {
    name: string,
    quantity: number
}

type Address = {
    street: string,
    pin: number
}

type Order = {
    id: string,
    item: Item[],
    address: Address[]
}

const order1: Order = {
    id: "sldjf232lj3",
    item: [{ name: "Laptop", quantity: 3 }, { name: "mobile", quantity: 3 }],
    address: [{ street: "Baker street 221B", pin: 493555 }, { street: "sindhya nagar", pin: 23923 }]
}

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

function updateChai(updates: Partial<Chai>) { // makes all the fields optional
    console.log(`Updating chai with... ${updates}`);
}

updateChai({ name: "Lemon Tea" })


type ChaiOrder = {
    name?: string,
    price?: number,
    isHot?: boolean
}

const placeOrder = (order: Required<ChaiOrder>) => { // makes all the fields required
    console.log(order);
}

type Chaha = Pick<ChaiOrder, "name" | "price">

type ChaiNew = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string[]
}


type PublicChai = Omit<ChaiNew, "secretIngredients"> // except secretIngredients

