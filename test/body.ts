///<reference types="../interfaces"/>

import 'mocha'
import { assert, expect } from 'chai'
import { snippetBuilder } from ".."


const tags = ['address', 'article', 'aside', 'footer',
    'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup', 'main', 'nav',
    'section', 'blockquote', 'dd', 'dir', 'div', 'dl', 'dt',
    'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre', 'ul', 'a', 'abbr',
    'b', 'bdi', 'bdo', 'br', 'cite', 'code',
    'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rb', 'rp', 'rt', 'rtc',
    'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'tt',
    'u', 'var', 'wbr', 'area', 'audio', 'map', 'track', 'video',
    'applet', 'embed', 'iframe', 'noembed', 'object', 'param', 'picture',
    'source', 'canvas', 'noscript', 'script', 'del', 'ins', 'caption', 'col',
    'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'button',
    'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter',
    'optgroup', 'option', 'output', 'progress', 'select', 'textarea', 'details',
    'dialog', 'menu', 'menuitem', 'summary', 'content', 'element', 'shadow',
    'slot', 'template', 'acronym', 'applet', 'basefont', 'bgsound', 'big',
    'blink', 'center', 'command', 'content', 'dir', 'element', 'font', 'frame',
    'frameset', 'image', 'isindex', 'keygen', 'listing', 'marquee', 'menuitem',
    'multicol', 'nextid', 'nobr', 'noembed', 'noframes', 'plaintext', 'shadow',
    'spacer', 'strike', 'tt', 'xmp', 'area', 'audio', 'map', 'track',
    'video',]


describe("block snippets", () => {
    it("doesn't include DOCTYPE", () => {
        let markup = snippetBuilder(() => div()).toHtml()
        assert(!markup.startsWith(`<!DOCTYPE`), `starts with <!DOCTYPE>`)
    })
    describe("tags", () => {
        tags.forEach(t =>
            it(t, () => expect(snippetBuilder(() =>
                global[t]()).toHtml().trim()).to.eq(`<${t}></${t}>`))
        );
        ['img'].forEach(t =>
            it(t, () => expect(snippetBuilder(() =>
                global[t]()).toHtml().trim()).to.eq(`<${t}>`))
        )
    })
})
