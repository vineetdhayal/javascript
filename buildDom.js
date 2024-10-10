function buildDom(dom) {
    console.log(dom);
    const el = document.createElement(dom.type);
    if (typeof (dom.props.children) === 'string') {
        el.innerHTML = dom.props.children;
    } else if (dom.props) {
        if (dom.props.className) {
            el.setAttribute('className', dom.props.className);
        }
        for (let child of dom.props.children) {
            el.appendChild(buildDom(child));
        }
    }
    console.log(el);
    return el;
}

const dom = {
    "type": "div",
    "props": {
        "className": "container",
        "children": [
            {
                "type": "h1",
                "props": {
                    "children": "Welcome to the Nested DOM"
                }
            },
            {
                "type": "p",
                "props": {
                    "children": "This is a paragraph inside a div."
                }
            },
            {
                "type": "div",
                "props": {
                    "className": "nested-div",
                    "children": [
                        {
                            "type": "ul",
                            "props": {
                                "children": [
                                    {
                                        "type": "li",
                                        "props": {
                                            "children": "List item 1"
                                        }
                                    },
                                    {
                                        "type": "li",
                                        "props": {
                                            "children": "List item 2"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}

buildDom(dom);
