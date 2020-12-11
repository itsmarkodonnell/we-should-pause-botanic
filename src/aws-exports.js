require('dotenv').config()

const config =  {
  Auth: {
    mandatorySignIn: false,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USERPOOL_WEB_CLIENT_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    identityPoolRegion: process.env.REACT_APP_REGION,
  },
  Storage: {
    AWSS3: {
        bucket: process.env.REACT_APP_ANIMATION_BUCKET_NAME, 
        region: process.env.REACT_APP_REGION,
        customPrefix: {
          public: 'public/',
          protected: 'protected/',
          private: 'private/'
      },
    }
  },
  API: {
    endpoints: [
      {
        name: process.env.REACT_APP_API_NAME,
        endpoint: process.env.REACT_APP_API_ENDPOINT
      },
    ]
  }
};

export default config;