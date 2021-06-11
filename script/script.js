const cardColor = document.querySelector('.card')
const hexColorCodeInput = document.querySelector('.hex-color-code')
const container = document.querySelector('.container')
const btnCopyColor = document.querySelector('.btn-copy-color')

const randomHexColor = () => {
  let color = ''

  while (color.length < 6) {
    color += Math.random().toString(16).substr(-6).substr(-1)
  }
  // poderia ser apenas color += Math.random().toString(16).substr(-6)

  return '#' + color
}

cardColor.addEventListener('click', () => {
  const colorToSet = randomHexColor()

  container.style.backgroundColor = colorToSet
  hexColorCodeInput.value = colorToSet
})

btnCopyColor.addEventListener('click', () => {
  // seleciona o texto dentro do input
  hexColorCodeInput.select()
  // configuração para dispositivos móveis
  hexColorCodeInput.setSelectionRange(0, 99999)
  // copia o texto para a clipboard
  document.execCommand('copy')
})