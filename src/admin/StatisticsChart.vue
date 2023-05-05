<!-- https://www.chartjs.org/docs/latest/charts/bar.html, https://vue-chartjs.org/guide/#introduction -->

<script>
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  )

  export default {
    data() {
      const categorydata = JSON.parse(localStorage.getItem('clicks'))

      return {
        categorydata,
        chartData: {
          labels: ['Nintendo', 'All Products', 'Xbox', 'Playstation', 'PC'],
          datasets: [
            {
              label: 'Clicks',
              data: [
                categorydata.nintendo,
                categorydata.allproducts,
                categorydata.xbox,
                categorydata.playstation,
                categorydata.pc
              ],
              backgroundColor: '#B36BD2',
              Color: '#000000'
            }
          ]
        },

        chartOptions: {
          responsive: true
        }
      }
    },
    name: 'BarChart',
    components: {
      Bar
    }
  }
</script>

<template>
  <h1>Number of clicks on categories</h1>
  <p>The bar represents the number of clicks on the diffrent category</p>
  <div v-if="categorydata !== null">
    <Bar id="clicks" :options="chartOptions" :data="chartData" />
  </div>
</template>

<style scoped>
  div,
  p {
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding: 20px;
  }
  #clicks {
    max-width: 100%;
    background-color: white;
    color: black;
  }
</style>
