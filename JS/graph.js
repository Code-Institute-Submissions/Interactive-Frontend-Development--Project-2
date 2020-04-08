function createGraph(finalData){

    //setting crossfilter on combined data
    let cfData = crossfilter(finalData);
    let yearDimension = cfData.dimension(f => f.year);
  
    // drawing of cases graph
    casesGraph(cfData);
    tempGraph(cfData);
    rainGraph(cfData);
    humidityGraph(cfData);

    // apply_resizing(casesGraph, 20, 100);
    
    dc.renderAll();
}

// When detect less than 768 pixel screen size
function resizing(graphname){
    if(window.matchMedia("(max-width: 767px)").matches){
        // apply responsive resizing to fit mobile screen size
        apply_resizing(graphname, 20, 100);
    } 
}

function casesGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let caseGroup = yearDimension.group().reduceSum(y => y.Cases)

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let casesGraph = new dc.LineChart("#graph");
    casesGraph.width(700)
        .height(300)
        .dimension(yearDimension)
        .group(caseGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Cases')
        .yAxis().ticks(10);

        resizing(casesGraph);
        
}

function tempGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let tempGroup = yearDimension.group().reduceSum(y => y.Temperature)

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let tempGraph = new dc.LineChart("#graph2");
    tempGraph.width(700)
        .height(300)
        .dimension(yearDimension)
        .group(tempGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Temperature')
        .yAxis().ticks(20)

        resizing(tempGraph);
}

function rainGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let rainGroup = yearDimension.group().reduceSum(y => y.Rainfall)

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let rainGraph = new dc.LineChart("#graph3");
    rainGraph.width(700)
        .height(300)
        .dimension(yearDimension)
        .group(rainGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Rainfall')
        .yAxis().ticks(20)

        resizing(rainGraph);
}

function humidityGraph(cfData){
    let yearDimension = cfData.dimension(f => f.year);
    let humidGroup = yearDimension.group().reduceSum(y => y.Humidity)

    let minDate = yearDimension.bottom(1)[0].year;
    let maxDate = yearDimension.top(1)[0].year;

    let humidityGraph = new dc.LineChart("#graph4");
    humidityGraph.width(700)
        .height(300)
        .dimension(yearDimension)
        .group(humidGroup)
        .x(d3.scaleTime().domain([minDate, maxDate]))
        .xAxisLabel('Year')
        .yAxisLabel('Humidity')
        .yAxis().ticks(20)

        resizing(humidityGraph);
}