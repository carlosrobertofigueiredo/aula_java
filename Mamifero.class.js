import {Animal} from "./Animal.class.js"

export class Mamifero extends Animal {
    
    #pelos
    #saborDoLeite
    #expecVida
    #habitat

    constructor(nome, especie, pelos){
        super (nome, especie)
        this.#pelos = pelos
    }

    get pelos(){
        return this.#pelos
    }
  
    get saborDoLeite(){
        return this.#saborDoLeite
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

    set saborDoLeite(sabor){
        this.#saborDoLeite = sabor
    }

    set expecVida(vida){
        this.#expecVida = vida
    }

    set habitat(habitat){
        this.#habitat = habitat
    }
}