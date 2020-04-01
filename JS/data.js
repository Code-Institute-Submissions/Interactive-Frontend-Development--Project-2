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

    //creating crossfilter for diseaseData
    let diseaseCF = crossfilter(diseaseData);
    let diseaseDimension = diseaseCF.dimension(d => d.disease)
    let yearDimension = diseaseCF.dimension(d => d.epi_week.substring(0,4))
    //filtering disease
    diseaseDimension.filter(function(item){
        return item == "Dengue Fever"
    })
    // console.table(yearDimension.top(50))

    let filteredGroup = yearDimension.group().reduceSum(d => d.cases)
    console.table(filteredGroup.top(50))

}