import lodash from "lodash"

export function arrayCresc(array){
    return lodash.sortBy(array)
}

export function arrayUniq(array){
    return lodash.uniq(array)
}

export function arrayPares(array) {
    return lodash.filter(array, (numero) => numero % 2 === 0)
}

export function arrayDobra(array){
    return lodash.map(array, (numero) => numero * 2) 
}

export function somaArray(array){
    return lodash.sum(array)
}

