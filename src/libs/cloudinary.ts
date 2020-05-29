import { config } from '../config/index';

const config_val = {
  cloud_name: config.cloudinary.CLOUDINARY_NAME ,
  api_key: config.cloudinary.API_KEY_CLOUDINARY ,
  api_secret:
    config.cloudinary.CLOUDINARY_PASSWORD 
};

export default config_val;