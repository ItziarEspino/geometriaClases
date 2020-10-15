class Circulo{
    private _radio:number

    constructor(radio:number){
        this._radio = radio
    }

    getradio(){
        return this._radio
    }

    getPerimetro(){
        return 2*Math.PI*this._radio
    }

    getArea(){
        return Math.PI*(this._radio*this._radio)
    }

}   
export{Circulo}