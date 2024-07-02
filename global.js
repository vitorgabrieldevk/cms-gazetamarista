// Gráfico de Linha
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Acessos do site',
        data: [10, 15, 8, 12, 20, 25],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Suaviza as linhas
        fill: true
    }]
};

const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const lineChart = new Chart(lineCtx, lineConfig);


// Obtenha o contexto do canvas
const ctx = document.getElementById('multiLineChart').getContext('2d');

// Dados do gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
        {
            label: '1° A',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.0, // Suaviza as linhas
            fill: false
        },
        {
            label: '1° B',
            data: [10, 17, 6, 4, 7, 8],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '1° C',
            data: [9, 15, 5, 3, 10, 12],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '2° A',
            data: [15, 10, 9, 6, 8, 13],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '2° B',
            data: [7, 12, 11, 4, 5, 9],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '2° C',
            data: [11, 14, 8, 12, 10, 7],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '3° A',
            data: [16, 14, 12, 10, 8, 15],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '3° B',
            data: [14, 12, 11, 13, 10, 9],
            borderColor: 'rgba(199, 199, 199, 1)',
            backgroundColor: 'rgba(199, 199, 199, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        },
        {
            label: '3° C',
            data: [18, 16, 14, 12, 11, 10],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.0,
            fill: false
        }
    ]
};

// Configurações do gráfico
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Postagens por turma',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Clique na turma para selecionar a que deseja visualizar',
                font: {
                    size: 14
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Crie o gráfico
const multiLineChart = new Chart(ctx, config);