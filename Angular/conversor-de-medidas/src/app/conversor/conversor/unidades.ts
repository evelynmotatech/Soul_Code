interface Unidade{
  unidade?: string,
  paraMetros?: number
}

//const é do tipo Objeto e recebe suas propriedades.

const Quilometro: Unidade = {
  unidade: 'km',
  paraMetros: 0.001
}

const Metro: Unidade = {
  unidade: 'm',
  paraMetros: 1
}

const Centimetro: Unidade = {
  unidade: 'cm',
  paraMetros: 100
}

const Milimetro: Unidade = {
  unidade: 'mm',
  paraMetros: 1000
}

const Unidades = [
  Quilometro,
  Metro,
  Centimetro,
  Milimetro
]

export {
  Unidades
}