const prompt = require('prompt-sync')();
const axios = require('axios').default;

async function getCurrency(base) { 
    let url = 'https://api.exchangerate.host/latest?base='+base; 
    return await axios.get(url);
}
  
  (async () => {
    // console.log(await getCurrency('BRL')) 
    base = ['BRL','EUR','USD']  
    var c = ''
    while (!base.includes(c)){
        c = prompt("Set currency base ("+base+"): ")
        c = c.toUpperCase();
    }
    console.log('Checking....')
    let resp = await getCurrency(c);
    console.log('Currency: '+c)
    console.log('values:')
    console.log("BRL: "+resp.data.rates[base[0]])
    console.log("EUR: "+resp.data.rates[base[1]])
    console.log("USD: "+resp.data.rates[base[2]])
  })()

