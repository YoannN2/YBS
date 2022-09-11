<script lang="ts">

  export let id
  export let type = ""
  export let placeholder = ""
  export let value = ""
  export let name
  export let inputClass
  export let handleChange = () => {}

  $: _inputClass = "textarea " + inputClass

</script>


<textarea
  id="{id}"
  name="{name}"
  class="{_inputClass}"
  placeholder="{placeholder}"
  on:change="{handleChange}"
>
  {value}
</textarea>
