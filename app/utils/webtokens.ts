import jwt from 'jsonwebtoken';

export default new class JWT {
    signingKey = "tkOHaBJ0ZXshZixQsuFIpUoP3875F8g4";

    encrypt = (data: {}) => {
        return jwt.sign(data, this.signingKey);
    }

    decrypt = (token: string) => {
        return jwt.verify(token, this.signingKey);
    }
}