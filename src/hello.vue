<script>
export default {
  name: 'HelloCmp',
  props: ['name'],
  render(h) {
    return (
      <h2 class="hello-cmp"><i>Hello JSX {this.name}</i></h2>
    )
  }
}
</script>