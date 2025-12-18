class TaxCalculator{
    
    constructor(){
        this.#rate = 15;
        this.state = 'TX';
        this.exempt = false;
    }
    
    
    calculate(){
        if(this.exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}


