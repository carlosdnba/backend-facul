import data from '../db/data';

export default {
  nome: (req, res) => {
    const { nome } = req.body;

    let product = [];

    data.forEach((prod) => {
      if (prod.nome === nome) product.push(prod);
    });

    res.status(200).json({
      data: product,
    });
  },

  marca: (req, res) => {
    const { marca } = req.body;

    let product = [];

    data.forEach((prod) => {
      if (prod.marca === marca) product.push(prod);
    });
    res.status(200).json({
      data: product,
    });
  },

  tipo: (req, res) => {
    const { tipo } = req.body;

    let product = [];

    data.forEach((prod) => {
      if (prod.tipo === tipo) product.push(prod);
    });

    res.status(200).json({
      data: product,
    });
  },
};
