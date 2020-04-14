// Generic JS codes

// jQuery ready
$(function(){

// all the graph data
let graphData = [
    'data/weekly-infectious-disease-bulletin-cases.csv',
    'data/surface-air-temperature-monthly-mean.csv',
    'data/relative-humidity-monthly-mean.csv',
    'data/rainfall-monthly-total.csv',
    'data/base_template.csv' // manually created a base template to filter the years
    ];
    
    // MVC start of running all data
    runData(graphData, processData)

 
    // Single page application
    $('.content-page').hide();
    $('.page1').show();

    $('.nav-item').click(function(){
        let whichPage = $(this).data('pages')
        $('.content-page').hide();
        $('.page'+whichPage).show();
    }) // end of SAP


    //  Hover over event for symptoms list
    let symptomsList = $('ul li')
    $(symptomsList).hover(function(){
        $(this).css({
            "color": "red",
            "fontSize": "30px"
        })
    },function(){
        $(this).css({
            "color": "#274354",
            "fontSize": "20px"
        })
    }) // end of hover event


}) // end of jQuery ready


