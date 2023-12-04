const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycby7SbNU1Eh_aolEs72S0-bihdWx0gI_z8p_XyPdc8ZvhmdhPDIJfoQGjpqC4vABYb6T/exec'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
