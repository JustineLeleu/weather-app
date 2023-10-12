// Function to call to set the graph and display it

import Chart from 'chart.js/auto';

export function setGraphData(dataWeather)
{
    document.querySelector('#myChart').innerHTML = `
    <div class="mt-10 w-[200px] md:w-[400px] lg:w-[800px] h-[100px] md:h-[200px] lg:h-[400px] m-auto hidden md:block">
        <canvas class="" id="Chart"></canvas>
    </div>
    `

    const ctx = document.getElementById('Chart');


    let labels = getLabels(dataWeather);
    let tempData = getData(dataWeather);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Data',
            data: tempData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            showScale: false,
            plugins: {
              legend: {
                display: false
              }
            }
          },
    });
}

function getLabels(data)
{
    let labels = [];

    data.list.forEach(element => 
    {
        let x = element.dt_txt.split(' ')[1].split(':', 1);
        let y = element.dt_txt.split(' ')[0].split('-', 3);
        let label = `${y[2]}/${y[1]} ${x[0]}h`
        labels.push(label);
    });

    return labels;
}

function getData(data)
{
    let dataTemp = [];

    data.list.forEach(element => 
    {
        dataTemp.push(Math.round(element.main.temp));
    });

    return dataTemp;
}