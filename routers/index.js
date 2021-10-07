const typeRoomRouter = require('./typeRoomRouter');
const userRouter = require('./userRouter');

module.exports = (app) => {
    app.use('/api/typeRoom', typeRoomRouter);
    app.use('/api/user', userRouter);
}