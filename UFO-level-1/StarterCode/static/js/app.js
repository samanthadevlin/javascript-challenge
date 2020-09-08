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


