# Project_2_370_Team_4

## Project Overview
This is a simple To-Do List web application that allows users to:
- Add new tasks.
- Mark tasks as completed or uncompleted.
- Delete tasks.


Tester Video link: https://drive.google.com/drive/folders/1KecwMRXBNlac1o1nGXdny4i3LroAjJJi?usp=sharing

The application uses a front-end built with HTML, CSS, and JavaScript, and communicates with a back-end server built using Java (Spring Boot).

## Requirements
To run this project, ensure you have the following installed:
- [Java Development Kit (JDK) 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Apache Maven](https://maven.apache.org/)
- A modern web browser (e.g., Chrome, Firefox)

## Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Project_2_370_Team_4
   cd todolist or cd *
   ```

2. **Install Dependencies**
   - Use Maven to install the required dependencies:
     ```bash
     mvn install
     ```

3. **Start the Application**
   - Use Maven to build and run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:8080`.
   - Start managing your tasks.

## Features
- **Add Tasks**: Enter a task in the input field and click "Add" to add it to the list.
- **Mark as Completed**: Click the "Check/Uncheck" button to toggle the completed state of a task.
- **Delete Tasks**: Click the "Delete" button to remove a task from the list.

## File Structure
- `src/main/resources/static/styles.css`: Contains the styles for the application.
- `src/main/resources/static/scripts.js`: Contains the JavaScript logic for managing tasks.
- `src/main/resources/templates/index.html`: The main HTML file for the application.
- `src/main/java/todolist`: Contains the Java back-end code.

## Notes
- Ensure you have JDK 17 and Maven installed before running the application.
- The application uses a RESTful API to fetch, add, and delete tasks.
