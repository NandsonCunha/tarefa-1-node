// 3 
import { calculateAge } from "./q3.js";

const dateOfBirth = '2000-07-24'; 

const age = calculateAge(dateOfBirth);

console.log(`A idade é ${age} anos.`);

// 4

import {media, menor, maior} from './q4.js'

const notasTurma = [8.5, 7.0, 9.3, 6.8, 8.0];

const mediaNotas = media(notasTurma);
const menorNota = menor(notasTurma);
const maiorNota = maior(notasTurma);

console.log(`Média das notas: ${mediaNotas}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Maior nota: ${maiorNota}`);

// 5

import { arrayCresc } from "./q5.js"
import {arrayUniq} from "./q5.js"

let array = [1, 5, 6, 2, 4, 6, 2]

console.log(arrayCresc(array))
console.log(arrayUniq(array))

