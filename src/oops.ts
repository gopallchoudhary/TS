// class Chai {
//     flavour: string
//     price: number

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalaChai = new Chai("Ginger", 30)

class Chai {
    public flavour: string = "masala chai"

    private secretIngredients: string = "cardamom"
    protected capacity: number = 230

    reveal() {
        return this.secretIngredients
    }
}
const c = new Chai()

c.reveal()


class Shop {
    protected shopName: string = "chai corner"

}

class Branch extends Shop {
    getName() {
        return this.shopName
    }
}

new Branch()


class Wallet {
    #balance = 100   // # -> private

    getBalance() {
        return this.#balance
    }
}
const w = new Wallet()


class Cup {
    readonly capacity: number = 250 // readonly -> can assign only once and futher cannot be changed

    constructor(capacity: number) {
        this.capacity = capacity
    }
}


class ModernChai {
    private _sugar: number = 2;

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too sweet")

        this._sugar = value
    }
}

class EkChai {
    static shopName = "Chaicode cafe"
    // static can only be accessed by class not objects

    constructor(public flavour: string) {
        this
    }
}

console.log(EkChai.shopName);

// abstract class -> we don't want to create any object this type of class

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log("Brewing Chai");

    }
}

// composition concept
class Heater {
    heat() { }
}

class ChaiMaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat
    }
}