
  const countries = ['Germany',"United States","Turkey"];

  const listCountries = () => {
   countries.forEach((country) =>{

    console.log(country);

   });
  };
  

    const addCountry = (c) => {
    const promise1 = new Promise((resolve, reject) => {
        countries.push(c);
      resolve(countries);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };

  async function allCountries() {
    try {
      await addCountry('Holland');
      listCountries();
    } catch (error) {
      console.log(error);
    }
  }

allCountries();



