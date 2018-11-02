const userModel = require('../lib/mysql.js');
// const md5 = require("md5");
// const checkNotLogin = require("../middlewares/check.js").checkNotLogin;
// const checkLogin = require("../middlewares/check.js").checkLogin;
const moment = require('moment');
const fs = require('fs');

// exports.getSignup = async ctx => {
//   await checkNotLogin(ctx);
//   await ctx.render("signup", {
//     session: ctx.session
//   });
// };
exports.postSignup = async ctx => {
	let { name, password, sex } = ctx.request.body;
  console.log(name, password, sex);
	await userModel.findDataCountByName(name).then(async result => {
		console.log(result);
		if (result[0].count >= 1) {
			// 用户存在
			ctx.body = {
				code: 500,
				message: '用户存在',
			};
		} else {
			await userModel
				.insertData([name, password, sex, moment().format('YYYY-MM-DD HH:mm:ss')])
				.then(res => {
					console.log('注册成功', res);
					//注册成功
					ctx.body = {
						code: 200,
						message: '注册成功',
					};
				});
		}
	});
};
