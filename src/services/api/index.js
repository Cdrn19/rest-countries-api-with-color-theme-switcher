const API = process.env.API;
const VERSION = process.env.VERSION;

const endPoints = {
  countries: {
    all: `${API}/${VERSION}/all`,
  },
  country: {
    name: `${API}/${VERSION}/name`,
  },
  listOfCode: {
    alpha: `${API}/${VERSION}/alpha?codes=`,
  },
};

export default endPoints;
