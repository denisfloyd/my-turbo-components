# df-button - Get started

Custom button react component built with tailwindcss.

## Install

Add Button to your project.

`npm install --save df-button`

`` * added styles.css to your application *``

```
import 'df-button/styles.css'
```

## **Use**

### Button
`import Button from 'df-button';`

```
  const example = () => (
    <div>
       <Button style="primary">Button Label</Button>
    </div>
  )
```

#### Props

```typescript
type Props = React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>

&
```

| Prop | Values |
| -------- | ------- |
| buttonStyle | 'primary', 'success', 'error', 'borderless' |
| size | 'sm', 'md', 'lg' |
| isOutline | true, false |
| isPending | true, false |
| disabled | true, false |
| className | tailwind classes -> string format |

### Button Group 
`import Button from 'df-button';`

```
  const example = () => (
    <ButtonGroup>
       <Button style="primary">Button Label</Button>
       <Button style="primary">Button Label</Button>
       <Button style="primary">Button Label</Button>
    </ButtonGroup>
  )
```

#### Props
| Prop | Values |
| -------- | ------- |
| buttonsHasSameWidth | true, false

## Override styles

You can easily override any style of component just adding a custom tailwind class inside element's `className` property. For that, it's required to have tailwindcss as a dependency and setup on the project.
