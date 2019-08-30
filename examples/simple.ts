///<reference types="../interfaces"/>

import { Element, HtmlBuilder } from "../"

const test = () =>
    html({lang: 'en'}, () => {
        head(() => {
            title('test')
            meta({charset: 'utf-8'})
            link({href: 'style.css', rel: 'stylesheet'})
            style(`
    body {
      color: red;
    } 
    `)
        })
        body(() => {
            h1('header 1')
            h2({class: 'unique'}, 'header 2', () =>
                a({href: "/abc"}, "abc"))
            p('This is a paragraph')
            div({class: 'some-style'}, () => {
                comment(() => div())
                for (let i = 0; i < 6; i++) {
                    div(`div ${i}`, () => span(`span ${i}`))
                }
                p('This is another paragraph')
            })
        })
    })

console.log(new HtmlBuilder().build<Element>(test).toHtml())
