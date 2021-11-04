<script>
import Hello from './hello';

export default {
    name: 'todos',
    data() {
        return {
            languages: ['js', 'java', 'python', 'golang']
        }
    },
    render(h) {
        return (
            <div class="todos">
                <Hello name="alice" />
                <h1>TODO LIST ShowCase</h1>
                <ul>
                    {this.languages.map(language => {
                        return <li key={language}>CODING BY {language}</li>
                    })}
                </ul>
            </div>
        )
    }
}
</script>

<style lang="scss" scoped>
.todos {
    h1 {
        color: orangered;
        border-bottom: 1px dashed #ccc;
    }
    ul, li {
        list-style: none;
        line-height: 2;
        color: burlywood;
    }
}
</style>