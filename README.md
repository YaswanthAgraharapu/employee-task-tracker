# employee-task-tracker
Frontend coding challenge for ProU Technology.
# ProU Employee Task Tracker

A dynamic, single-page web application built for the ProU Technology Frontend Coding Challenge. This project simulates a real-world task management system for a startup, featuring distinct role-based dashboards for an Admin and regular Users.

The application allows an administrator to assign tasks to employees, who can then update their progress and request approval upon completion. The admin has the final authority to approve tasks, completing the workflow.

---

## Features

*   **Secure, Role-Based Authentication:** Separate sign-in tabs for 'User' and 'Admin' roles.
*   **Admin Dashboard:**
    *   A comprehensive overview of all employees and their tasks.
    *   Ability to assign new tasks to any employee.
    *   Power to **approve** tasks that are pending approval.
    *   Filter all tasks by status, including a special filter for "Pending Approval".
*   **User Dashboard:**
    *   A personalized view showing only the logged-in user's tasks.
    *   Ability to update task status from "Pending" to "In Progress".
    *   Functionality to **request approval** from the admin once a task is finished.
*   **Data Persistence:** The application state, including login sessions and task updates, is saved to local storage, ensuring data persists across page reloads.
*   **Responsive Design:** A clean, modern, and fully responsive UI built with Tailwind CSS, providing a seamless experience on all devices.

## Tech Stack

*   **Frontend:** React.js
*   **Styling:** Tailwind CSS
*   **Build Tool:** Vite

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd employee-task-tracker
    ```

2.  **Install dependencies:**
    Navigate into the project directory and run:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command will start the application on a local server.
    ```bash
    npm run dev
    ```
    Open your browser and go to `http://localhost:5173`.

## Login Credentials for Testing

You can use the following credentials from the mock data to test the application.

### Admin Account
*   **Email:** `admin@prou.com`
*   **Password:** `supersecretpassword`
*(Use the "Admin Sign-In" tab)*

### User Accounts
*   **Email:** `alice.j@prou.com`, **Password:** `alicepassword`
*   **Email:** `bob.s@prou.com`, **Password:** `bobpassword`
*   **Email:** `charlie.b@prou.com`, **Password:** `charliepassword`
*(Use the "User Sign-In" tab)*
