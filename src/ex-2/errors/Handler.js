export default {
  connectionError: (err) => {
    if (err) {
      return console.error('Server could not connect to db: ' + err.stack);;
    };
  },
}
