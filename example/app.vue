<template>
    <div class="example-div">
        <h1>{{msg}}</h1>
        <h2>test vue-todos</h2>
        <todos />
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'hello-vue'
        }
    }
}
</script>