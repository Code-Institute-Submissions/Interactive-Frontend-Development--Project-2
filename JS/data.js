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



    /*
    //creating crossfilter for diseaseData
    let diseaseCF = crossfilter(diseaseData);
    let tempCF = crossfilter(tempData);
    let diseaseDimension = diseaseCF.dimension(d => d.disease)
    let yearDimension = diseaseCF.dimension(d => d.epi_week.substring(0,4))
   
    //filtering disease data
    diseaseDimension.filter(function(item){
        return item == "Dengue Fever"
    })
    // console.table(yearDimension.top(10))
    let filteredDiseaseGroup = yearDimension.group().reduceSum(d => d.cases)
    console.table(filteredDiseaseGroup.top(50))
    // console.log(filteredDiseaseGroup)
    let tempDimension = tempCF.dimension(d => d.mean_temp)
    console.table(tempDimension.top(50))

    let testingDimension = diseaseCF.dimension(tempCF => tempCF.mean_temp);
    console.table(testingDimension.top(50))
    console.table(yearDimension.top(50))

    // let tempCF = crossfilter(tempData);
    // console.log(tempCF)
    // console.log(tempData)
    // let tempDimension = tempCF.dimension(d=>d.mean_temp)
    // console.table(tempDimension.top(50))

    // filteredDiseaseGroup.add(tempDimension)
*/


    // filtering disease data
    for (let t of tempData){
        // if (d.disease != 'Dengue Fever'){
        //     continue;
        // }
        
        // filtering of yearly cases

    let yearlyCases = 0;
    // let count = 0;
    for (let d of diseaseData){
        // let startYear = d.epi_week.substring(0,4)
        if (d.epi_week.indexOf(parseInt(t.month)) != -1 )  {
            yearlyCases += d.cases  
            // count++          
        }

        // console.log(d.epi_week.indexOf(parseInt(startYear)))
    }

    // yearlyAverageCases = yearlyAverageCases/52 ;

// console.log(yearlyAverageCases)
// console.log(d.epi_week.substring(0,4))


let transformedObject = {
    year: t.month,
    Cases:yearlyCases
    // average_index: average_index
};
finalData.push(transformedObject)
    }// end of for loop

console.log(finalData);

}