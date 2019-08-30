# js.html
The `js.html` library provides a domain specific language (DSL) to build HTML with
pure javascript code.

## Examples
### Hello World

This javsacript code:

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
The following HTML snippet mirrors Bootstrap's (alert)[https://getbootstrap.com/docs/4.3/components/alerts/] example:

```javascript
let markup = () => div(() =>
    ['primary', 'secondary', 'success', 'danger', 'warning',
    'info', 'light', 'dark'].forEach(alert =>
        div({class: `alert alert-${alert}`, role: "alert"},
          `A simple ${alert} alert—check it out!`))
)
console.log(blockBuilder(markup).toHtml())
```

Generates the following HTML:
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
