<script>
import { Vue, isVue3 } from 'vue-demi'

export default {
  name: 'HelloCmp',
  props: ['name'],
  render(h) {
    h = isVue3 ? Vue.h : h;
    return (
      <h2 class="hello-cmp"><i>Hello JSX {this.name}</i></h2>
    )
  }
}
</script>