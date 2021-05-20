import path from 'path'
import crypto from 'crypto'
import multer from 'multer'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

const SESConfig = {
    accessKeyId: process.env.AWS_ACESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
}
aws.config.update(SESConfig)
const storageTypes = {
    local: multer.diskStorage({
        destination: (request: any, file: any, cb: any) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'images', 'locales'))
        },
        filename: (request: any, file: any, cb: any) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) {
                    cb(error)
                } else {
                    file.key = `${hash.toString('hex')}_${file.originalname}`
                    cb(null, file.key)
                }
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'turistas-oficina',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (request, file, cb) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) {
                    cb(error)
                } else {
                    const filename = `${hash.toString('hex')}_${file.originalname}`
                    cb(null, filename)
                }
            })
        }
    })
}
export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3000,
        localesPath: './dist/images/locales/'
    },
    db: { url: process.env.DB_URL || 'mongodb+srv://turistas:turistas@turistas.jpes4.mongodb.net/turistas?retryWrites=true&w=majority' },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        secret: process.env.SECRET || '3904a66849cee880d8014f7acaafe8d9',
        cors:
        {
            origin: 'http://localhost:4200/',
            optionsSuccessStatus: 200
        }
    }
}