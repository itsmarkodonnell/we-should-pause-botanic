import { API } from 'aws-amplify';
require('dotenv').config()

const listAllAnimations = async () => {
  const apiName = process.env.REACT_APP_API_NAME;
  const path = '/animations';

  return await API.get(apiName, path, {});
};

export { listAllAnimations };
