// Contains all data processing

function runData(graphData, processData){
    let dataPromises = [];
    for (let g of graphData){
        // pushing each data set to dataPromises
        dataPromises.push(axios.get(g))
    }
    // after fetching all data set
    axios.all(dataPromises).then(function(response){
        let promises = [];
        //convert each data in each data set to json format, and store them in 'promises'
        for (let r of response){
            promises.push(csv({checkType:true}).fromString(r.data));
        }
        axios.all(promises).then(function(allData){
            processData(allData)
            // console.log(allData)          
        })
    })
} // end of runData function

function processData(allData){
    let finalData = mergeData(allData)
}


function mergeData(allData){
    //finalData to store the transformed array
    let finalData = []
    let diseaseData = allData[0]
    let tempData = allData[1]
    let humidityData = allData[2]
    let rainfallData = allData[3]
    let baseData = allData[4]

    // start of baseData for loop
    for (let b of baseData){
      
    // filtering of yearly cases
    let yearlyCases = 0;
    for (let d of diseaseData){  
        if (d.epi_week.indexOf(parseInt(b.year)) != -1 )  {
            yearlyCases += d.cases               
        }  
    }

let transformedObject = {
    year: b.year,
    Cases:yearlyCases
};

finalData.push(transformedObject)
    }// end of baseData for loop

console.log(finalData);
return finalData;
} // end of mergeData function