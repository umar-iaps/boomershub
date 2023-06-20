import { Request, Response } from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';

// Configure AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: 'AKIAWPRZBPDTRGU5WSDY',
  secretAccessKey: 't9iDZCSwLRL5dpHlngsn0MlXqNFad6qPknOQZGIA',
  region: 'ap-southeast-1',
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

// Configure multer storage for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

export const getImage = (req: Request, res: Response) => {
  console.log("I am in get image");
  const params = {
    Bucket: 'boomers-hub',
    Key: req.params.key
  };

  s3.getObject(params, (err, data) => {
    console.log("data is ", data);
    if (err) {
      console.log(err);
      return res.status(500).send('Error retrieving image from S3');
    }

    res.set('Content-Type', data.ContentType);
    res.send(data.Body);
  });
}

export const uploadImage = (req: Request, res: Response) => {
  upload(req, res, (err: any) => {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).json({ error: 'Error uploading image' });
    }

    const file = req.file as Express.Multer.File; // Access the uploaded file using req.file

    // Configure the parameters for uploading the image to S3
    const params: AWS.S3.PutObjectRequest = {
      Bucket: 'boomers-hub',
      Key: file.originalname, // Use a unique key or filename for the image in S3
      Body: file.buffer, // Use the buffer of the uploaded file
      ACL: 'public-read', // Set the access control to allow public read access to the uploaded image
      ContentType: file.mimetype, // Set the content type of the image file
    };

    // Upload the image to S3
    s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
      if (err) {
        console.error('Error uploading image to S3:', err);
        return res.status(500).json({ error: 'Error uploading image to AWS S3' });
      }

      // Return the S3 URL of the uploaded image as a response
      res.json({ imageUrl: data.Location });
    });
  });
};
