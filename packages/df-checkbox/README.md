# df-checkbox - Get started

Custom checkbox react component built with tailwindcss.

## Install

Add checkbox to your project.

`npm install --save df-checkbox`

` * added styles.css to your application *`

```
import 'df-checkbox/styles.css'
```

## **Use**

### Checkbox

`import Checkbox from 'df-checkbox';`

```
  const example = () => (
    <div>
       <Checkbox style="primary" label="Check me!"/>
    </div>
  )
```

## Override styles

You can easily override any style of component just adding a custom tailwind class inside element's `className` property. For that, it's required to have tailwindcss as a dependency and setup on the project.
