import * as multer from 'multer';
var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, `${process.cwd()}/resources/checkin`); // Absolute path. Folder must exist, will not be created for you.
//   },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
const uploadImage = multer({
  // dest:'images',
  storage,
  limits: {
    fileSize: 350000
  },
  fileFilter(req, file: any, cb: any) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error('please enter an Image'));
    }
    cb(undefined, true);
  }
});
export const upload = uploadImage;