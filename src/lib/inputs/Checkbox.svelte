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

  onMount( () => {
    options.forEach( (option) => {
      if (option.checked) {
        handleChange({
          target: {
            name: name,
            value: option.value,
          }
        })
      }
    })
  })

</script>

<style>
  .checkbox {
    margin-left: 10px;
  }

  .checkbox:first-child {
    margin-left: 0px;
  }
</style>

<div class="control">

  {#each options as option}
   <label class="radio">
     <input
       type="checkbox"
       class="checkbox"
       name="{name}"
       checked="{option.checked}"
       disabled="{option.disabled}"
       bind:group="{value}"
       value="{option.value}"
     />
     {option.label}
   </label>
 {/each}

</div>
