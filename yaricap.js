
pi = 3.14;
const args = process.argv.slice(2)

function alanBul(r){

    alan = pi* r*r;

    console.log("Yarıçapı "+ r + " olan dairenin alanı: "+alan)

}

alanBul(args[0]);