import {Bar} from 'vue-chartjs'

export default {
extends: Bar,
  mounted () {

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Óleo',
          backgroundColor: '#85c226',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Papel',
          backgroundColor: '#dc3912',
          data: [60, 55, 32, 10, 2, 12, 53]
        },{
          label: 'Papelão',
          backgroundColor: '#7ac49f',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Plástico Duro',
          backgroundColor: '#fff974',
          data: [60, 55, 32, 10, 2, 12, 53]
        },{
          label: 'Tetra Pak',
          backgroundColor: '#00923f',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Alumínio',
          backgroundColor: '#e67816',
          data: [60, 55, 32, 10, 2, 12, 53]
        },{
          label: 'Pet',
          backgroundColor: '#ffffff',
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}