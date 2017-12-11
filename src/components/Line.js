import {Bar} from 'vue-chartjs'

export default {
extends: Bar,
  mounted () {

    this.renderChart({
      labels: ['1° Trimestre', '2° Trimestre', '3° Trimestre', '4° Trimestre'],
      datasets: [
        {
          label: 'Óleo',
          backgroundColor: '#85c226',
          data: [100, 140, 140, 130]
        },{
          label: 'Papel',
          backgroundColor: '#dc3912',
          data: [1689, 34, 596, 748]
        },{
          label: 'Papelão',
          backgroundColor: '#7ac49f',
          data: [1089, 1135, 851, 1033]
        },{
          label: 'Plástico Duro',
          backgroundColor: '#fff974',
          data: [793, 820, 922, 631]
        },{
          label: 'Tetra Pak',
          backgroundColor: '#00923f',
          data: [225, 222, 162, 214]
        },{
          label: 'Alumínio',
          backgroundColor: '#e67816',
          data: [68, 209, 53, 45]
        },{
          label: 'Pet',
          backgroundColor: '#ffffff',
          data: [776, 883, 488, 528]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
