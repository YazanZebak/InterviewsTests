const express = require('express');
const router = express.Router();

const Task = require('../models/task.model');

router.get('/', async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		console.error(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		res.json(task);
	} catch (err) {
		console.error(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const { title, description } = req.body;
		const task = new Task({ title, description });
		await task.save();
		res.json({ status: 'Task saved.' });
	} catch (err) {
		console.error(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { title, description } = req.body;
		const updatedTask = { title, description };
		await Task.findByIdAndUpdate(req.params.id, updatedTask);
		res.json({ status: 'Task updated.' });
	} catch (err) {
		console.error(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Task.findByIdAndRemove(req.params.id);
		res.json({ status: 'Task deleted.' });
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
