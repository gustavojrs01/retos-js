const cronometro = ()=>{
    let cont = 1
    setInterval(()=>{
    
        console.log(cont)
        cont++
    },1000)
}

cronometro()