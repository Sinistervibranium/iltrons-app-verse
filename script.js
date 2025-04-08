document.getElementById('language-switcher').addEventListener('change', function() {
  const lang = this.value;
  fetch(`languages/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('store-name').textContent = data.title;
    });
});
