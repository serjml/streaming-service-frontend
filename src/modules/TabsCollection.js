import getParams from '@/utils/getParams'

const rootSelector = '[data-js-tabs]'

class Tabs {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-tabs-navigation]',
    button: '[data-js-tabs-button]',
    content: '[data-js-tabs-content]',
  }

  stateClasses = {
    isActive: 'is-active'
  }

  stateCSSVariables = {
    activeButtonWidth: '--tabsActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsActiveButtonOffsetLeft',
  }

  construtor(rootElement) {
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonEements = [...this.navigationElement.querySelectorAll(this.selectors.button)]
    this.contentElement = [...this.rootElement.querySelectorAll(this.selectors.content)]
    this.state = {
      activeTabIndex: this.buttonEements.findIndex((buttonElement) => buttonElement.ariaSelected)
    }
    this.limitTabsIndex = this.buttonEements.length - 1
    this.bindEvents()
  }

  bindEvents() {
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection