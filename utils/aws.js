const AWS = require('aws-sdk');
const fs = require('fs');

const s3bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  Bucket: process.env.AWS_BUCKET_NAME
});

module.exports.uploadFile = async (path = 'others', file) => {
  try {
    await s3bucket.headBucket();

    let upload = await s3bucket
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${path}/${file.originalname}`,
        ACL: 'public-read',
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype
      })
      .promise();
    return { success: true, uri: upload.Location };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
};

module.exports.removeFile = async (folder, fileName) => {
  try {
    await s3bucket.headBucket();
    await s3bucket
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${folder}/${fileName}`
      })
      .promise();
  } catch (err) {
    console.log(err);
  }
};
