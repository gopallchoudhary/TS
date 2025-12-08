function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
    }

    return `Chai order ${kind}`
}


function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai...`
    }
    if (size === "medium" || size === "large") {
        return `Extraa chai...`
    }
    return `Chai order #${size}`
}


class KulhadChai {
    serve() {
        return `Serving kulhad chai`
    }
}

class Cutting {
    serve() {
        return `Serving cutting chai`
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj.type != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving chai ${item.type} with ${item.sugar} sugar`
    }

    return `Serving custom chai ${item}`
}

// type 
type Masala = { type: "masala"; spicelevel: number }
type Ginger = { type: "ginger"; amount: number }
type Elaichi = { type: "elaichi"; aroma: number }


type Chai = Masala | Ginger | Elaichi

function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;

        case "elaichi":
            return `Elaichi chai`
            break

        case "ginger":
            return `Ginger Chai`
            break
    }
}

function brew(order: Masala | Ginger) {
    if ("spicelevel" in order) {
        // your code
    }
}


function isStringArray(arr: unknown): arr is string[] {

}

