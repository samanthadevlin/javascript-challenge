// from data.js
var tableData = data;

// YOUR CODE HERE!
 // load the table
var tbody = d3.select("tbody");

// append the table

function result(filterData){
    //Clear the html
    tbody.html("")
    filterData.forEach(report => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

result(tableData)

// first basic filter/search //
var date_filter = d3.select("#filter-btn");
var reset_filter = d3.select("#reset-btn");

// input variables to the date box (button)

var date_input = d3.select("#datetime");

// filter the data by using the function

date_filter.on("click", function(){
    d3.event.preventDefault();
    var date_value = date_input.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.datetime===date_value);
    result(response)
})

// Function to reset the table after input 
reset_filter.on("click", function(){
    tbody.html("")
    result(tableData)
    date_input.property("value", "")
})

/////////// Second part /////
// input variables to the date box (button)
var city_input = d3.select("#city");

// filter the data by using the function

city_filter.on("click", function(){
    d3.event.preventDefault();
    var city_value = city_input.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.city===city_value);
    result(response)
})

// input variables to the date box (button)

var state_input = d3.select("#state");

// filter the data by using the function

state_filter.on("click", function(){
    d3.event.preventDefault();
    var state_value = state_input.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.state===state_value);
    result(response)
})

// input variables to the date box (button)

var country_input = d3.select("#country");

// filter the data by using the function

country_filter.on("click", function(){
    d3.event.preventDefault();
    var country_value = country_input.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.country===country_value);
    result(response)
})

// input variables to the date box (button)

var shape_input = d3.select("#shape");

// filter the data by using the function

shape_filter.on("click", function(){
    d3.event.preventDefault();
    var shape_value = shapeinput.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.shape===shape_value);
    result(response)
})