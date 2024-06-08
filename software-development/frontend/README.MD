
# Frontend

This README provides instructions on how to run the frontend of the web application. The frontend is built using React and TypeScript with Material-UI for styling.

## Prerequisites

Before running the project, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Run backend project (see backend README to run)
  Both the frontend and backend must be run simultaneously to ensure the application functions properly.

## Project Structure

Here is an overview of the key directories and files in the project:

- `frontend/`: Root directory of the frontend application.
  - `public/`: Contains the main HTML file.
    - `index.html`: The main HTML file.
  - `src/`: Contains the source code for the React application.
    - `Components/`: Directory for React components.
    - `Contexts/`: Directory for React context providers for global state management.
    - `Hooks/`: Directory for custom React hooks.
    - `Models/`: Directory for TypeScript interfaces and types.
    - `Services/`: Directory for API service functions.
    - `App.tsx`: Main application component.
    - `index.tsx`: Entry point of the application.
  - `.gitignore`: Specifies files to be ignored by Git.
  - `package.json`: Lists project dependencies and scripts.
  - `tsconfig.json`: Configuration file for TypeScript.
  - `README.md`: Project documentation.

## Running the project

1. Navigate to the project directory:
  `cd frontend`

2. Install dependencies:
  `npm install`

3. Run Project:
  `npm run start`

## Features:

1. Import Excel file.

2. Toggle light/dark theme in the settings page.

3. Edit the user name.

4. Enjoy!
