import 'dotenv/config';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = function(folder) {
    
    return new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: folder,
            ressource_type: 'image',
            format: (req, file) => 'webp',
            public_id: (req, file) => file.originalname.split(' ').join('_') + Date.now(),
            transformation: { quality : 'auto:eco' }
        }
    })
};

const upload = function(folder) {
    return multer({storage: storage(folder)});
};

export default upload;