import Input from '$lib/inputs/Input.svelte'
import Textarea from '$lib/inputs/Textarea.svelte'
import Radio from '$lib/inputs/Radio.svelte'
import Checkbox from '$lib/inputs/Checkbox.svelte'
import Select from '$lib/inputs/Select.svelte'
import File from '$lib/inputs/File.svelte'

import type { SvelteComponentTyped } from 'svelte/internal';

type C = typeof SvelteComponentTyped<any, any, any>;

/**
 * Maps an input type to the proper Input Component
 *
 * @param {string} type - Input Type
 * @returns {C} - Input Component
 */
export function fieldMap(type:string) : C {
  const inputToComponent: { [key: string]: C } = {
    // Inputs
    "text": Input,
    "tel": Input,
    "email": Input,
    "number": Input,
    "color": Input,
    "date": Input,
    "datetime-local": Input,
    "month": Input,
    "url": Input,
    "week": Input,
    "password": Input,
    "search": Input,

    // File
    "file": File,

    // TextArea
    "textarea": Textarea,

    // Radio / Checkbox
    "radio": Radio,
    "checkbox": Checkbox,

    // Select
    "select": Select,
  }

  return inputToComponent[type]
}
