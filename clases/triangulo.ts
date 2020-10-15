class Triangulo{
    private _base: number
    private _lado2: number
    private _lado3: number
    private _altura: number

    constructor(base:number, lado2:number ,lado3:number ,altura:number){
        this._base = base
        this._lado2 = lado2
        this._lado3 = lado3
        this._altura = altura
    }

    getbase(){
        return this._base
    }

    getlado2(){
        return this._lado2
    }

    getlado3(){
        return this._lado3
    }

    getaltura(){
        return this._altura
    }

    getPerimetro(){
        return this._base+this._lado2+this._lado3
    }

    getArea(){
        return (this._base*this._altura)/2
    }

}
export{Triangulo}