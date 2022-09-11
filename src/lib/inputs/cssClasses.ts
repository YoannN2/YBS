export function getInputClass(isValid:boolean, hasError:boolean) : string {
  let outputClasses = [""]

  if (hasError) {
    outputClasses.push("is-danger")
  }

  if (isValid) {
    outputClasses.push("is-success")
  }

  return outputClasses.join(" ")
}

export function getFieldClass(addons: boolean) : string {
  return  "field" + (addons ? " has-addons" : "")
}

export function getControlClass(icon:boolean, isValid:boolean, hasError:boolean, addons:boolean) : string {
  let outputClasses = ["control"]

  if (icon) {
    outputClasses.push("has-icons-left")
  }

  if (isValid || hasError) {
    outputClasses.push("has-icons-right")
  }

  if (addons) {
    outputClasses.push("is-expanded")
  }

  return outputClasses.join(" ")
}
