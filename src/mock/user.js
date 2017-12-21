module.exports = {

    'POST /login': function (req, res) {
        setTimeout(() => {
            res.json({
                success: true,
                data: {
                    username: 'username1',
                    password: '123',
                    email: '',
                    //男是0,女是1
                    sex: 0,
                    phone: '18940874730',
                    avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2983011205,1072109279&fm=27&gp=0.jpg',
                    signature: '',
                    //文件下载积分
                    score: 0,
                    loginToken: '=======',
                    followers: 1,
                    followeds: 2,
                },
                msg: '',
                code: 0
            });
        }, 500);
    },

    'GET /users': function (req, res) {
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