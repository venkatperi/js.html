///<reference types="../interfaces"/>

import { htmlBuilder } from ".."
import 'mocha'
import { assert } from 'chai'

describe("html", () => {
    it('includes doctype', () => {
        let markup = htmlBuilder(() => html()).toHtml()
        assert(markup.startsWith(`<!DOCTYPE`), `starts with <!DOCTYPE>`)
    })
})
