module.exports = {

    'GET /authc/file/dir': function (req, res) {
        setTimeout(() => {
            res.json({
                error: null,
                status: 200,
                msg: {
                    token: 'token',
                    LoginToken: 'LoginToken',
                }
            });
        }, 500);
    }
};