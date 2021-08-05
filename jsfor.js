const outPutOfFor=(data)=>{
    for(i=0;i<data.length;i++) {
      console.log(data[i]);  //display
    }
  }

  const restContries=async()=>{
      let response=await fetch('https://restcountries.eu/rest/v2/alpha/col',{
        method:'GET'
      });
      let data=await response.json();
      outPutOfFor(data.borders); // printing in for 

  }
  
  restContries(); // calling the function 
  