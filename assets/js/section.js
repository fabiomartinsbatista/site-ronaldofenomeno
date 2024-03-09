const sectionApresentacao = document.querySelector('section.apresentacao')

window.addEventListener('scroll', () => {
  const altura = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (altura < 50) {
      sectionApresentacao.classList.remove('oculto')
    } else {
      sectionApresentacao.classList.add('oculto')
    }
  } else {
    if (altura < 200) {
      sectionApresentacao.classList.remove('oculto')
    } else {
      sectionApresentacao.classList.add('oculto')
    }
  }
})
