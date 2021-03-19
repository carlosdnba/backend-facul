const date = () => new Date();

export default {
  dbConnection: (param) => {
    console.log(`Connected as id ${param}, at ${date()}.\n`);
  },
}
