document.querySelector('button').addEventListener('click', () => {
  document.documentElement.dataset.debug = document.documentElement.matches('[data-debug="true"]') ? "false" : "true"
})