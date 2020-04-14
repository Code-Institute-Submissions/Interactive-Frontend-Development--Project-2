// Contains all data processing

// MVC 
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
        })
    })
} // end of runData function

// MVC
function processData(allData){
    let finalData = mergeData(allData)
    createGraph(finalData);
}

// MVC
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
        let yearlyCases = 0;
        let yearlyAverageTemp = 0;
        let yearlyAverageHumidity = 0;
        let yearlyAverageRainfall = 0;

        // filtering of cases data 
        for (let d of diseaseData){  
            if (d.epi_week.indexOf(parseInt(b.year)) != -1 )  {
                yearlyCases += d.cases               
            }  
        }
        // filtering of temperature data
        for (let t of tempData){
            if (t.month.indexOf(parseInt(b.year)) != -1 ){
                yearlyAverageTemp += t.mean_temp
            } 
        }
        // average of the monthly temperature
        yearlyAverageTemp = yearlyAverageTemp/12


        // filtering of humidity data
        for (let h of humidityData){
            if (h.month.indexOf(parseInt(b.year)) != -1 ){
                yearlyAverageHumidity += h.mean_rh
            }      
        }
        // average of the monthly humidity
        yearlyAverageHumidity = yearlyAverageHumidity/12

        // filtering of rainfall data
        for (let r of rainfallData){
            if (r.month.indexOf(parseInt(b.year)) != -1 ){
                yearlyAverageRainfall += r.total_rainfall
            }
        }

        //storing of the transformed object
        let transformedObject = {
            year: b.year,
            Cases:yearlyCases,
            Temperature: yearlyAverageTemp,
            Humidity: yearlyAverageHumidity,
            Rainfall: yearlyAverageRainfall
        };

        // pushing transformedObject to finalData array
        finalData.push(transformedObject)
    }// end of baseData for loop
    return finalData;
} // end of mergeData function