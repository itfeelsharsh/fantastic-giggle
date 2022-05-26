// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile("./data/how-to-learn-css.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json(JSON.parse(data));
        console.log(JSON.parse(data));
    });}
  