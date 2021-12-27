
pi = 3.14;
const args = process.argv.slice(2);

function alanBul(r){

    alan = pi* r*r;

    console.log("Yarıçapı "+ r + " olan dairenin alanı: "+alan)

}

function cevreBul(r){

    cevre = 2*pi*r;

    console.log("Yarıçapı "+ r + " olan dairenin çevresi: "+cevre)

}

alanBul(args[0]);
cevreBul(args[0]);

module.exports = alanBul;
module.exports = cevreBul;
