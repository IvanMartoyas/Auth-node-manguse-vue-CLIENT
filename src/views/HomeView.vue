<template>
  <div class="home">

        <button v-if="$store.getters.get_user.isAuth" @click="get_user">Пользователи</button>
        <table>
          <tr v-for="(item,i) in users" :key="i">
            <td>Mail: {{item.email}}</td>
            <td>Mail ctivated: {{item.isActivated}}</td>
          </tr>
        </table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomeView',
  data: () => ({
      users: {},
      isLogged: false
  }),
  computed: {
    // auth() {
    //   return this.$store.getters.get_user.isAuth;
    // }
  },
  mounted() {
    this.isLogged = this.$store.getters.get_user.isAuth
  },
  methods: {
    get_user() {
      this.$store.dispatch('get_users');
      this.users = this.$store.getters.get_users
    }
  },
  components: {
    isAuth() {
      return this.isLogged = this.$store.getters.get_user.isAuth;
    }
  }
}
</script>
<style lang="sass" scoped>
button
  padding: 0.5rem 1.2rem
  cursor: pointer
  border: 1px solid #ccc
table
  border: 1px solid #e7e7e7
  border-collapse: collapse
  margin:  0 auto
  margin-top: 1rem
  tr
    border: 1px solid #e7e7e7
  td 
    border: 1px solid #e7e7e7
    padding: 0.5rem 1rem
</style>