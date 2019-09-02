///<reference types="../interfaces"/>

import 'mocha'
import { blockBuilder } from ".."
import { expect } from 'chai'

const xpath = require('xpath')
const dom = require('xmldom').DOMParser

describe("generate divs in a loop", () => {
    let doc = null
    let markup: string | null = null
    let num = 10

    beforeEach(() => {
        markup = blockBuilder(() => div(() => {
            for (let i = 0; i < num; i++) {
                div(`div ${i}`,
                    () => span(`span ${i}`))
            }
        })).toHtml()
        doc = new dom().parseFromString(markup)
    })

    it(`generates ${num} divs`, () => {
        let nodes = xpath.select("/div/div", doc)
        expect(nodes.length).to.eq(num)
    })

    it(`generates ${num} nested spans`, () => {
        let nodes = xpath.select("/div/div/span", doc)
        expect(nodes.length).to.eq(num)
    })

})
