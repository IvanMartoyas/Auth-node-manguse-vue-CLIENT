<template>
  <form>
    <h1>Log Out</h1>
    <button type="submit" @click.prevent="$store.dispatch('logout'); $router.push({ path: '/login' });">Выйти</button>
  </form>
</template>
<style lang="sass" scoped src="@/components/Auth/AuthStyle.sass">

</style>