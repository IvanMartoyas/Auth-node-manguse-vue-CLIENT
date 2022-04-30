<template>
  <div id="app">
    <div class="message" v-if="user_data.isActivated">Ваш аккаунт не подтверждён почтой, на неё вам было отправленно.</div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/registration">registration</router-link> |
      <router-link to="/login">login</router-link>
    </nav>
    <div class="user_loged">
       {{user_data.isAuth? `Пользователь авторизован ${user_data.user.email}`: "Авторизуйтеь"}}
      <hr>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  async mounted() {// проверяю при первом запуске приложения авторизован ли пользователь
    await this.$store.dispatch('chechAuth');
  },
  computed: {
    user_data() {
      return this.$store.getters.get_user;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.message {
    background: #d53333;
    color: #fff;
    padding: 0.6rem;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
