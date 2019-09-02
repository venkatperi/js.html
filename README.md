![](https://github.com/venkatperi/js.html/workflows/Node%20CI/badge.svg)
# js.html-builder
The `js.html-builder` library provides a domain specific language (DSL) to build HTML with
pure javascript code.

## Installation
Install with `npm`:

```sh
$ npm install --save js.html-builder
```

## Examples
### Hello World

This javascript code:

```typescript
import { htmlBuilder } from "js.html-builder"

const code = () =>
    html(() => {
        head(() => title('Hello World'))
        body(() => {
            h1('Hello')
            p('World')
        })
    })

console.log(htmlBuilder(code).toHtml())
```

Generates the following HTML:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

### HTML snippet
The following HTML snippet mirrors Bootstrap's [alert](https://getbootstrap.com/docs/4.3/components/alerts/) example:

```javascript
import { blockBuilder } from "js.html-builder"

let markup = () => div(() =>
    ['primary', 'secondary', 'success', 'danger', 'warning',
    'info', 'light', 'dark'].forEach(alert =>
        div({class: `alert alert-${alert}`, role: "alert"},
          `A simple ${alert} alert—check it out!`))
)
console.log(blockBuilder(markup).toHtml())
```

Generates the following
```HTML
<div>
  <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
  <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
  <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
  <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
  <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
  <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
  <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
  <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
</div>
```

### DIV with Link
In this example, a the text content of a div is mixed with a `link` element. So we need
to explicitly call out the text nodes:

```javascript
import { blockBuilder } from "js.html-builder"

let markup = () => div({class: "alert alert-primary", role: "alert"},
    () => {
        text("A simple primary ")
        a({href: "http://example.com"}, "alert with a link")
        text("Click if you like it.")
    })

console.log(blockBuilder(markup).toHtml())
```

HTML:
```HTML
<div class="alert alert-primary" role="alert">A simple primary
  <a href="http://example.com">alert with a link</a>Click if you like it.
</div>
```

## Usage
Both `htmlBuilder`  and `snippetBuilder` accept a `configuration closure` which configures
and the markup as desired. To emit a html tag, call a function with the same
name (except for `var`), e.g.: to emit a `div`, call `div()`. Each tag function
accepts (syntax permitting) up to three parameters which configure the tag's
attributes, value and child tags, in that order:
* **Attributes**: Tag attributes can be set by passing an object to the tag call, e.g.:
`span({class: 'special', role="alert"})` will emit `<span class="special" role="alert"></span>`.
* **Content**: Tag content (value) is set by passing as string (or number | boolean), e.g.:
`p('para contents')` will emit `<p>para contents</p>`.
* **Child tags**: To emit child tags for the current tag, pass a configuration closure as the last argument. e.g.:
```javascript
div( () =>
    span('span contents')
)
```
will emit:
```html
<div>
    <span>span contents</span>
</div>
```

Note that the configuration closure passed as the root must have a single child element.
