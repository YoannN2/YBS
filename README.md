# YBS - Yup Bulma Svelte
The goal of YBS is to make creating and validating forms as easy as possible in Svelte.

It relies on Yup for validation, Bulma for the style and FontAwesome for icons.

The project is in its early stage of developments, so expect things to change :)

Supported:
- All input types
- Multiple checkbox / radio / select

Not yet supported:
- files

## Usage

```svelte
<script lang="ts">
  import * as yup from 'yup'       // <-- Validation
  // import { fr } from 'yup-locales' // <-- i18n
  import {Form, Field} from 'ybs'

  // yup.setLocale(fr) // <-- Set locales for localized error messages

  // Your form's data will be updated automatically
  formData = {
    lastname: "Doe", // You can set default values
  }

  // Your validation schema
  validationSchema = yup.object().shape({
    firstname: yup.string().min(3),
    lastname: yup.string().min(3),
    password: yup.string().min(8),
  })

</script>

<!-- bind the formData and pass your validation schema -->
<Form bind:formData {validationSchema}>
  <Field
    type="text"
    name="firstname"
    label="Firstname"
    help="Enter your firstname"
    placeholder="John"
  />

  <Field
    name="lastname"
    label="Lastname"
    help="Enter your lastname"
    placeholder="DOE"
  />

  <Field
    type="password"
    name="password"
    label="Lastname"
    help="Your password should be at least 8 characters"
    placeholder="MySuperPassword"
  />
</Form>    
```

## Install

To install it, just run the following command:

```sh
npm install ybs@latest
```

And you're set :D

## Validation

Validation happens `on:change`. If a field is not defined in the `validationSchema`, it won't trigger any validation and output a `console.warn` message.

For more information on how to build your validation schemas, have a look at [yup's documentation](https://github.com/jquense/yup)

## Coming soon™

- Files
- Configs
- Custom validation logic
- Custom components
- Lots of debugging and cleaning up :D
- Proper demo site and repl to mess around with
- Proper types, I just have to get good at Typescript first :D

## Contributing

Contributions are not opened as of now, but stay tuned and don't hesitate to fill in an issue to let me know that you would like to contribute, once it reaches a slightly more stable stage, contributions will be greatly appreciated

## License

I don't give a F, do what you want with it, just don't claim this as your own, and give credit where credit is due.

## Credits

This is heavily inspired by vue-formulate and formkit, it's a port to svelte with default bulma styles really.
