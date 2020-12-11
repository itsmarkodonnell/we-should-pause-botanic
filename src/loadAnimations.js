import { API } from 'aws-amplify';

const listAllAnimations = async () => {
  const apiName = 'prod-pause-api';
  const path = '/animations';

  return await API.get(apiName, path, {});
};

export { listAllAnimations };
