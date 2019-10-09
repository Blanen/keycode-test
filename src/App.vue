<template>
  <div id="app">
    <form> 
      <input name="testInput1" id="testInput1" v-model="testInput1"/>
      <br/>
      <input name="testInput2" id="testInput2" v-model="testInput2"/>
      <br/>
      <button v-shortkey.once="[]" @shortkey="shortKeyAction()" type="button">
        shortkey button
      </button>
      <br/>

      <button>
        submit button
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: function(){
    return {
      testInput1: null,
      testInput2: null
    }
  },
  methods: {
    shortKeyAction: () => {
      console.log("shortkey action")
    },
    submitForm: () => {
      console.log("submit form")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
