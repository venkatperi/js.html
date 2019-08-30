///<reference types="../interfaces"/>

import { Element, HtmlBuilder } from "../"

const code = () =>
    html(() => {
        head(() => title('Hello World'))
        body(() => {
            h1('Hello')
            p('World')
        })
    })

console.log(new HtmlBuilder().build<Element>(code).toHtml())
