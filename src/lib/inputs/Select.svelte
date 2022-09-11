<script lang="ts">
  import { onMount } from "svelte"
  import type { Option } from "$lib/types/options.ts"
  export let id
  export let type = ""
  export let placeholder = ""
  export let value = []
  export let name
  export let inputClass
  export let label = ""
  export let handleChange = () => {}
  export let options: Option[] = []
  export let multiple = false

  $: _inputClass = "select " + inputClass + multiple ? " is-multiple" : ""


</script>

<div class="{_inputClass}">
  <select name="{name}" {multiple}>
    {#each options as option}
      <option value="{option.value}">{option.label}</option>
    {/each}
  </select>
</div>
