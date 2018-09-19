-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.5.0.5280
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 examapp.comment 结构
CREATE TABLE IF NOT EXISTS `comment` (
  `cid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(11) NOT NULL COMMENT '谁评论的',
  `qid` int(11) NOT NULL COMMENT '评论了哪一个试题',
  `content` varchar(500) NOT NULL COMMENT '评论内容',
  `addtimes` datetime DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1' COMMENT '1表示正常',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论信息';

-- 正在导出表  examapp.comment 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 导出  表 examapp.questions 结构
CREATE TABLE IF NOT EXISTS `questions` (
  `qid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` text NOT NULL,
  `cid` int(11) NOT NULL,
  `answer` text,
  `anyle` text,
  `keywords` varchar(500) DEFAULT NULL,
  `import` tinyint(4) NOT NULL DEFAULT '1',
  `diffict` tinyint(4) NOT NULL DEFAULT '1',
  `comefrom` varchar(200) DEFAULT NULL,
  `aid` int(11) NOT NULL,
  `username` char(6) NOT NULL,
  `addtimes` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='试题表';

-- 正在导出表  examapp.questions 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`qid`, `title`, `cid`, `answer`, `anyle`, `keywords`, `import`, `diffict`, `comefrom`, `aid`, `username`, `addtimes`, `status`) VALUES
	(1, '<p>1</p>', 2, '<p>2</p>', '<p>3</p>', '4', 5, 3, '新华社', 1, '管理员', '2018-09-19 09:38:57', 1),
	(2, '<p>时空裂缝就开始拉法基</p><p>撒飞洒的发顺丰</p><p><br></p><p>爱傻傻的各大</p><p><img src="http://lulaoshi:81/uploads/2018/09/1537321672623_98115719.jpg" style="max-width:100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672648_14365734.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672655_53470830.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672707_86695581.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672709_76616687.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672745_56533326.jpg" style="max-width: 100%;"><br></p>', 7, '<p>阿斯达所</p>', '<p>阿萨达多所</p>', '', 2, 3, '', 1, '管理员', '2018-09-19 09:48:05', 1),
	(3, '<p>时空裂缝就开始拉法基</p><p>撒飞洒的发顺丰</p><p><br></p><p>爱傻傻的各大</p><p><img src="http://lulaoshi:81/uploads/2018/09/1537321672623_98115719.jpg" style="max-width:100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672648_14365734.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672655_53470830.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672707_86695581.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672709_76616687.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672745_56533326.jpg" style="max-width: 100%;"><br></p>', 7, '<p>阿斯达所</p>', '<p>阿萨达多所</p>', '', 2, 3, '', 1, '管理员', '2018-09-19 09:48:07', 1),
	(4, '<p>时空裂缝就开始拉法基</p><p>撒飞洒的发顺丰</p><p><br></p><p>爱傻傻的各大</p><p><img src="http://lulaoshi:81/uploads/2018/09/1537321672623_98115719.jpg" style="max-width:100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672648_14365734.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672655_53470830.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672707_86695581.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672709_76616687.jpg" style="max-width: 100%;"><img src="http://lulaoshi:81/uploads/2018/09/1537321672745_56533326.jpg" style="max-width: 100%;"><br></p>', 7, '<p>阿斯达所</p>', '<p>阿萨达多所</p>', '', 2, 3, '', 1, '管理员', '2018-09-19 09:48:07', 1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
