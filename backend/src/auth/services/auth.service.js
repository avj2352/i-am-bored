/**
 * PAJ - All Authentication Logic Goes here
 */
const { v4: uuidv4 } = require('uuid');
import { getEnvCustomPassword } from '../../util/config.util';

 export class AuthService {
    constructor() {
        this.token01 = uuidv4();
        this.token02 = uuidv4();
        // bind
        this.customAuthenticate = this.customAuthenticate.bind(this);
        this.getCustomUserDetails = this.getCustomUserDetails.bind(this);
    }
     
    //PAJ - FIXME: Remove customAuthentication once integrated with Google API
    customAuthenticate(req, res) {
         // console.log(`Custom Authentication: ${JSON.stringify(req.body)}`);
        if (req.body.username && req.body.password) {
            console.log(`Username & password is: ${req.body.username}, ${req.body.password}`.success);
            const serverPassword = getEnvCustomPassword(); 
            if (req.body.password === serverPassword) {
                if (req.body.username === 'divine3d@gmail.com' || req.body.username === 'admin@gmail.com') {
                    res.send({accessToken: this.token01}).status(201);
                } else {
                    res.send({accessToken: this.token02}).status(201);
                }
            } else {
                res.sendStatus(400);
            }
        }
    }

    // PAJ - FIXME: Remove User details once integrated with Google API
    getCustomUserDetails (req, res) {
         // console.log(`${JSON.stringify(req.headers)}`.warn);
        if (req.headers['authorization'] === `Bearer ${this.token01}`) {
            res.send({firstName: `Ananth`, lastName: `[Admin]`}).status(200);
        } else if (req.headers['authorization'] === `Bearer ${this.token02}`) {
            res.send({firstName: `Pramod`, lastName: `[User]`}).status(200);
        } else {
            res.sendStatus(400); 
        }
    }
 }