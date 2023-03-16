const data = [
    {
        id:1,
        name:'Gustavo'
    },
    {
        id:2,
        name:'Victoria'
    }
]


const getData = () => new Promise((resolve, reject)=>{
    if (data.length === 0) {
        reject(new Error('Data is empty'))
    }
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

// getData()
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((error)=>{
//         console.log(error.message)
//     })

async function fetchedData(){
    const personas = await getData()
    console.log(personas)
}

fetchedData()