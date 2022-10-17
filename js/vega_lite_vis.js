var spec1 = "js/assgm2chart1.json";
var spec2 = "js/assgm2chart2.json";
var spec3 = "js/assgm2chart3.json";
var spec4 = "js/assgm2chart4&5.json";
var spec6 = "js/assgm2chart6c.json";

vegaEmbed('#chart1', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);

vegaEmbed('#chart2', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);

vegaEmbed('#chart3', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);

vegaEmbed('#chart4n5', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);

vegaEmbed('#chart6', spec6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);
