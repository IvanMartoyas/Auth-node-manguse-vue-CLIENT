<template>
    <form action="">
        <h1>Registration</h1>
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <button type="submit" @click.prevent="$store.dispatch('registration',{email, password}); $router.push({ name: '/login' });" >Send</button>
    </form>
</template>
<script>
export default {

    data: () => ({
        email: '',
        password: ''
    }),
    methods:{
        registration() {
            alert("send")
        }
    },
    mounted(){
        let isLogin = this.$store.getters.get_user
    
        if(isLogin.isAuth) {// если пользователь уже авторизован
            this.$router.push({ name: '/' });
        }
    },
}
</script>
<style lang="sass" scoped src="@/components/Auth/AuthStyle.sass">
    
</style>