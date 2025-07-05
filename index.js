const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucket = process.env.BUCKET;
    const key = 'sunset.jpeg';
    const kmsKeyId = process.env.KMS_KEY_ID;

    const params = {
        Bucket: bucket,
        Key: key,
        Expires: 300,
        ServerSideEncryption: 'aws:kms',
        SSEKMSKeyId: kmsKeyId,
        ContentType: 'image/jpeg'
    };

    try {
        const uploadUrl = s3.getSignedUrl('putObject', params);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Upload your sunset using this pre-signed URL',
                url: uploadUrl,
                key: key,
            }),
        };
    } catch (err) {
        console.error('Error generating pre-signed URL:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to generate URL' }),
        };
    }
};
