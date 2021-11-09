<script>
import { isVue3 } from 'vue-demi'
import Hello from './hello';
import h3 from '@/utils/h3';

import './todos.scss';

export default {
    name: 'todos',
    data() {
        return {
            languages: ['js', 'java', 'python', 'golang']
        }
    },
    render(h) {
        h = isVue3 ? h3 : h;
        return (
            <div class="todos">
                <Hello name="alice alice-fine" />
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