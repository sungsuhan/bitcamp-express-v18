const { signup, signin } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup),
x.app.post(`${x.url}/sign-in`, signin)};

