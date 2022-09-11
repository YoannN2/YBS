<script lang="ts">
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

<div class="card block">
  <section class="section">
    <div class="container content">
      <h1 class="title is-1 has-text-centered">YBS</h1>
      <p>The goal of YBS is to simplify the making of forms with Yup, Bulma and Svelte</p>
      <p>Because really, why is it such BS to make a form that looks good and handles validation and error messages easily ?</p>
    </div>
  </section>
</div>

<div class="card block">
  <section class="section">
    <h3 class="title is-3">Example</h3>

    <div class="columns">
      <div class="column">
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


          <!-- TODO TEXTAREA -->
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
              >yo</textarea>
            </div>
          </div>


        </Form>
      </div>

      <div class="column">
        <p><strong>FormData:</strong></p>
        <pre warp>{JSON.stringify(formData, null, ' ')}</pre>
      </div>
    </div>

  </section>
</div>


<style lang="scss">
  .submit {
    margin-top: 2em;
  }
</style>
