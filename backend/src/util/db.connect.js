const mongoose = require('mongoose');
// custom
require('./../util/colors');
import { getDBUri } from './config.util';

// the two warnings when mongoose interacts with driver of MongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(getDBUri(), options, ()=>{ console.log(`DB Connected`.info); });