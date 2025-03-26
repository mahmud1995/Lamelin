import path from 'path';
import multer from 'multer';
import { v4 } from 'uuid'; 

/* Server Rasmlarni, Documentlarni yuklab olishga xizmar qiladigan mantiqni xosil qilamiz */ 
// Multer: aDDs => BODY OBJECT and FILE or FILES OBJECT to the ==> REQUEST OBJECT
/** MULTER IMAGE UPLOADER */
function getTargetImageStorage(address: any) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file, cb) {
            const extension = path.parse(file.originalname).ext;
            const random_name = v4() + extension;
            cb(null, random_name);
        },
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage});
};

export default makeUploader;














/*

const product_storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/products'); // uploads/products folder iga yuklesan
    },
    filename: function (req, file, cb) {
        console.log(file);
        const extension = path.parse(file.originalname).ext; // yuklayotgan file ning extension ini ob beradi.
        const random_name = v4() + extension;
        cb(null, random_name);
    },
})


export const uploadProductImage = multer({storage: product_storage});
*/