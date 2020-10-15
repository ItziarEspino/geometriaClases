class Rectangulo{
    private _base: number
    private _altura: number

    constructor(base:number, altura:number){
        this._base = base
        this._altura = altura
    }

    getbase(){
        return this._base
    }

    getaltura(){
        return this._altura
    }

    getPerimetro(){
        return this._base*2+this._altura*2
    }

    getArea(){
        return (this._base*this._altura)
    }

}
export{Rectangulo}