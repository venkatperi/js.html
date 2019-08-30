///<reference types="./interfaces"/>


import { AbstractFactory, JsDsl } from "js-dsl"
import _ from "lodash"

export type Primitive = string | number | boolean

export type Value = Primitive

export type Attributes = {
    [k in string]: Primitive
}

export type ElementOpts = {
                       tag: string,
                       noClosingTag: boolean
                   } & Attributes


export class Element {
    tag: string

    noClosingTag: boolean = false

    attributes: Attributes = {}

    value: Primitive | null

    children: Array<Element> = []

    isComment: boolean = false

    constructor(opts: ElementOpts, attributes: Attributes, value: Value) {
        this.tag = opts.tag
        this.noClosingTag = opts.noClosingTag || false
        this.isComment = opts.isComment as boolean || false

        if (typeof attributes != "object") {
            value = attributes
        } else {
            this.attributes = attributes
        }

        this.value = value
    }

    addChild(child: Element) {
        this.children.push(child)
    }

    toHtml(prefix: string = "") {
        const res: Array<string> = ['\n', prefix]
        if (this.tag === 'html') {
            res.push("<!DOCTYPE html>\n")
        }
        if (!this.isComment) {
            res.push(`<${this.tag}`)
            _.forOwn(this.attributes,
                (v: Value, k: string) => res.push(` ${k}="${v}"`))
            res.push('>')
        } else {
            res.push('<!--')
        }

        if (this.value) {
            res.push(String(this.value))
        }

        this.children.forEach((c) => {
            res.push(c.toHtml(prefix + '  '))
        })

        if (!this.noClosingTag) {
            if (this.children.length) {
                res.push('\n')
                res.push(prefix)
            }
            if (this.isComment) {
                res.push(`-->`)
            } else {
                res.push(`</${this.tag}>`)
            }
        }

        return res.join('')
    }
}

export class ElementFactory extends AbstractFactory<Element, Element> {
    opts: Attributes

    constructor(opts: Attributes = {}) {
        super()
        this.opts = opts
    }

    // noinspection JSUnusedGlobalSymbols
    newInstance(builder: JsDsl, name: string, attr: Attributes,
        value: Value) {
        const opts: ElementOpts = {
            tag: name,
            noClosingTag: this.opts.noClosingTag as boolean,
            isComment: this.opts.isComment as boolean
        }
        return new Element(opts, attr, value)
    }

    // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    setChild(builder: JsDsl, parent: Element, child: Element) {
        parent.addChild(child)
    }
}

class HtmlFactory extends ElementFactory {
    // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    getBuilder(parent: JsDsl) {
        return new MainBuilder(parent)
    }
}

class HeadFactory extends ElementFactory {
    // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    getBuilder(parent: JsDsl) {
        return new HeadBuilder(parent)
    }
}

export class BlockFactory extends ElementFactory {
    // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    getBuilder(parent: JsDsl) {
        return new BlockBuilder(parent)
    }
}

export class MainBuilder extends JsDsl {
    // noinspection JSUnusedGlobalSymbols
    register() {
        this.registerFactory('head', new HeadFactory())
        this.registerFactory('body', new BlockFactory())
    }
}

export class HeadBuilder extends JsDsl {
    // noinspection JSUnusedGlobalSymbols
    register() {
        this.registerFactory('title', new ElementFactory())
        this.registerFactory('link', new ElementFactory({noClosingTag: true}))
        this.registerFactory('meta', new ElementFactory({noClosingTag: true}))
        this.registerFactory('style', new ElementFactory())
    }
}

const tags = ['address', 'article', 'aside', 'footer',
    'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup', 'main', 'nav',
    'section', 'blockquote', 'dd', 'dir', 'div', 'dl', 'dt',
    'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre', 'ul', 'a', 'abbr',
    'b', 'bdi', 'bdo', 'br', 'cite', 'code',
    'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rb', 'rp', 'rt', 'rtc',
    'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'tt',
    'u', 'var', 'wbr', 'area', 'audio', 'img', 'map', 'track', 'video',
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
    'spacer', 'strike', 'tt', 'xmp', 'area', 'audio', 'img', 'map', 'track',
    'video',]

export class BlockBuilder extends JsDsl {
    // noinspection JSUnusedGlobalSymbols
    register() {
        tags.forEach(
            (b: string) => this.registerFactory(b, new ElementFactory()))
    }
}

export class HtmlBuilder extends JsDsl {
    // noinspection JSUnusedGlobalSymbols
    register() {
        this.registerFactory('html', new HtmlFactory())
        this.registerFactory('comment', new ElementFactory({isComment: true}))
    }
}

// @ts-ignore
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