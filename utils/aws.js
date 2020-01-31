const AWS = require('aws-sdk');
const fs = require('fs');

module.exports = async (path = 'others', file) => {
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    Bucket: process.env.AWS_BUCKET_NAME
  });

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
