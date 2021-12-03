window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Ryan's Skillset"
        },
        axisY: {
            title: "Years of Practice"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "White",
            legendText: "My Overall Experience",
            dataPoints: [{
                    y: 1,
                    label: "UX Design",
                    color: "#D81A44"

                },
                {
                    y: 2,
                    label: "Programming",
                    color: "#D81A44"
                },
                {
                    y: 4,
                    label: "UX Research",
                    color: "#D81A44"
                },
                {
                    y: 6,
                    label: "Neuroscience and Psychology",
                    color: "#D81A44"
                },
                {
                    y: 7,
                    label: "Sports and Exercise",
                    color: "#D81A44"


                },
            ]
        }]
    });
    chart.render();

}