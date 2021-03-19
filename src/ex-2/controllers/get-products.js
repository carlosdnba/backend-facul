import data from '../db/data';

export default (req, res) => {
  res.status(200).json({
    data,
  });
};
