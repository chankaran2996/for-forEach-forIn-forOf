const outPutOfForEach=(data)=>{
    data.forEach((iteam)=>{
        console.log(iteam);
      });
  }

  const restContries=async()=>{
      let response=await fetch('https://restcountries.eu/rest/v2/alpha/col',{
        method:'GET'
      });
      let data=await response.json();
      outPutOfForEach(data.borders); // printing in forEach

  }
  
  restContries(); // calling the function 
  