class TaxCalculator{
    #rate;
    
    constructor(){
        this.#rate = 15;
        this.state = 'TX';
        this.exempt = false;
    }

    #calculateExempt(rate) {
        return rate * 1.1;
    }

    #calculateNonExempt(rate) {
        return rate * 1.5;
    }
    
    calculate(){
        if(this.exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}



