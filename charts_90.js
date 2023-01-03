// 1. Recent activity heatmap
d3.json("report_90.json", function(data) {
  
    document.getElementById("updated").innerHTML = data.updated
  
    var colorscaleValue = [[0, "#ffffff"], [0.0001, "#b5e9dd"], [0.1, "#0bb890"], [1, "#2f4858"]];
    
    var records = [{
      z: data.activity_records.z,
      x: data.activity_records.x,
      y: data.activity_records.y,
      type: "heatmap",
      hoverongaps: true,
      colorscale: colorscaleValue,
      showscale: false
    }];
      
    var delivered = [{
      z: data.activity_delivered.z,
      x: data.activity_delivered.x,
      y: data.activity_delivered.y,
      type: "heatmap",
      hoverongaps: true,
      colorscale: colorscaleValue,
      showscale: false
    }];
  
    var errors = [{
      z: data.activity_errors.z,
      x: data.activity_errors.x,
      y: data.activity_errors.y,
      type: "heatmap",
      hoverongaps: true,
      colorscale: colorscaleValue,
      showscale: false
    }];
  
    var layout = {
      showlegend: false,
      margin: {l: 0, r: 0, b: 25, t: 50, pad: 0},
      yaxis: {automargin: true}
    };

    var config = {responsive: true};
    var data = [records, delivered, errors];
  
    Plotly.newPlot("activity", data[0], layout, config);
  
    var radios = document.querySelectorAll('input[name="activityRadio"]');
    radios.forEach(radio => radio.addEventListener("change", () => Plotly.newPlot("activity", data[parseInt(radio.value)], layout)));
  
  });
  
  
  // 2. Number of obituaries by source 
  d3.json("report_90.json", function(data) {
  
    var trace1 = {
      x: data.structure_records.x,
      y: data.structure_records.y,
      name: "Collected",
      type: "bar",
      orientation: "h",
      marker: {color: "#0bb890"}
    };
  
    var trace2 = {
      x: data.structure_delivered.x,
      y: data.structure_delivered.y,
      name: "Delivered",
      type: "bar",
      orientation: "h",
      marker: {color: "#33658a"}
    };
    
    var layout = {
      height: 550,
      margin: {l: 0, r: 0, b: 25, t: 50, pad: 0},
      barmode: "group",
      showlegend: true,
      legend: {"orientation": "h"},
      yaxis: {automargin: true}
    };

    var config = {responsive: true};
    
    Plotly.newPlot("sources", [trace1, trace2], layout, config);

  });
  
  
  // 3. Number of obituaries by date
  d3.json("report_90.json", function(data) {
  
    var weekly_data = [{
      x: data.series_records_weekly.x,
      y: data.series_records_weekly.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Collected",
      marker: {color: "#0bb890"}
    },
    {
      x: data.series_delivered_weekly.x,
      y: data.series_delivered_weekly.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Delivered",
      marker: {color: "#33658a"}
    },
    {
      x: data.series_errors_weekly.x,
      y: data.series_errors_weekly.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Errors",
      marker: {color: "#ef2d56"}
    }];
  
    var weekly_data_cumsum = [{
      x: data.series_records_weekly_cumsum.x,
      y: data.series_records_weekly_cumsum.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Collected",
      marker: {color: "#0bb890"}
    },
    {
      x: data.series_delivered_weekly_cumsum.x,
      y: data.series_delivered_weekly_cumsum.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Delivered",
      marker: {color: "#33658a"}
    },
    {
      x: data.series_errors_weekly_cumsum.x,
      y: data.series_errors_weekly_cumsum.y,
      type: "scatter",
      mode: "lines",
      line: {shape: "vh"},
      name: "Errors",
      marker: {color: "#ef2d56"}
    }];
    
    var layout = {
      margin: {l: 0, r: 0, b: 50, t: 50, pad: 0},
      barmode: "group",
      showlegend: true,
      legend: {"orientation": "h"},
      yaxis: {automargin: true}
    };

    var config = {responsive: true};
    var data = [weekly_data, weekly_data_cumsum];

    Plotly.newPlot("series", weekly_data, layout, config);
  
    var radios = document.querySelectorAll('input[name="seriesRadio"]');
    radios.forEach(radio => radio.addEventListener("change", () => Plotly.newPlot("series", data[parseInt(radio.value)], layout)));
  
  });
  
  
  d3.json("table.json", function(data) {
  
    $("#municipalities").DataTable( {
      data: data,
      columns: [
        { data: "municipality", title: "Municipality name", width: "25%"},
        { data: "obituaries_count", title: "Number of obituaries", width: "25%"},
        { data: "population_count", title: "Population", width: "25%"},
        { data: "obituaries_per_1000", title: "Obituaries per 1000 inhabitants", width: "25%"}
      ],
      "order": [[ 2, "desc" ]],
      "pageLength": 20
    });
  });
  
  
  
  