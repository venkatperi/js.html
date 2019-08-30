///<reference types="../interfaces"/>

import { htmlBuilder } from ".."

const code = () =>
    html(() => {
        head(() =>
            title('Hello World'))
        body(() => {
            h1('Hello')
            p('World')
        })
    })

console.log(htmlBuilder(code).toHtml())
