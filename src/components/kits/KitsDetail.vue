<template>
    <div>
        <h1>kits detail</h1>
        <p>{{detail}}</p>
    </div>
</template>

<script>
export default {
  name: 'KitsDetail',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.detail = this.getKitsDetail(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.detail = this.getKitsDetail(to.params.uid)
    next()
  },
  methods: {
    getKitsDetail (uid) {
      switch (uid) {
        case '1':
          return {uid: 1, name: 'james', point: 30}
        case '2':
          return {uid: 2, name: 'zimuge', point: 38}
        default:
          return {uid: -1}
      }
    }
  }
}
</script>
