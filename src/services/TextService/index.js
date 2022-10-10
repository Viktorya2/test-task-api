const fs = require("fs");

async function getText() {
  let response;
  try {
    const data = fs.readFileSync(process.env.DB);
    let DB = JSON.parse(data);
    response = {data: DB}
    return response
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function saveText(req) {
  let response;
  try {
    const data = JSON.stringify(req.body);
    fs.writeFileSync(process.env.DB, data);
    response = {data: req.body}
    return response
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  getText,
  saveText
}