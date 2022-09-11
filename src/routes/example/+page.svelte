<script type="ts">
  import * as yup from 'yup'
  import { fr } from 'yup-locales'

  yup.setLocale(fr)

  import Form from '$lib/Form.svelte'
  import Field from '$lib/Field.svelte'


  let formData = {
    first: "hello",
  }

  let validationSchema = yup.object().shape({
    first: yup.string().required().min(3),
    last: yup.string().required().max(8),
    radio: yup.string(),
    checkbox: yup.array()

  })

  let options = [
    {label: "A", value: "a"},
    {label: "B", value: "b"},
    {label: "C", value: "c", checked: true},
    {label: "D", value: "d", disabled: true},
  ]

  let selectOptions = [
    {label: "Select A", value: "a"},
    {label: "Select B", value: "b"},
    {label: "Select C", value: "c"},
    {label: "Select D", value: "d"},
  ]

</script>

<h1>Form Example</h1>
<div class="card section">
  <Form bind:formData {validationSchema}>

    <Field
      name="first"
      label="First"
      help="Le prénom doit faire plus de 3 caractères"
      icon="fas fa-user"
    />

    <Field
      type="password"
      name="last"
      label="Last"
      placeholder="world"
      icon="fas fa-lock"
    >
      <div class="button" slot="addons">Hello</div>
    </Field>

    <Field
      type="radio"
      name="radio"
      options="{options}"
      label="Radio Field"
    />

    <Field
      type="checkbox"
      name="checkbox"
      options="{options}"
      label="Checkbox Field"
    />

    <Field
      type="file"
      name="file"
      label="File"
      fileLabel="Upload your resume"
      placeholder="john-resume.pdf"
    />

    <Field
      type="select"
      multiple
      name="selectedOptions"
      options="{selectOptions}"
      label="Select"
      
    />


    <div class="field">
      <div class="file has-name is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="label">
        Le Text
      </div>
    </div>

    <div class="field">
      <div class="control">
        <textarea
          id="x"
          name="text"
          class="textarea"
          trim
        >yo</textarea>
      </div>
    </div>


  </Form>




  <h2 class="title is-3">formData</h2>
  <pre>{JSON.stringify(formData, null, 2)}</pre>



</div>
