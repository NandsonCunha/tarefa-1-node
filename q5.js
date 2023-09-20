import lodash from "lodash"

export function arrayCresc(array){
    return lodash.sortBy(array)
}

export function arrayUniq(array){
    return lodash.uniq(array)
}

