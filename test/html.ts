///<reference types="../interfaces"/>

import { htmlBuilder } from ".."
import 'mocha'
import { assert, expect } from 'chai'

const xpath = require('xpath')
const dom = require('xmldom').DOMParser

describe("html", () => {
    let doc = null
    let markup: string | null = null

    beforeEach(() => {
        markup = htmlBuilder(() => html({lang: 'en'})).toHtml()
        doc = new dom().parseFromString(markup)
    })

    it('includes doctype', () => {
        assert(markup!.startsWith(`<!DOCTYPE`), `starts with <!DOCTYPE>`)
    })

    describe("html tag", () => {
        it('is present', () => {
            let nodes = xpath.select("/html", doc)
            assert(nodes[0].localName === 'html')
        })

        it('lang is "en"', () => {
            let lang = xpath.select("/html/@lang", doc)
            expect(lang[0].value).to.eq('en')
        })
    })

})
