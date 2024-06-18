import { getNotes } from "../database.js";

export const get = async (req, res, next) => {
  try {
    console.log(id)
    const id = req.params.id;
    const note = await getNotes(id);
    res.send(note);
  } catch {
    const err = new Error("oh no! Error occured...");
    next(err);
  }
};
