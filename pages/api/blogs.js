// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("./data");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("./data/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allBlogs);

  //   fs.promises.readdir("./data", (err, data) => {
  //     console.log(data);
  //     let allBlogs = [];

  //     });
  //   });
  //   res.status(200).json(allBlogs);
}
 