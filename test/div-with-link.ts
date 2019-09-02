///<reference types="../interfaces"/>

import 'mocha'
import { snippetBuilder } from ".."
import { expect } from 'chai'

const xpath = require('xpath')
const dom = require('xmldom').DOMParser

const result = `<div class="alert alert-primary" role="alert">A simple primary 
  <a href="http://example.com">alert with a link</a>Click if you like it.
</div>`

describe("div with content and link", () => {
    let doc = null
    let markup: string | null = null

    beforeEach(() => {
        markup = snippetBuilder(
            () => div({class: "alert alert-primary", role: "alert"},
                () => {
                    text("A simple primary ")
                    a({href: "http://example.com"}, "alert with a link")
                    text("Click if you like it.")
                })).toHtml()
        doc = new dom().parseFromString(markup)
    })

    it("markup is as expected", () => {
        expect(markup!.trim()).to.eq(result)
    })

    it("div has role", () => {
        let attrs = xpath.select("/div/@role", doc)
        expect(attrs[0].value).to.eq('alert')
    })

    it("div has a link", () => {
        let nodes = xpath.select("/div/a", doc)
        expect(nodes[0].localName).to.eq('a')
    })

})
