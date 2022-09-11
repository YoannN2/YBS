<script lang="ts">
/**
 * NOT YET IMPLEMENTED, this is a mess
 * TODO:
 * MAKE A TOTALLY DIFFERENT FUCKING WAY TO UPLOAD FILES TO THE SERVER
 * Read this : https://akashmittal.com/upload-file-svelte/
 */

 export let id
 export let type = ""
 export let placeholder = ""
 export let value = ""
 export let name
 export let inputClass
 export let handleChange = () => {}

 export let fileLabel = "Choose a file..."

 let files
 function _handleChange(e) {
   value = e.target.files[0].name

   //handleChange(e)
 }

</script>

<div class="file has-name is-boxed">
 <label class="file-label">
   <input
      class="file-input"
      type="file"
      name="resume"
      on:change|stopPropagation="{_handleChange}"
      placeholder="{placeholder}"
      bind:files="{files}"
    >
   <span class="file-cta">
     <span class="file-icon">
       <i class="fas fa-upload"></i>
     </span>
     <span class="file-label">
       {fileLabel}
     </span>
   </span>
   <span class="file-name">
     {value}
   </span>
 </label>
</div>
