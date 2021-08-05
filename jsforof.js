const outPutOfForOf=(data)=>{
    for(iteam of data) {
        console.log(iteam);
      }
  }

  const restContries=async()=>{
      let response=await fetch('https://restcountries.eu/rest/v2/alpha/col',{
        method:'GET'
      });
      let data=await response.json();
      outPutOfForEach(data.borders); // printing in for of

  }
  
  restContries(); // calling the function 
  