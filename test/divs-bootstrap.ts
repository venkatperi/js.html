///<reference types="../interfaces"/>

import 'mocha'
import { blockBuilder } from ".."
import { expect } from 'chai'


let bootstrap_alert_snippet = `<div>
  <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
  <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
  <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
  <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
  <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
  <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
  <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
  <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
</div>`

describe("bootstrap snippet", () => {
    it("matches", () => {
        let markup = () => div(() =>
            ['primary', 'secondary', 'success', 'danger', 'warning', 'info',
                'light', 'dark'].forEach(alert =>
                div({class: `alert alert-${alert}`, role: "alert"},
                    `A simple ${alert} alert—check it out!`)))

        expect(blockBuilder(markup).toHtml().trim()).to.eq(bootstrap_alert_snippet)
    })

})
