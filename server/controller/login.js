const userModel = require('../lib/mysql.js')

exports.postLogin = async ctx => {
    console.log(ctx.request.body)
    let { name, password } = ctx.request.body
    console.log(name,password);
    
    await userModel.findDataByName(name)
        .then(result => {
            let res = result
            /**
             * [ RowDataPacket {
              id: 4,
              name: '幸福的人那',
              pass: 'admin2',
              sex: '0',
              moment: '2018-11-02 17:22:34' } ]
             */
            console.log(res);
            if (res.length && name === res[0]['name'] && password === res[0]['pass']) {
                ctx.session = {
                    user: res[0]['name'],
                    id: res[0]['id']
                }
                ctx.body = {
                    code: 200,
                    message: '登录成功'
                }
                console.log('ctx.session.id', ctx.session.id)
                console.log('session', ctx.session)
                console.log('登录成功')
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名或密码错误'
                }
                console.log('用户名或密码错误!')
            }
        }).catch(err => {
            console.log(err)
        })

}