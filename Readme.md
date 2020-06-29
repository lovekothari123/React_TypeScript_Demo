# Love Kothari TypeScript Project

In this application you can find out how can set up TypesScript Functional components 

# Steps 

- You can Input Your Name and hit login.

```bash
npm install

```

-  following styles (https://www.w3schools.com/howto/howto_js_sidenav.asp):




- We are going to use CSS Modules, so let's configure it.

_./webpack.config.js_

```diff
  module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
-      extensions: ['.js', '.ts', '.tsx']
+      extensions: ['.js', '.ts', '.tsx', '.css']
    },
```

- We will only use CSS Modules for custom app stylesheets. We will not use CSS Modules for other CSS files, like Bootstrap (folder node_modules).

_./webpack.config.js_

```diff
  {
    test: /\.css$/,
+   include: /node_modules/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
+  // Use CSS modules for custom stylesheets
+  {
+    test: /\.css$/,
+    exclude: /node_modules/,
+    use: [
+        MiniCssExtractPlugin.loader,
+        {
+          loader: 'css-loader',
+          options: {
+            modules: true,
+            localIdentName: '[name]__[local]___[hash:base64:5]',
+            camelCase: true,
+          },
+        },
+      ]
+  },
+  // Do not use CSS modules in node_modules folder

```

- We are going to create now a sidebar component, _src/components/sidebar.tsx_. Right now we will create just
  a rectangle and we will interact with the animation.

We need to install node typings, since we are going to make use of _require_ to import from
the _css_.

```bash
npm install @types/node --save-dev
```

_./src/components/sidebar.tsx_

```jsx
import * as React from "react";

const classNames = require("./sidebar.css");

export const SidebarComponent = () => (
  <div id="mySidenav" className={classNames.sidenav}>
    <span>Basic side bar, first steps</span>
  </div>
);
```

- 


- Let's place the component adding it into the `app.tsx`:

_./src/app.tsx_

```diff
import * as React from "react";
- import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker } from "./components";
+ import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SidebarComponent } from "./components";
import { Color } from "./model/color";
```

_./src/app.tsx_

```diff
  return (
    <>
+      <SidebarComponent />
      <ColorBrowser color={color} />
```

- Let's start with the interesting part of this implementation, let's add a flag to show/hide the
  sidebar _sidebar.tsx_.

_./src/components/sidebar.tsx_

```diff
import * as React from 'react';

const classNames = require('./sidebar.css');

+ interface Props {
+  isVisible: boolean;
+ }



- If we start the project we should now see the sidebar that we have created (a gray rectangle).

```bash
npm start
```

```diff
export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });
+ const[isVisible, setVisible] = React.useState(false);


- Let's start the application to check how it behaves:


- Let's try the sample

```
npm start
```
