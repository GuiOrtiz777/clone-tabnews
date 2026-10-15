function statusHandler(req, res) {
  res.status(200).json({ status: "ok" });
  console.log(JSON.stringify(req.body, null, 2));
  console.log(JSON.stringify(req.header, null, 2));
}

export default statusHandler;
