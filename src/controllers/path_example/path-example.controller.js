function postPathExample(req, res) {
  const { val } = req.params;

  if (val.length < 3) {
    res
      .status(400)
      .send('Bad Request, value cannot be parsed');
  } else {
    res
      .status(201)
      .json({ val });
  }
}

module.exports = {
  postPathExample
};
