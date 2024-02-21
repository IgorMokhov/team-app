# Team App

![demo](https://github.com/IgorMokhov/team-app/assets/115712538/305b513f-d8b4-42e7-9948-9d56ac38b725)
![demo](https://github.com/IgorMokhov/team-app/assets/115712538/96fa991a-d96c-4c65-a7b1-bb9af9c940e7)
[Deployed Project](https://team-app-xi.vercel.app/users)

## Introduction

Team App - React Single Page Application.
Uses the API https://reqres.in/ for loading users.

Test task for the position of "Frontend Developer on React" (Antipoff Group)

## Test Task Description
![Description](https://github.com/IgorMokhov/team-app/assets/115712538/4aee7358-3424-4cc5-8c9a-6dbeb596d98b)
[Figma design](https://www.figma.com/file/Nw9TJYCeh8Tmi9cX3KxyqO/Тестовое.-Фронтенд?type=design&node-id=0-1&mode=design&t=9yzeXTqh8HgzrltX-0)

## Features

### Elements

- Registration and authorization are carried out via email/password
- All data entered into the form are checked for validity, and an error message is displayed for invalid data
- The token received through the API is saved in Local Storage and is removed upon clicking the "logout" button
- Main and detailed pages are only available to registered users, implemented using private routes of react-router-dom
- Pagination for the user list is implemented based on the "load more" principle
- Implemented the ability to like users, which are saved in Local Storage and are available after the page is reloaded

### Routing

- SignUpPage
- LoginPage
- MainPage (PrivateRoute)
- Detailed page with dynamic path (PrivateRoute)
- NotFoundPage

### State Management

- Redux Toolkit
- Implemented through Slices.
- All important data is saved in LocalStorage.


### Layout

- Responsive design up to 320px.

## Technologies

- [**TypeScript**](https://www.typescriptlang.org/): A superset of JavaScript that adds static types to the language.
- [**React**](https://reactjs.org/): A JavaScript library for building user interfaces.
- [**React Router**](https://reactrouter.com/): Enables navigation and routing in the React application.
- [**Redux Toolkit**](https://redux-toolkit.js.org/): Facilitates state management in React applications.
- [**Axios**](https://axios-http.com/): A promise-based HTTP client for making requests to the Google Books API.
- [**Vite**](https://vitejs.dev/): A modern frontend build tool that significantly improves the development experience.


## Getting Started

To install and use the project, follow these steps:

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install dependencies:

```sh
  npm install
```

<br/>

### Usage

To start the development server, use the following command:

```sh
  npm run dev 
```

Visit the provided local URL in your browser to explore the "My Books" application.

<br/>

### Build

For a production build, run the following command:

```sh
  npm run build
```

<br/>

## Author

Igor Mokhov — Frontend Developer<br/>
[LinkedIn](https://www.linkedin.com/in/igor-mokhov/) <br/>
igormokhovid@gmail.com
