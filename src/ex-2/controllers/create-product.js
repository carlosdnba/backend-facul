import data from '../db/data';

export default (req, res) => {
  const { nome, marca, tipo } = req.body;

  if (!nome || !marca || !tipo) {
    res.status(400).json({
      message: 'Invalid attributes.',
    });
  }

  const product = {
    nome,
    marca,
    tipo,
  };

  data.push(product);

  res.status(201).json({
    data: product,
  });
};
