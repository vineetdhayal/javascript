// Note: If you haven't completed the jQuery.css question, you should attempt that first.

// Before Element.classList and DOMTokenList were part of the browser standards, it was a hassle to manipulate classes on a DOM element.

// jQuery is a library that simplifies DOM manipulation(among other things).jQuery(using the $ alias function), provided convenient APIs to toggle, add, and remove classes from elements via.toggleClass(), .addClass() and.removeClass().

//     // <button class="foo bar">Click me</button>
//     $('button').toggleClass('bar'); // <button class="foo">Click me</button>
// $('button').addClass('baz'); // <button class="foo baz">Click me</button>
// $('button').removeClass('foo'); // <button class="baz">Click me</button>
// $('button').toggleClass('bar'); // <button class="baz bar">Click me</button>
// The return value of most jQuery manipulation APIs is the jQuery object itself so that method calls can be chained.The above can be further simplified again:

// // <button class="foo bar">Click me</button>
// $('button')
//     .toggleClass('bar')
//     .addClass('baz')
//     .removeClass('foo')
//     .toggleClass('bar');
// // <button class="baz bar">Click me</button>
// Implement the toggleClass(), addClass() and removeClass() methods according to the following specifications.Do not use Element.classList and methods to manipulate DOMTokenList otherwise the problem becomes quite trivial.

//     Note: The official jQuery library selects all matched elements and modified all matched elements.However, for this question we can assume there will only be a maximum of one element matching the selector.

//         toggleClass(className, state)
// Add or remove one or more classes from the matched element, depending on either the class's presence or the value of the state argument.

// Parameter	Type	Description
// className	string	One or more classes(separated by spaces) to be toggled for the matched element.
// state	boolean	An optional boolean value to determine whether the class(es) should be added or removed.
//     addClass(className)
// Parameter	Type	Description
// className	string	One or more classes(separated by spaces) to be added to the matched element.
//     removeClass(className)
// Parameter	Type	Description
// className	string	One or more classes(separated by spaces) to be removed from the matched element.

function itemSet(classes) {
    return new Set(classes);
}

function $(selector) {
    const element = document.querySelector(selector);
    return {
        toggleClass: function (className, state) {
            const clss = itemSet(className);
            const elcss = itemSet(element);
            clss.forEach((y) => {
                const shouldRemove = state === undefined
                    ? elcss.has(y) : !state;
                shouldRemove ? elcss.delete(y) : elcss.add(y);
            })
            element.className = Array.from(elcss).join(' ');
            return this;
        },
        addClass: function (className) {
            this.toggleClass(className, true);
            return this;
        },
        removeClass: function (className) {
            this.toggleClass(className, false);
            return this;
        }
    }
}