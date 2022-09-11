 <script lang="ts">
 import { onMount } from "svelte"
 import type { Option } from "$lib/types/options.ts"
 export let id
 export let type = ""
 export let placeholder = ""
 export let value = ""
 export let name
 export let inputClass
 export let handleChange = () => {}


 export let options: Option[] = []

 onMount( () => {
   options.forEach( (option) => {
     if (option.checked) {
       handleChange({
         target: {
           name: name,
           value: option.value
         }
       })
     }
   })
 })

 </script>

 <div class="control">

   {#each options as option}
    <label class="radio">
      <input
        type="radio"
        name="{name}"
        checked="{option.checked}"
        disabled="{option.disabled}"
        value="{option.value}"
      />
      {option.label}
    </label>
  {/each}

 </div>
