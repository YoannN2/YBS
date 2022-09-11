<script lang="ts">
  import { setContext } from 'svelte'
  let formData = {}

  function handleSubmit(e) {
    // console.log("Form Submitted")
    // console.log(e)
    formData = {}
    Array.from(e.target.elements).forEach((el, i) => {
      // console.log("Element:", el)
      // console.log("Name:", el.name)
      // console.log("Value:", el.value)
      formData[el.name] = el.value
    });
    //formData = formData
  }

  function handleChange(e) {
    console.log(e.target.name, "changed to", e.target.value)
    formData[e.target.name] = e.target.value
    formData = formData
  }
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
        <form on:submit|preventDefault="{handleSubmit}" on:change="{handleChange}">
          <div class="field">
            <label class="label" for="firstName">First Name</label>
            <div class="control">
              <input class="input" id="firstName" type="text" name="firstName" value=""/>
            </div>
          </div>

          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <div class="control">
              <input class="input" id="lastName" type="text" name="lastName" value=""/>
            </div>
          </div>

          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control">
              <input class="input" id="email" type="email" name="email" value="" />
            </div>
          </div>

          <div class="submit">
            <button class="button is-primary" type="submit">Submit</button>
          </div>
        </form>
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
