class CalculatorController {
    
    constructor (){
        this._locale = 'pt-BR';
        this._displayEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize();
    }


    initialize(){   
        this.setDisplayDateTime(); 
        
        setInterval(()=>{
           this.setDisplayDateTime();
        }, 1000);
    }

    get calculatorDisplay() {
        return this._displayEl.innerHTML;
    }

    set calculatorDisplay(value){
        this._displayEl.innerHTML = value; 
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    } 

    get currentDate(){
        return new Date();
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }
}   
