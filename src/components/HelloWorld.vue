<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: ''
    }
  },
  mounted () {
    this.axios.post('http://api.komavideo.com/news/list').then(body => {
      this.content = body.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
