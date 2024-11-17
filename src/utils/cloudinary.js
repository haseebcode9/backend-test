import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.IMAGINARY_CLOUD_NAME,
  api_key: process.env.IMAGINARY_API_KEY,
  api_secret: process.env.IMAGINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully
    console.log("file is uploaded on cloudinary ", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the uploader method got failed
    return null;
  }
};

export { uploadOnCloudinary };
