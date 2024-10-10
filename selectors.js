(function (w) {
    class CSSSelectorGenerator {
        constructor() {
            this.selectors = [];
            this.currentElement = null;
            this.binded = this.initialize.bind(this);
            document.addEventListener('mouseover', this.binded);
        }

        calculateIdSelector() {
            const id = this.currentElement.id;
            if (id) {
                this.selectors.push(`#${id}`)
            }
        }

        generateSelectorString() {
            if(!this.selectors.length) {
                return '';
            }
            return this.selectors.toReversed().join(' ');
        }

         uniqueSelector() {
          const mySelector = generateSelectorString();
          return document.querySelector(mySelector).length === 1;
        }

        generateCssSelector() {
            while (this.currentElement) {
                if (this.uniqueSelector()) {
                    return;
                }
                this.calculateIdSelector();
                this.currentElement = this.currentElement.parentNode;
            }
        }

        stop() {
            document.removeEventListener('mouseover', this.binded);
        }

        initialize(e) {
            console.log(e);
            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (el instanceof HTMLElement) {
                this.currentElement = el;
                this.selectors = [];
                this.generateCssSelector();
            }
        }
    }
    w.generateSelectors = function () {
        const instance = new CSSSelectorGenerator();
        return instance;
    }
})(window)
