class Cuadrado{
    private _lado: number

    constructor(lado : number){
        this._lado = lado
    }

    getlado(){
        return this._lado
    }

    getPerimetro(){
        return this._lado*4
    }

    getArea(){
        return (this._lado*this._lado)
    }

}
export{Cuadrado}