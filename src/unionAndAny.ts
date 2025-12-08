let subs: string = '1M'

let apiRequest: 'pending' | 'success' | 'error' = 'pending'
apiRequest = 'success'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle'

let orders = ['12', '23', '38', '53']

let currendOrder: string | undefined;

for (let order of orders) {
    if (order === '38') {
        currendOrder = order
        break
    }
}


console.log(currendOrder);