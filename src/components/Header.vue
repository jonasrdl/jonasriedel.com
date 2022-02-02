<template>
    <div>
        <h1 class="name-heading">{{ name }}</h1>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/components/Header.scss';
</style>

<script>
export default {
    name: 'Header',
    props: ['name']
}
</script>
