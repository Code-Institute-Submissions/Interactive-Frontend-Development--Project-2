// Contains all data processing

function runData(graphData){
    let dataPromises = [];
    for (let g of graphData){
        dataPromises.push(axios.get(g))
        // console.log(dataPromises)
    }

    axios.all(dataPromises).then(function(response){
        let promises = [];
        // console.log(response);
        // console.log(JSON.stringify(response))

        for (let r of response){
            // promises.push(csv.fromString(r.data));
            promises.push(csv({checkType:true}).fromString(r.data));
        }
        axios.all(promises).then(function(allData){
            console.log(allData)
        })

    })
}