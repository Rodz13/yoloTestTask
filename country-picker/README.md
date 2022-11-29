# Country Picker
The country code picker is designed to quickly search for a country by its country code.

Design by [https://ant.design/](https://ant.design/)

## Run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tests

### Unit tests

The React unit tests rely on [react-testing-library](https://github.com/kentcdodds/react-testing-library). The overall philosophy is about testing what the user sees and interacts with: the rendered DOM tree. By doing it this way, we avoid testing implementation details, at the same time as we ensure some level of accessibility.

Run the unit tests with:

```shell
npm run test
```

Or keep watching them with:

```shell
npm run test:watch
```

### E2E test

The React e2e rely on [cypress](https://docs.cypress.io). 

Run the e2e tests with:

```shell
npm run cypress
```

Or open cypress interactive tool:

```shell
npm run cypress:open
```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

