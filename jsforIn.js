const outPutOfForIn=(data)=>{
    for(iteam in data) {
        console.log(data[iteam]);
      }
  }

  const restContries=async()=>{
      let response=await fetch('https://restcountries.eu/rest/v2/alpha/col',{
        method:'GET'
      });
      let data=await response.json();
      outPutOfForEach(data.borders); // printing in for in

  }
  
  restContries(); // calling the function 
  