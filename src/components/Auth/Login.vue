<template>
  <form action="">
    <h1>Log In</h1>
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <button type="submit" @click.prevent="$store.dispatch('login',{email, password}); $router.push({ name: '/' });">login</button>
  </form>
</template>
<script>
export default {
  data: () => ({ 
    email: "ivanmart2017@yandex.ru",
    password: "12345",
  }),
  methods: {
    login() {
      this.$store.dispatch("log");
      alert("send");
    },
  },
  mounted(){
    let isLogin = this.$store.getters.get_user
 
    if(isLogin.isAuth) {// если пользователь уже авторизован
        this.$router.push({ name: 'logout' });
    }
  },
};
</script>
<style lang="sass" scoped src="@/components/Auth/AuthStyle.sass"></style>
