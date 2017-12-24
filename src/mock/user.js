module.exports = {

    'POST /login': function (req, res) {
        let body = req.body;
        console.log(body);
        if (body.phone === '111' && body.password === '123')
            setTimeout(() => {
                res.json({
                    'data': {
                        'username': 'username0',
                        'email': 'email0',
                        'sex': 0,
                        'phone': '111',
                        'avatar': 'http://q.qlogo.cn/qqapp/1105716704/9F0208D3381DA5DCBAD56380900972B2/100',
                        'score': 10,
                        'loginToken': '6230f89f-a83b-4185-8c01-b06fbf0cbdf3',
                        'followers': 0,
                        'followeds': 0,
                        'id': 1000,
                        'createTime': 1513409577025,
                        'updateTime': 1513915951817
                    },
                    'success': true
                });
            }, 500);
        else
            res.json({
                'success': false
            });
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