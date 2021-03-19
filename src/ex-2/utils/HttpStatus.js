export default {
  ok: (response) => {
    response.status(200).json({
      "status": "OK",
      "working": "absolutely"
    });
  },
  error: (response) => {
    response.status(500).json({
      "status": "database error" + err
    });
  }
}