module.exports = {

    'POST /login': function (req, res) {
        let body = JSON.parse(req.body);
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

    'POST /updateToken': function (req, res) {
        setTimeout(() => {
            res.json({
                'data': {
                    'username': 'user111',
                    'email': 'email0',
                    'sex': 1,
                    'phone': '18340857281',
                    'avatar': 'http://210.30.100.189:8080/avatar/9111f64e-9bdd-4610-9d84-ac7937909d7a1.png',
                    'signature': 'String',
                    'score': 10,
                    'loginToken': '738cf6a8-4efa-4e74-946a-457ad1fac375',
                    'id': 1000,
                    'createTime': 1513409577025,
                    'updateTime': 1513918601326
                },
                'success': true
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