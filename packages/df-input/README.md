# df-input - Get started

Custom input react component built with tailwindcss. It allow users to enter, select and search for text.

## Install

Add Input to your project.

`npm install --save df-input`

`` * added styles.css to your application *``

```
import 'df-input/styles.css'
```

## **Use**

### Input
`import Input from 'df-input';`

```
  const example = () => (
    <div>
       <Input />
    </div>
  )
```

#### Props

```typescript
type Props = React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>

&
```

| Prop | Values |
| -------- | ------- |
| state | 'primary', 'required', 'error', 'borderless' |
| width | 'sm', 'md', 'lg', 'full' |
| height | 'sm', 'md', 'lg' |
| isRequired | true, false |
| error | true, false |
| disabled | true, false |
| className | tailwind classes -> string format |

## Override styles

You can easily override any style of component just adding a custom tailwind class inside element's `className` property. For that, it's required to have tailwindcss as a dependency and setup on the project.
