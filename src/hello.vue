<script>
import { isVue3 } from 'vue-demi'
import h3 from '@/utils/h3';

export default {
  name: 'HelloCmp',
  props: ['name'],
  render(h) {
    h = isVue3 ? h3 : h;
    return (
      <h2 class="hello-cmp"><i>Hello JSX {this.name}</i></h2>
    )
  }
}
</script>