# Finance Dashboard App



# Finance Tracker App

The Finance Tracker App is a web application designed to help users track financial data, visualize trends, and make informed decisions. This application provides a user-friendly interface to view and analyze financial data with a focus on predicting next year's profit using linear regression.

## Demo

Explore the Finance Tracker App [here](https://finance-tracker-sooty.vercel.app/).

## Features

- **Technologies Used:**
  - Frontend: TypeScript, React, Redux Toolkit, Material-UI
  - Backend: Node.js
  - Database: MongoDB
  - Charting: Chart.js for pie, bar, line, area charts
  - Linear Regression: Regression.js (an open-source library)

- **User Interface:**
  - Responsive and intuitive UI for easy navigation and use.
  - Material-UI components for a modern and consistent design.

- **Data Visualization:**
  - Over 9 interactive charts to showcase financial data trends.
  - Chart Types:
    - Pie Chart
    - Bar Chart
    - Line Chart
    - Area Chart
    - and more...

- **Linear Regression:**
  - Utilizes the Regression.js library to perform linear regression analysis on financial data.
  - Predicts next year's profit based on historical data.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.
- MongoDB database should be set up and accessible.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/finance-tracker-app.git
   ```

2. Install dependencies:

   ```bash
   cd finance-tracker-app
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and define the following variables:

   ```env
   REACT_APP_API_URL=http://your-backend-api-url
   REACT_APP_MONGODB_URI=mongodb://your-mongodb-uri
   ```

4. Start the frontend:

   ```bash
   npm start
   ```

   This will start the frontend server and open the app in your default web browser.

5. Start the backend:

   Ensure your MongoDB server is running, then start the backend:

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on the specified port.

## Usage

1. Open the Finance Tracker App in your browser.

2. Explore the various charts and features provided to analyze financial data.

3. Use the linear regression functionality to predict next year's profit based on historical data.

4. Interact with the charts to gain insights into financial trends.

## Contributing

If you want to contribute to the development of the Finance Tracker App, follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to better fit your specific project details. If you have additional sections, features, or technologies used, don't hesitate to include them.
