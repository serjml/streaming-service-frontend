import BaseComponent from '@/modules/generic/BaseComponent'

const rootSelector = '[data-js-select]'

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    originalControl: '[data-js-select-original-control]',
    button: '[data-js-select-button]',
    dropdown: '[data-js-select-dropdown]',
    option: '[data-js-select-option]',
  }

  stateClasses = {
    isExpanded: 'is-expanded',
    isSelected: 'is-selected',
    isCurrent: 'is-current',
    isOnTheLeftSide: 'is-on-the-left-side',
    isOnTheRightSide: 'is-on-the-right-side',
  }

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  }

}

class SelectCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Select(element)
    })
  }
}

export default SelectCollection