function postPathExample(req, res) {
  let { val } = req.params;

  if (val.length < 3) {
    res
      .status(400)
      .send('Bad Request, value cannot be parsed');
  } else {
    val = val.toUpperCase();
    res
      .status(201)
      .json({ val });
  }
}

module.exports = {
  postPathExample
};
