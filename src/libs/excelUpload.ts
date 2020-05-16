import * as multer from 'multer';
const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
const uploadExcel = multer({
  // dest:'images',
  storage,
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file: any, cb: any) {
    if (!file.originalname.match(/\.(xlsx)$/)) {
      return cb(new Error('please enter an excel file'));
    }
    cb(undefined, true);
  }
});
export const excelUpload = uploadExcel;