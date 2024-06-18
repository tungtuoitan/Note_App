import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: "192.168.1.61",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  })
  .promise();

export const getNotes = async (id) => {
  const query = `SELECT * 
    FROM notes
    WHERE id = ?`;
  const result = await pool.query(query, [id]);
  return result[0];
};

export const addNotes = async (title, contents) => {
  const query = "INSERT INTO notes (title, contents) VALUES (?, ?)";
  const values = [title, contents];

  const result = await pool.query(query, values);
  return result[0].insertId;
};

// const result = await addNote()

// console.log(result)
