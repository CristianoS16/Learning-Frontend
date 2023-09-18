import React, { Component } from "react";

import Form from "./Form";

import "./Main.css";
import Tasks from "./Tasks";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({
        tasks,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks !== prevState.tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (tasks.indexOf(newTask) === -1 && index === -1) {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: "",
      });
    } else if (index !== -1) {
      const newTasks = [...tasks];
      newTasks[index] = newTask;
      this.setState({
        tasks: newTasks,
        newTask: "",
        index: -1,
      });
    }
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index: index,
      newTask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks,
    });
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>TO DO LIST</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />
        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
