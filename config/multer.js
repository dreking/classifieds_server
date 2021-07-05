const multer = require('multer');
const fs = require('fs');

const log = require('../config/winston');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname.replace(' ', ''));
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const deleteFile = (path) => {
    fs.unlink(path, (err) => {
        if (err) {
            log.error('Error deleting file');
        }

        log.info('File deleted successfully');
    });
};

module.exports = { storage, fileFilter, deleteFile };
