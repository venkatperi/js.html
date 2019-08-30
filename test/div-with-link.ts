///<reference types="../interfaces"/>

import 'mocha'
import { blockBuilder } from ".."
// import { expect } from 'chai'


describe("div", () => {
    it("with link", () => {
        let markup = () => div({class: "alert alert-primary", role: "alert"},
            () => {
                text("A simple primary ")
                a({href: "http://example.com"}, "alert with a link")
                text("Click if you like it.")
            })

        console.log(blockBuilder(markup).toHtml().trim())
    })

})
