# df-tooltip - Get started

Custom tooltip react component built with tailwindcss.

## Install

Add Tooltip to your project.

`npm install --save df-tooltip`

` * added styles.css to your application *`

```
import 'df-tooltip/styles.css'
```

## **Use**

### Tooltip

`import Tooltip from 'df-tooltip';`

```
  const example = () => (
    <Tooltip content="Tooltip content">
       <button>Button Label</button>
    </Tooltip>
  )
```

#### Props

| Prop | Values |
| -------- | ------- |
| placement | 'top', 'button', 'right', 'left' |
| tooltipStyle | 'default', 'error' |
| content | React.ReactNode, string |

## Override styles

You can easily override any style of component just adding a custom tailwind class inside element's `className` property. For that, it's required to have tailwindcss as a dependency and setup on the project.
