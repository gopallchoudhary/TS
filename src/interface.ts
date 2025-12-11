type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: chaiOrder) {

}

function serveChai(order: chaiOrder) {

}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface cupSize {
    size: "small" | "large"
}

class Chai implements cupSize { // class does not accept the hard coded values of type
    size: "small" | "large" = "large"
}

// type Response = {OK: true} | {OK: false}
// class MyChai implements Response {
//     OK: boolean = true
// }

type BaseChai = { teaLeaves: number }
type Masala = { masala: number }

type MasalaChaii = BaseChai & Masala

const cup: MasalaChaii = {
    teaLeaves: 5,
    masala: 2
}

type User = {
    readonly username: string;
    bio?: string
}

const u1: User = {
    username: "Gopal",
}

type Config = {
    readonly appName: string // readonly -> ek baar set hona zaruri hai
    version: number
}

const cfg: Config = {
    appName: "MasterJii",
    version: 2.3
}

// cfg.appName = "Telegram"
