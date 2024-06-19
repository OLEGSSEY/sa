import { sql } from "../db.js"

export async function uploadFiles(req, res) {
  try {
    const { title, description } = req.body;
    const filename = req.file.fn;
    const data = await sql`
      insert into requests (title, description, image)
      values (${title}, ${description}, ${filename})`;

    console.log({ data });
    res.send(200);
  } catch (error) {
    console.log("Error uploading file: ", error);
    res.status(500).send({ error: error.message });
  }
}
