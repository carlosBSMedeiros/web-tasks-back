module.exports = app => {
    app.use('/user' , require('./UserRoute'))
    app.use('/user' , require('./AuthenRoute'))
    app.use('/user/:user_id/task', require('./TaskRoutes'))
};