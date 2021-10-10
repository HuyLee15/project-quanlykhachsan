const typeRoomRouter = require('./typeRoomRouter');
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceBonusRouter');

const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.use('/api/typeRoom', typeRoomRouter);
    app.use('/api/user', userRouter);
    app.use('/api/service', serviceRouter);

    app.use(errorHandler);
}