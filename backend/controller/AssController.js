import AssModel from "../models/AssignmentSchema.js";

const getToDo = async (req, res) => {
  try {
    const { _id } = req.user;
    const todo = await AssModel.find({ user: _id });
    console.log(req.user);
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

const saveToDo = (req, res) => {
  try {
    const { text, deadline, pic } = req.body;
    const { _id } = req.user;
    console.log(text);
    console.log(deadline);
    AssModel.create({ text, user: _id, deadline, pic })
      .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("Internal Server Error");
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

const deleteToDo = (req, res) => {
  try {
    const { _id } = req.body;
    console.log("id ---> ", _id);

    AssModel.findByIdAndDelete(_id)
      .then(() => res.status(200).json("Deleted Successfully..."))
      .catch((err) => {
        console.log(err);
        res.status(500).json("Internal Server Error");
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

const updateToDo = (req, res) => {
  try {
    const { _id, text } = req.body;

    AssModel.findByIdAndUpdate(_id, { text })
      .then(() => res.status(200).json("Updated Successfully..."))
      .catch((err) => {
        console.log(err);
        res.status(500).json("Internal Server Error");
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

export { getToDo, updateToDo, deleteToDo, saveToDo };
