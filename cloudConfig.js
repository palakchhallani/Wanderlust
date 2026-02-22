// const cloudinary = require("cloudinary").v2;
// const multerStorageCloudinary = require("multer-storage-cloudinary");
// const { CloudinaryStorage } = multerStorageCloudinary;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });
// console.log("Cloudinary object:", typeof cloudinary);

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "wanderlust_DEV",
//     allowed_formats: ["png", "jpg", "jpeg"],
//   },
// });

// module.exports = {
//   cloudinary,
//   storage,
// };

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports = cloudinary;
