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

    // filtering disease data
    for (let d of diseaseData){
        // if (d.disease != 'Dengue Fever'){
        //     continue;
        // }
        
        // filtering of yearly cases

    let yearlyAverageCases = 0;
    for (let d of diseaseData){
        let x = 0;
        let startYear = 2012
        if (d.epi_week.indexOf(parseInt(startYear) + x) != -1  && (d.disease == 'Dengue Fever')){
            yearlyAverageCases += d.cases
            x++ 
        }

        // console.log(d.epi_week.indexOf(parseInt(startYear)))
    }

    // yearlyAverageCases = yearlyAverageCases/52 ;

console.log(yearlyAverageCases)



    }// end of for loop




}