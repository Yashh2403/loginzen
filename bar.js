// bar.js
var chart = new ej.charts.Chart({
    title: 'Revenue By Location',
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "Locations"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Revenue For Novemner 2019"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                { Revenue: "Everette", visitors: 50000 },
                { Revenue: "Seattle", visitors: 5743 },
                { Revenue: "Lynnwood", visitors: 14048 },
                { Revenue: "Bother", visitors: 63500 },
                { Revenue: "Mukiteo", visitors: 27000 },
                { Revenue: "Edmonds", visitors: 4000 },
 
            ],
            xName: "Revenue",
            yName: "visitors"
        }
    ]
});

chart.appendTo("#container1");
var chart = new ej.charts.Chart({
    title: 'Revenue By Job Type',
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "Jobs"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Revenue For Novemner 2019"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                {Jobs: "Service Plumbing", visitors: 147000 },
                { Jobs: "Bid Work HVAC", visitors: 25700 },
                { Jobs: "Service HVAC", visitors: 48000 },
                { Jobs: "Bid Work Plumbing", visitors: 60000 },
                { Jobs: "HWT Replacement", visitors: 72500 },
                { Jobs: "Maintenance", visitors: 43280 },
                { Jobs: "Material Sale", visitors: 84000 }
 
            ],
            xName: "Jobs",
            yName: "visitors"
        }
    ]
});

chart.appendTo("#container2");

