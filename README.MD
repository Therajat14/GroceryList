# GroceryList-FullStack

## Project Overview

GroceryList-FullStack is a full-stack web application designed to help users manage their grocery lists efficiently. The application allows users to add, edit, and delete items from their grocery list, ensuring they never forget an item while shopping.

## Features

- User authentication and authorization
- Add, edit, and delete grocery items
- Responsive design for mobile and desktop
- Real-time updates with WebSockets
- Persistent storage with a database

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Real-time updates: Socket.io

## Project Progress

- [x] Set up project structure
- [x] Implement user authentication
- [x] Create RESTful API for grocery items
- [x] Develop frontend with React
- [x] Integrate frontend with backend
- [x] Implement real-time updates
- [ ] Add unit and integration tests
- [ ] Deploy application to cloud

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/GroceryList-FullStack.git
    cd GroceryList-FullStack
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `backend` directory with the following content:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact Rajat Singh at [your-email@example.com].
## Screenshots

<div align="center">
    <img src="screenshots/login.png" alt="Login Page" width="600"/>
    <p><em>Login Page</em></p>
</div>

<div align="center">
    <img src="screenshots/grocery-list.png" alt="Grocery List" width="600"/>
    <p><em>Grocery List</em></p>
</div>

<div align="center">
    <img src="screenshots/add-item.png" alt="Add Item" width="600"/>
    <p><em>Add Item</em></p>
</div>

## Future Enhancements

- [ ] Implement a search feature for grocery items
- [ ] Add user profile management
- [ ] Enable sharing of grocery lists with other users
- [ ] Integrate with external grocery APIs for price comparison

## Support

If you encounter any issues or have any questions, please open an issue on the [GitHub repository](https://github.com/yourusername/GroceryList-FullStack/issues).

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.io](https://socket.io/)

## Footer

<div align="center">
    <p>Thank you for using GroceryList-FullStack! Happy shopping!</p>
</div>