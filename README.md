# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1. **3 Project Features to be added**:

   a. **Search Functionality**: Implement a search bar that allows users to search for courses by name or other criteria. When the user enters a query, the course list updates dynamically to display matching results.

   b. **Course Removal**: Add a feature that allows users to remove selected courses from their cart. Each course in the cart should have a "Remove" button, and when clicked, it removes the course from the cart and updates the remaining credit hours accordingly.

   c. **User Authentication**: Implement user authentication and registration to ensure that only authenticated users can select and register for courses. Create user profiles where users can track their selected courses and other details.

2. **State Management in the Assignment**:

   In the provided React code, state management is primarily handled using React's `useState` and `useEffect` hooks. Here's a breakdown of how state is managed:

   - `allCourse`: This state variable holds the data for all available courses. It's initialized as an empty array and populated with course data fetched from a JSON file using the `fetch` API within the `useEffect` hook. This ensures that the component fetches data only once when it mounts.

   - `selectedCourses`: This state array stores the courses that the user has selected. It starts as an empty array and is updated when the user clicks the "Select" button. If a selected course already exists in this array, the user is alerted with "Already Taken!".

   - `remaining`: This state variable represents the remaining credit hours that the user can select. It is updated every time a course is selected or removed. If the user attempts to exceed the credit limit (20 in this case), they are alerted with "Credit Limit can't be Exceeded!".

   - `totalCount`: This state variable keeps track of the total credit hours of the selected courses. It is updated whenever a course is added or removed.

   - `useEffect`: The `useEffect` hook is used to fetch the initial course data from a JSON file. It runs once when the component mounts (`[]` dependency array), ensuring that data is loaded when the component is first rendered.

   - `handleSelectCourse`: This function is responsible for managing the selection of courses. It checks if a course is already in the `selectedCourses` array, calculates the total credit hours, and updates the state accordingly.

In summary, state management in this assignment is used to keep track of selected courses, their total credit hours, and the remaining credit hours the user can select. The state is updated reactively as users interact with the interface, and alerts are used to communicate specific conditions to the user, such as course availability and credit limits.