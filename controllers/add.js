import { addNotes } from "../database.js";

export const add = async (req, res) => {
    const { title, contents } = req.body;
    const insertId = await addNotes(title, contents);
    res.send(`${insertId}`);
  }