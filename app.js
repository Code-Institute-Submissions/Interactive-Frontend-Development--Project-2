// all the graph data
let graphData = [
    'data/weekly-infectious-disease-bulletin-cases.csv',
    'data/surface-air-temperature-monthly-mean.csv',
    'data/relative-humidity-monthly-mean.csv',
    'data/rainfall-monthly-total.csv',
    'data/base_template.csv', // manually created a base template to filter the years
    'data/dengue-deaths.csv'
];

$(function(){

    runData(graphData, processData)

    $('.content-page').hide();
    $('.page1').show();

    // Single page application
    $('.nav-item').click(function(){
       
        let whichPage = $(this).data('pages')
        console.log(whichPage)
        $('.content-page').hide();
        $('.page'+whichPage).show();
    })
})



