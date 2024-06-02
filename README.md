# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup Instructions
- run npm install or yarn install
- run npm run dev or yarn dev to start the development server
- run npm run build or yarn build to create a production build

## Accepting Criteria:
- Fetching user tasks from "JSON Placeholder API and cach it in a local storage
- User can drag and drop tasks between the columns 
(todo --> inprogress)
(inprogress -> todo/done)
(done can't be dropped to each of columns)
- User can change the arrangement of the tasks in the same column
- User can Add new tasks to each column
- User can delete a task from each column
- User can Edit the task and edit its status (depends on the previous rules)
- Every change the user did is cached in the Local Storage to enhance the user    experience 

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
