# Pet project "Inspire board"

***This is a service for creating your own mood board by searching for images using keywords, viewing, adding, and removing them.***>

## Project links
* Website [Visit website]()
* Github [Visit repository]()

## Tools and stack: 
* HTML / CSS / React / TypeScript / API
* State manager: useContext hook
* Third-party libraries: [react-icons](https://react-icons.github.io/react-icons/) / [react-hook-form](https://www.npmjs.com/package/react-hook-form) / [react-router-dom](https://reactrouter.com/en/main)
* Custom hook: "useResize" hook for tracking a screen size

## Here's what was done:
* Sending GET requests to a public API to fetch random photos upon the initial page load, and filtered photos based on a keyword.
* Creating a custom photo list with the ability to add and remove photos.
* Implementing a popup with zoomed photos and options to save or delete the photo.
* Displaying previously saved photos on the search page by changing the "add" button to a "save" button.
* Implementing a custom hook to display a specific number of photos depending on the screen size and load the next set of photos by clicking the "more" button.
* Using the useContext state manager for searching and storing photos.


## Project Setup Instructions
To set up this project locally, follow the steps below:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/TikhonovaKs/mood-board.git
    ```

2. **Navigate to the Repository:**

    ```bash
    cd mood-board
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```

### Running the Frontend:
To run the application in development mode, use the command:

```bash
npm start
```
