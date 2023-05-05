<!-- inspiration/källor för kod nedanför: -->
<!-- https://stackoverflow.com/questions/37686802/javascript-search-string-in-array-then-count-occurrences -->
<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys -->

<script>
  import StatisticsChart from './StatisticsChart.vue'

  export default {
    data() {
      return {
        log: '',
        clicks: '',
        pc: '',
        allproducts: '',
        xbox: '',
        playstation: '',
        nintendo: '',
        sum: 0,
        result: false
      }
    },
    components: {
      StatisticsChart
    },
    methods: {
      a() {
        // Hämtar localstorage
        this.log = JSON.parse(localStorage.getItem('log'))

        // Sorterar värderna i arrayen och lägger in nrvärdet i en ny array

        console.log('log:', this.log)
        for (let n = 0; n < this.log.length; n++) {
          if (this.log[n].logClicks.includes('/all-products')) {
            this.allproducts++
          }
          if (this.log[n].logClicks.includes('/products/Xbox')) {
            this.xbox++
          }
          if (this.log[n].logClicks.includes('/products/Nintendo')) {
            this.nintendo++
          }
          if (this.log[n].logClicks.includes('/products/Playstation')) {
            this.playstation++
          }
          if (this.log[n].logClicks.includes('/products/PC')) {
            this.pc++
          }
        }
        this.$store.commit('clicksProducts', {
          allproducts: this.allproducts,
          xbox: this.xbox,
          nintendo: this.nintendo,
          pc: this.pc,
          playstation: this.playstation
        })
      },
      averagevalue() {
        let average = JSON.parse(localStorage.getItem('clicks'))
        this.sum =
          (average.nintendo +
            average.pc +
            average.allproducts +
            average.playstation +
            average.xbox) /
          Object.keys(average).length
        this.result = true
      }
    },
    created() {
      this.a()
    }
  }
</script>

<template>
  <h1>Statistics</h1>
  <p class="description">
    Here you can track the diffrent statistics from the clicks on the website.
    At the moment you can only track the clicks from the categories.
  </p>
  <div class="medel">
    <h2>Count</h2>
    <p>Do you wanna know the average value for all the clicks?</p>
    <button @click="averagevalue">Average Value</button>
    <span v-show="result"
      >The average value for all clicks is: <b>{{ this.sum }}</b></span
    >
  </div>
  <StatisticsChart />
</template>

<style scoped>
  .description {
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: larger;
  }
  .medel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    font-size: large;
  }
  button {
    background-color: rgb(50, 50, 93);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
    border: none;
    color: white;
    padding: 5px;
    width: 100px;
  }
  button:hover {
    background-color: rgb(102, 102, 153);
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
