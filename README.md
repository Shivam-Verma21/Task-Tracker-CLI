# Task Tracker CLI

A simple command-line interface (CLI) application for managing your tasks and to-do list. This project helps you track what you need to do, what you're currently working on, and what you've completed. Tasks are stored in a JSON file and can be easily managed through the command line.

## Project URL - https://roadmap.sh/projects/task-tracker

## Features

- **Add a task**: Create a new task with a description.

- **Update a task**: Modify the description of an existing task.

- **Delete a task**: Remove a task from the list.

- **Mark a task as in-progress**: Update the status of a task to "in-progress".

- **Mark a task as done**: Update the status of a task to "done".

- **List all tasks**: View all tasks.

- **List tasks by status**: Filter tasks by their status (todo, in-progress, done).

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone this repository or download the project files.

3. Navigate to the project directory:

   ```
   cd task-tracker
   ```

4. (Optional) Initialize a Node.js project:
    
    ```
    npm init -y
    ```

## Usage

The application is run from the command line. Below are the commands you can use:
### Add a new task
```
node task-tracker.js add "Task description"
```

### Update an Existing Task
```
node task-tracker.js update <task_id> "Updated description"
```

### Delete a Task
```
node task-tracker.js delete <task_id>
```

### Mark a Task as In-Progress
```
node task-tracker.js in-progress <task_id>
```

### Mark a Task as Done
```
node task-tracker.js done <task_id>
```

### List All Tasks
```
node task-tracker.js list
```

### List Tasks by Status
- #### List all done tasks:
    ```
    node task-tracker.js list-done
    ```

- #### List all to-do tasks:
    ```
    node task-tracker.js list-todo
    ```

- #### List all in-progress tasks:
    ```
    node task-tracker.js list-in-progress
    ```


## Task Properties
Each task has the following properties:

- **id**: A unique identifier for the task.

- **description**: A short description of the task.

- **status**: The status of the task (todo, in-progress, done).

- **createdAt**: The date and time when the task was created.

- **updatedAt**: The date and time when the task was last updated.


## Implementation Details
- The application stores tasks in a tasks.json file in the project directory.

- The JSON file is created automatically if it does not exist.

- The application uses Node.js's native fs module to interact with the file system.

- Command-line arguments are used to perform operations on tasks.

