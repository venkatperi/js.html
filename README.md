# js.html
The `js.html` library provides a domain specific language (DSL) to build HTML with
pure javascript code.

## Examples
### Hello World

This javsacript code:

```typescript
import { Element, HtmlBuilder } from "js.html"

const code = () =>
    html(() => {
        head(() => title('Hello World'))
        body(() => {
            h1('Hello')
            p('World')
        })
    })

console.log(new HtmlBuilder().build<Element>(code).toHtml())
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
