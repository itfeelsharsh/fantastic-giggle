// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`./data/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(200).json({ error: "No blog found with requested slug" });
      console.log(err);
      return;
    }
    res.status(200).json(JSON.parse(data));
    console.log(JSON.parse(data));
    console.log(req.query);
  });
}
