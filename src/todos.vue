<template>
    <div class="todos">
        <h1>todo list</h1>
        <ul>
            <li v-for="lang in languages" :key="lang">coding by {lang}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'todos',
    data() {
        return {
            languages: ['js', 'java', 'python', 'golang']
        }
    }
}
</script>

<style lang="scss" scoped>
.todos {
    h1 {
        color: #333;
        border-bottom: 1px dashed #ccc;
    }
    ul, li {
        list-style: none;
        line-height: 2;
        color: #888;
    }
}
</style>