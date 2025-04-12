let senha = gerarSenha();
const historico = document.getElementById('historico');

function mostrar(id) {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('senha').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

function gerarSenha() {
  let numeros = [];
  while (numeros.length < 4) {
    let dig = Math.floor(Math.random() * 10);
    if (!numeros.includes(dig)) numeros.push(dig);
  }
  return numeros.join('');
}

function verificarPalpite() {
  const input = document.getElementById('palpite');
  const palpite = input.value;
  if (palpite.length !== 4 || new Set(palpite).size !== 4) {
    alert('Digite 4 dígitos únicos!');
    return;
  }

  let A = 0, B = 0;
  for (let i = 0; i < 4; i++) {
    if (palpite[i] === senha[i]) A++;
    else if (senha.includes(palpite[i])) B++;
  }

  const item = document.createElement('li');
  item.textContent = `${palpite} → ${A}A${B}B`;
  historico.prepend(item);

  input.value = '';
}

function mostrarSenha() {
  alert('Senha atual: ' + senha);
}
