<script lang="ts">

  export let id
  export let type = ""
  export let placeholder = ""
  export let value = ""
  export let name
  export let inputClass
  export let handleChange = () => {}

  $: _inputClass = "input " + inputClass
</script>


<input
  id="{id}"
  name="{name}"
  class="{_inputClass}"
  type="{type}"
  placeholder="{placeholder}"
  value="{value}"
  on:change="{handleChange}"
/>
