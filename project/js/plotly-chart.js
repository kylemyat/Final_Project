// Load local JSON data
fetch('./data/feature_importances_data.json')
  .then(response => response.json())
  .then(jsonData => {
    const featureNames = jsonData.map(item => item.Feature);
    const importanceValues = jsonData.map(item => item.Importance);

    // Color palette
    const colors = [
      'rgba(0, 48, 92, 0.6)',    // Cool Black
      'rgba(0, 86, 139, 0.6)',   // Medium Electric Blue
      'rgba(18, 120, 170, 0.6)', // Celadon Blue
      'rgba(33, 129, 162, 0.6)', // Steel Blue
      'rgba(61, 162, 171, 0.6)', // Turquoise Blue
      'rgba(86, 174, 160, 0.6)', // Sage
      'rgba(120, 190, 173, 0.6)',// Mint Green
      'rgba(156, 206, 180, 0.6)',// Light Sea Green
    ];

    const data = [{
      x: importanceValues,
      y: featureNames,
      type: 'bar',
      orientation: 'h',
      marker: {
        color: colors,
        line: {
          color: 'rgba(50, 171, 96, 1.0)',
          width: 1,
        },
      },
    }];

    const layout = {
      title: 'Feature Importances',
      xaxis: {
        title: 'Importance',
      },
      yaxis: {
        title: 'Feature',
        automargin: true,
      },
      margin: {
        l: 150,  // Adjust left margin for long feature names
      },
    };

    Plotly.newPlot('chart-container', data, layout);
  })
  .catch(error => console.error('Error loading JSON data:', error));
