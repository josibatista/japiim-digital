// Fragmentos permitem compartilhar diretamente uma orientação e usar Voltar do navegador.
function abrirOrientacao() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const section = document.getElementById(id);
  if (section instanceof HTMLDetailsElement) section.open = true;
}
window.addEventListener('hashchange', abrirOrientacao);
abrirOrientacao();
// Reabre a orientação mesmo quando o fragmento atual já aponta para ela.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const section = document.getElementById(link.hash.slice(1));
    if (section instanceof HTMLDetailsElement) section.open = true;
  });
});
