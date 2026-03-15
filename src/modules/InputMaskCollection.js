const rootSelector = '[data-js-input-mask]'

class InputMask {
}

class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollection