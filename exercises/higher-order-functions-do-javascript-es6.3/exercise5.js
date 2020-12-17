//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
    return names.reduce((cont, letra) => cont + letra.split('').reduce((cont, letra) => (letra === 'a' || letra === 'A') ? cont + 1 : cont ,0),0);
}

assert.deepStrictEqual(containsA(), 20);