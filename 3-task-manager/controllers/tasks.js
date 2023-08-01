const Task = require('../models/Task');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return next(createCustomError(`no task with id ${taskID}`, 404));

      // return res.status(404).json({ msg: `no task with id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete(
      { _id: taskID },
      { useFindAndModify: false }
    );

    if (!task) {
      return next(createCustomError(`no task with id ${taskID}`, 404));
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!task) {
      return next(createCustomError(`no task with id ${taskID}`, 404));
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
