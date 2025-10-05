const input = document.getElementById('heroNameInput');
  const suggestions = document.getElementById('suggestions');
  let heroes = [];

  fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(r => r.json())
    .then(data => heroes = data.map(h => h.name));

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    suggestions.innerHTML = '';

    const results = heroes.filter(n => n.toLowerCase().includes(q)).slice(0, 50);
    if (!results.length) return suggestions.style.display = 'none';

    results.forEach(name => {
      suggestions.innerHTML += `<div onclick="document.getElementById('heroNameInput').value='${name}'; document.getElementById('suggestions').style.display='none'">${name}</div>`;
    });

    suggestions.style.display = 'block';
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !suggestions.contains(e.target))
      suggestions.style.display = 'none';
  });