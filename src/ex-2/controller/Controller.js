import httpStatus from '../utils/HttpStatus';

export default {
  default: (req, res) => {
    httpStatus.ok(res);
  }
}
