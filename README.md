# "Would you rather?"

This is an implementation of the popular "Would you rather..."-game. It uses React for the UI-part and Redux for state management. The "backend" is implemented as an in-browser DB + API endpoints to which fake-requests are being made.

You can check out the live project by clicking [here](https://would-you-rather-2020.netlify.app/).

## Features

- Using Redux to manage global state
- Four main views + various components
- Using "react-router" for in-browser routing
- Very simple authentication + login form
- Simple create, read & update functionality

## Installation

Clone this repository onto your local machine and then install all dependencies using the NPM package manager by running this command in your CLI from the repo root directory:

`npm install`

After all dependencies have been installed you can run the app locally in development mode or you can built out the static assets to deploy them on any webserver.

## Run the app in development mode

After installing all dependencies you can run the app on the webpack dev server by running the following command:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build a deployment-ready production build

Run this command to build out all of the static assets required for a production deployment:

`npm run build`

See [this official documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.
