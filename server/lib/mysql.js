/**
 * 数据库操作增删改查
 */
var mysql = require("mysql");
var config = require("../config/default.js");

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        //==================================
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
          //==================================
        });
      }
    });
  });
};

let users = `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     pass VARCHAR(100) NOT NULL COMMENT '密码',
     sex  VARCHAR(100) NOT NULL COMMENT '性别',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`;

let posts = `create table if not exists posts(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '文章作者',
     title TEXT(0) NOT NULL COMMENT '评论题目',
     content TEXT(0) NOT NULL COMMENT '评论内容',
     md TEXT(0) NOT NULL COMMENT 'markdown',
     uid VARCHAR(40) NOT NULL COMMENT '用户id',
     moment VARCHAR(100) NOT NULL COMMENT '发表时间',
     comments VARCHAR(200) NOT NULL DEFAULT '0' COMMENT '文章评论数',
     pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
     avator VARCHAR(100) NOT NULL COMMENT '用户头像',
     PRIMARY KEY(id)
    );`;

let comment = `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名称',
     content TEXT(0) NOT NULL COMMENT '评论内容',
     moment VARCHAR(40) NOT NULL COMMENT '评论时间',
     postid VARCHAR(40) NOT NULL COMMENT '文章id',
     avator VARCHAR(100) NOT NULL COMMENT '用户头像',
     PRIMARY KEY(id)
    );`;

let createTable = sql => {
  return query(sql, []);
};

// 建表
createTable(users);
console.log('创建一张表吧')
createTable(posts);
createTable(comment);




// 通过名字查找用户数量判断是否已经存在
exports.findDataCountByName = name => {
  let _sql = `select count(*) as count from users where name="${name}";`;
  return query(_sql);
};
// 注册用户
exports.insertData = value => {
  let _sql = "insert into users set name=?,pass=?,sex=?,moment=?;";
  return query(_sql, value);
};
// 删除用户
exports.deleteUserData = name => {
  let _sql = `delete from users where name="${name}";`;
  return query(_sql);
};
// 查找用户
exports.findUserData = name => {
  let _sql = `select * from users where name="${name}";`;
  return query(_sql);
};
// 通过名字查找用户 ===========登陆
exports.findDataByName =  ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}