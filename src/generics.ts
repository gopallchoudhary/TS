function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Gopal")
wrapInArray(42)
wrapInArray({ flavour: "Ginger" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("Gopal", "Meera")
pair("age", 24)
pair("subjects", ["maths", "science", "english"])
pair("chai", { flavour: "masala", price: 30 })

// generics in interface

interface Box<T> {
    content: T
}

const box1: Box<number> = { content: 23 }
const box2: Box<string> = { content: "box2" }

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{ flavour: string }> = {
    status: 200,
    data: { flavour: "masala" }
}