<script>
  import { setContext, onMount, onDestroy } from 'svelte'
  import { writable } from 'svelte/store'
  import * as yup from 'yup'

  export let formData = {}
  export let validationSchema = yup.object({})

  let errors = writable({})

  setContext('formData', formData)
  setContext('errors', errors)

  function handleSubmit(e) {
    alert("Submitted", e)
  }

  function handleChange(e) {
    const name = e.target.name
    const newValue = e.target.value

    // Update the field's value in formData

    // If ARRAY FIELD
    if (e.target.type === "checkbox") {

      if (!Array.isArray(formData[name])) {
        formData[name] = []
      }

      if (e.target.checked) {
        if (!formData[name].includes(newValue)) {
          formData[name].push(newValue)
          formData[name] = formData[name] // added to keep dynamic updates
        }
      }
      else {
        if (formData[name].includes(newValue)) {
          formData[name].splice(formData[name].indexOf(newValue), 1)
          formData[name] = formData[name] // added to keep dynamic updates
        }
      }

    }
    // Select Multiple
    else if (e.target.type == "select-multiple")
    {
      formData[name] = Array.from(e.target.selectedOptions).map(option => option.value)
    }
    // DEFAULT: NON ARRAY FIELDS
    else {
      formData[name] = newValue
    }

    // Validate the field
    if (Object.keys(validationSchema).includes(name)) {
      validationSchema.validateAt(name, formData)
      .then( (r) => {
        $errors[name] = {}
      })
      .catch( (err) => {
        $errors[name] = err
      })
    }
    else {
      console.warn(`${name} has no validation`)
    }

  }
</script>

<form on:change="{handleChange}" on:submit|preventDefault="{handleSubmit}" class="block">
  <slot />
</form>
