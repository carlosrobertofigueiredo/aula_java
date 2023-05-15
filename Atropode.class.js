import {Animal} from "./Animal.class.js"

export class Atropode extends Animal {
    
    #pelos
    #expecVida
    #habitat

    constructor(nome, especie, pelos){
        super (nome, especie)
        this.#pelos = pelos
    }

    get pelos(){
        return this.#pelos
    }
  
        
    get expecVida(){
        return this.#expecVida
    }

    get habitat(){
        return this.#habitat
    }


    set pelos(pelos) {
        this.#pelos = pelos
    }

    set expecVida(vida){
        this.#expecVida = vida
    }

    set habitat(habitat){
        this.#habitat = habitat
    }
}