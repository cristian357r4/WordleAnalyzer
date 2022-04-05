import {getChars, sortArray} from "./utils";

export class WordleAnalyzer {
    words: string[];
    bestWord: string;
    constructor(words: string[]){
        this.words = words;
        this.bestWord = '';
    }

    distribucion(arrayPalabras: string[]){
        let distribucion: { [key: string]: number };
        distribucion = {};
        for(let i =0; i< arrayPalabras.length; i++){
            // si previamente ordenamos los caracteres de la palabra en un array
            let chars = sortArray(getChars(arrayPalabras[i]));
            for(let j = 0; j< chars.length; j++){
                let char = chars[j];
                // si no encuentra la clave significa que no se a agregado el objeto a la distribucion
                if(distribucion[char] === undefined){
                    distribucion[char] = 1;
                }else{
                    distribucion[char] = distribucion[char] + 1;
                }
            }
        }
        return  distribucion;
    }
    getRankWord(distribucionLetras: { [key: string]: number },words: string[]){
        let rank: { [key: string]: number } = {};
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let chars = getChars(word);
            let sum = 0;
            for (let j = 0; j < chars.length; j++) {
                let char = chars[j];
                sum += distribucionLetras[char];
            }
            rank[word] = sum;
        }
        return rank;
    }

    getMaxValue(distribucionByWord: { [key: string]: number }): number {
        let maxValue: number;
        // definimos el valor como 0 cambiaremos este valor si el valor almacenado en el objeto es mas alto que el
        // es mas alto que el anterior
        maxValue = 0;
        for (let key in distribucionByWord) {
            if (distribucionByWord[key] > maxValue) {
                maxValue = distribucionByWord[key];
            }
        }
        return maxValue;
    }

    getBestWordRanked(wordsRanked: { [key: string]: number }, value: number): { [key: string]: number } {
        let objeto: { [key: string]: number };
        objeto = {};
        for (let key in wordsRanked) {
            if (wordsRanked[key] === value) {
                objeto[key] = wordsRanked[key];
            }
        }
        return objeto;
    }
}