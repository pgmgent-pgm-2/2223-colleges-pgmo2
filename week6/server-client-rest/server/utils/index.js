/*
Import extrnal packages
*/
const path = require('path');
const util = require('util');
const mime = require('mime-types');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const convertArrayToPagedObject = (arr, itemsPerPage, currentPage) => ({
  pageing: {
    itemsPerPage: parseInt(itemsPerPage, 10) || 10,
    currentPage: parseInt(currentPage, 10) || 1,
    totalPages: Math.ceil(arr.length / itemsPerPage),
    totalItems: arr.length,
  },
  results: arr.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage),
});

const handleHTTPError = (error, next) => next(error);

function HTTPError(message, statusCode) {
  const instance = new Error(message);
  instance.statusCode = statusCode;

  return instance;
}

/*
Multer settings
*/
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    const mimeType = mime.lookup(file.originalname);
    const uniqueSuffix = `${Date.now()}-${uuidv4()}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.${mime.extension(mimeType)}`);
  },
});
const uploadFiles = multer({ storage: uploadStorage }).array('files');
const uploadFilesMiddleware = util.promisify(uploadFiles);

module.exports = {
  convertArrayToPagedObject,
  handleHTTPError,
  HTTPError,
  uploadFilesMiddleware,
};
