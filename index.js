
let rate = 1.50
let dayRate = 10
let overStay = 500

class cars {
    constructor(registration, hoursParked) {
        this.registration = registration;
        this.hoursParked = hoursParked;
        this.charge = 0;
    }
    amountCharged() { 
        if (this.hoursParked  <= 8) { 
            return this.charge = this.hoursParked * rate; 
        }
        else if (this.hoursParked <= 24) {  
                this.hoursParked >= 8
                return this.charge = dayRate;
        }
        else if (this.hoursParked >= 24) {
                return this.charge = overStay
        }
        else {
            console.log("input error")
        }    
    }
}

let creditBalance = 100
let staffDiscount =  1
class staff extends cars {
    constructor(registration, hoursParked, staffNumber) {
        super(registration , hoursParked);
        this.staffNumber = staffNumber;
        this.staffCharge = 0; 
        this.creditBalance = 100
        this.startBalance = 100
    }  
    staffAmountCharge() { 
        this.staffCharge = this.hoursParked * staffDiscount 
    }

    Balance() {  

        // if (this.creditBalance <= this.staffCharge)
        this.creditBalance = this.creditBalance - this.staffCharge
    }   
}
const car1 = new cars ("xxxx", 5)
const car2 = new cars ("yyyy", 24)
const car3 = new cars ("zzzz", 25)
const car4 = new staff  ("zzzz", 6, 111)


car1.amountCharged()
console.log(car1)
car2.amountCharged()
console.log(car2)
car3.amountCharged()
console.log(car3)
car4.amountCharged()
car4.staffAmountCharge()
car4.Balance()
console.log(car4)