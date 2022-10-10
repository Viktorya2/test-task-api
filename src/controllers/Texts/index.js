const textService = require("../../services/TextService");

async function getText(req, res) {
  try {
    const data = await textService.getText();
    return res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

function saveText(req, res) {
  try {
    const data = textService.saveText(req);
    return res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  getText,
  saveText
}