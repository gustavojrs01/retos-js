function div(num){ 
    
    try {
        let a = num/0
        
    } catch (error) {
        console.error('error:',error.message)
    }
    
    
}

div(10)