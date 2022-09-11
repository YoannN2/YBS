<script lang="ts">
  import Input from '$lib/inputs/Input.svelte'
  import { getContext, onMount } from 'svelte'
  import { v4 as uuidv4 } from 'uuid'
  import { getInputClass, getFieldClass, getControlClass } from '$lib/inputs/cssClasses'
  import { fieldMap } from '$lib/fieldMap.ts'
  import type { Option } from "$lib/types/options.ts"

	export let name = ""
	export let label = ""
  export let type = "text"
  export let placeholder = ""
  export let help = ""
  export let valid = true
  export let touched = false
  export let validMessage = ""
  export let icon = ""
  export let options: Option[] = []
  export let fileLabel = ""

  export let multiple = false
  const formData = getContext("formData")
  const errors = getContext("errors")

  const uuid = uuidv4()


  let defaultValue = ""

  $: error = name ? $errors[name] : {}

  $: hasError = Object.keys($errors).includes(name) && Object.keys($errors[name]).includes("message")
  $: isValid = !hasError && touched
  $: inputClass = getInputClass(isValid, hasError)
  $: fieldClass = getFieldClass($$slots.addons)
  $: controlClass = getControlClass(icon, isValid, hasError, $$slots.addons)
  $: Component = fieldMap(type)

  // Initialize data from formData
  onMount(() => {
    defaultValue = formData[name] || ""
  })

  function handleChange(e) {
    touched = true
  }


</script>

{#if label}
  <div class="field">
    <label class="label" for="{uuid}">{label}</label>
  </div>
{/if}

<div class="{fieldClass}">

  <div class="{controlClass}">

    <svelte:component this={Component}
      id="{uuid}"
      value="{defaultValue}"
      name="{name}"
      type="{type}"
      placeholder="{placeholder}"
      handleChange="{handleChange}"

      {inputClass}
      {options}
      {fileLabel}
      {multiple}
    />

    <!-- Icons -->
    <span class="icon is-right">
      {#if isValid}
        <i class="fas fa-check"></i>
      {:else if hasError}
        <i class="fas fa-exclamation-triangle"></i>
      {/if}
    </span>

    {#if icon}
      <span class="icon is-left">
        <i class="{icon}"></i>
      </span>
    {/if}

  </div>

  {#if $$slots.addons}
    <div class="control ">
      <slot name="addons" />
    </div>
  {/if}

  <!-- Help messages (Error, Valid, Help) -->




</div>

<div class="field">

  {#if hasError}
    <p class="help is-danger">{$errors[name].message}</p>
  {:else if help && !isValid}
    <p class="help">{help}</p>
  {/if}

</div>
<!-- <pre>
  hasError: {hasError}
  isValid: {isValid}
  touched: {touched}
  controlClass: {controlClass}
  inputClass: {inputClass}
</pre> -->
