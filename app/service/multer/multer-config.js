import debug from 'debug';
const logger = debug('app:multer');
import 'dotenv/config';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};

const storage = function(folder) {
    return new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: folder,
            format: (req, file) => MIME_TYPES[file.mimetype] || 'jpg',
            public_id: (req, file) => file.originalname.split(' ').join('_') + Date.now()
        }
    })
};

const upload = function(folder) {
    return multer({storage: storage(folder)});
};

/*
const storage2 = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'image/');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now()+ '.' + extension);
    }
})

destination : (req,file, callback) => {
            callback(null, 'image/'+ folder)
        },
        filename : (req, file, callback) => {
            const name = file.originalname.split(' ').join('_');
            const extension = MIME_TYPES[file.mimetype];
            callback(null, name + Date.now() + '.' + extension);
        }

*/
export default upload;