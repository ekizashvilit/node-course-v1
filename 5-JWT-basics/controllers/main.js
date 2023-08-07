const login = async (req, res) => {
  res.send('fake route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: 'hello', secret: `lucky number is ${luckyNumber}` });
};

module.exports = {
  login,
  dashboard,
};
