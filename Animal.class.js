export class Animal {

    #nome = ''
    #especie = ''
    #familia
    #nascimento
    #metrica = {}

    constructor(nome, especie) {
        this.#nome = nome
        this.#especie = especie
    }

    alimentacao() { }
    vacinar() { }

    get nome() {
        return this.#nome
    }

    set nome(nomea) {
        this.#nome = nomea.trim()
    }

}