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

## Override styles

You can easily override any style of component just adding a custom tailwind class inside element's `className` property. For that, it's required to have tailwindcss as a dependency and setup on the project.
