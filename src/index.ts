import words from "./dictionary";
import { WordleAnalyzer } from "./WordleAnalyzer";

/* creamos la estructura de nuestro objeto json distribucion = { "a": 0, .....}
 *
 * asi llenamos el objeto con la distribucionde las letras esta distribuicion sera el numero de repeticiones de cada letra
 * que sera tomado como el peso de la letra dentro del alfabeto.
*/
/*
 * 'a' = 2145; numero de repeticiones de la letra 'a' es igual al peso
 */

let wordAnalyzer = new WordleAnalyzer(words);

let distribucionLetras: { [key: string]: number };
//distribucionLetras = wordAnalyzer.distribucion(words);
distribucionLetras = wordAnalyzer.distribucion(words);
/*
NOTA: suponemos una distribucion de la siguiente forma: ejemplo demostrativo no corresponde a los datos reales
letra  | peso de la letra
________________
a      |  1123
b      |  1454
c      |  25456
.......
*/
/* Podemos pensar entonces en recorrer cada palabra del array words y hacer una suma de los pesos de las letras
 * para cada palabra y asi obtener el peso de la palabra , cada peso sumado le dara un peso a la palabra el cual
 * usaremos para identificar las palabras con mayor peso. Esto nos permitira saber cuales son las palabras que tienen
 * mas letras en comun de las palabras del array words
 */
let distribucionByWord: { [key: string]: number };
distribucionByWord = wordAnalyzer.getRankWord(distribucionLetras, words);
//console.log(distribucionByWord);

// nos disponemos a obtener el valor mas alto de todas las palabras
let maxValue: number;
maxValue = wordAnalyzer.getMaxValue(distribucionByWord);
//console.log(maxValue);
// usamos maxValue e imprimimos el objeto con ese valor
let mejorPalabra: {[key: string]: number};
mejorPalabra = wordAnalyzer.getBestWordRanked(distribucionByWord, maxValue);

console.log(`La mejor Palabra para iniciar el juego es '${Object.keys(mejorPalabra)[0]}' con un rank de ${Object.values(mejorPalabra)[0]}`);
