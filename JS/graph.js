function createGraph(finalData){

    //setting crossfilter on combined data
    let cfData = crossfilter(finalData);
    let yearDimension = cfData.dimension(f => f.year);
    // console.table(yearDimension.bottom(10))
    // drawing of cases graph
    casesGraph(cfData);
    tempGraph(cfData);
    rainGraph

    dc.renderAll();
}

function casesGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let caseGroup = yearDimension.group().reduceSum(y => y.Cases)

    // console.table(yearGroup.top(10))

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let indexGraph = new dc.LineChart("#graph");
    indexGraph.width(900)
        .height(500)
        .dimension(yearDimension)
        .group(caseGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Cases')
        .yAxis().ticks(10)
}

function tempGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let tempGroup = yearDimension.group().reduceSum(y => y.Temperature)

    // console.table(yearGroup.top(10))

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let indexGraph = new dc.LineChart("#graph2");
    indexGraph.width(900)
        .height(500)
        .dimension(yearDimension)
        .group(tempGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Cases')
        .yAxis().ticks(4)
}