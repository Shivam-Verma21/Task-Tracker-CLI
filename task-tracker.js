const fs = require("fs");
const path = "./tasks.json";

// FUNCTION TO READ TASKS
function readTasks() {
  if (!fs.existsSync(path)) {
    return [];
  }
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

// FUNCTION TO SAVE TASKS
function saveTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

// FUNCTION TO GENERATE ID FOR EACH TASK
function generateId(tasks) {
  const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  return newId;
}

// ADD NEW TASK
function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: generateId(tasks),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Task added: ", newTask);
}

// UPDATE A TASK
function updatetask(id, description) {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.description = description;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log("Task updated:", task);
  } else {
    console.log("Task not found.");
  }
}

// DELETE A TASK
function deleteTask(id) {
  let tasks = readTasks();
  tasks = tasks.filter((t) => t.id !== parseInt(id));
  saveTasks(tasks);
  console.log("Task deleted.");
}

// CHANGE STATUS OF A TASK
function changeStatus(id, status) {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.status = status;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log("Task status updated:", task);
  } else {
    console.log("Task not found.");
  }
}

// LIST ALL TASKS
function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks found");
  }
  tasks.forEach((element) => {
    console.log(element);
  });
}

// LIST ALL TASKS BY STATUS
function listTasksByStatus(status) {
  const tasks = readTasks();
  const statusTasks = tasks.filter((t) => t.status === status);
  if (statusTasks.length === 0) {
    console.log(`No ${status} tasks found.`);
    return;
  }
  statusTasks.forEach((element) => {
    console.log(element);
  });
}

// CLI COMMAND
const command = process.argv[2];
const args = process.argv.slice(3);
// console.log("Command : ", command);
// console.log("Args : ", args);

switch (command) {
  case "add":
    // console.log(args.join(" "));
    addTask(args.join(" "));
    break;
  case "update":
    updatetask(args[0], args.slice(1).join(" "));
    // console.log(args[0]);
    // console.log(args.slice(1).join(" "));
    break;
  case "delete":
    deleteTask(args[0]);
    break;
  case "in-progress":
    changeStatus(args[0], "in-progress");
    break;
  case "done":
    changeStatus(args[0], "done");
    break;
  case "list":
    listTasks();
    break;
  case "list-done":
    listTasksByStatus("done");
    break;
  case "list-todo":
    listTasksByStatus("todo");
    break;
  case "list-in-progress":
    listTasksByStatus("in-progress");
    break;
  default:
    console.log("Unknown command!!");
    break;
}
