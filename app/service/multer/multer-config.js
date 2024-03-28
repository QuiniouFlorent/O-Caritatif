import debug from 'debug';
const logger = debug('app:multer');
import multer, { diskStorage } from 'multer';

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};

const storage = function(folder) {
    return multer.diskStorage({
        destination(req,file, callback) {
            callback(null, 'image'+ folder)
        },
        filename
    })
}


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

export default multer({storage: storage}).single('image');