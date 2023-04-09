 const sumar = (a ,b) =>{
  return new Promise(res=>{
    res(a+b)
  })
 }

 sumar(5,5)
  .then(response=>{
    setTimeout(()=>{
      console.log(response)
    },3000)
  })