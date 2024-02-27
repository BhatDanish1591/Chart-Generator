function generateChart() {
    const chartType = document.getElementById('chartType').value;
    const dataInput = document.getElementById('dataInput').value;

    // Convert input data to an array
    const data = dataInput.split(',').map(Number);

    // Get chart container element
    const chartContainer = document.getElementById('chartContainer');
    
    // Clear previous chart if any
    chartContainer.innerHTML = '';

    // Create a canvas element for the chart
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    chartContainer.appendChild(canvas);

    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');

    // Generate chart based on the selected type
    switch (chartType) {
        case 'bar':
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map((_, i) => `Label ${i + 1}`),
                    datasets: [{
                        label: 'Data',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                }
            });
            break;
        case 'line':
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map((_, i) => `Label ${i + 1}`),
                    datasets: [{
                        label: 'Data',
                        data: data,
                        fill: false,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                }
            });
            break;
        case 'pie':
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: data.map((_, i) => `Label ${i + 1}`),
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }]
                }
            });
            break;
        default:
            alert('Invalid chart type');
    }
}
