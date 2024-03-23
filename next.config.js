const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/aboutMe',
        permanent: false,
      },
    ]
  },
  images: {
    domains: ['i2.wp.com'], // Add your domain here
  },
};
