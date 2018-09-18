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


-- 导出 examapp 的数据库结构
CREATE DATABASE IF NOT EXISTS `examapp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `examapp`;

-- 导出  表 examapp.admin 结构
CREATE TABLE IF NOT EXISTS `admin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` char(6) NOT NULL COMMENT '账号',
  `passwd` char(32) NOT NULL COMMENT '密码',
  `loginnums` int(11) NOT NULL DEFAULT '0' COMMENT '登录次数',
  `lasttimes` datetime DEFAULT NULL COMMENT '最后一次登录时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1表示正常',
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='管理员信息';

-- 正在导出表  examapp.admin 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`aid`, `username`, `passwd`, `loginnums`, `lasttimes`, `status`) VALUES
	(1, '管理员', 'e10adc3949ba59abbe56e057f20f883e', 0, NULL, 1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 导出  表 examapp.category 结构
CREATE TABLE IF NOT EXISTS `category` (
  `cid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `catename` varchar(50) NOT NULL COMMENT '分类名称',
  `aid` int(11) NOT NULL COMMENT '添加信息的管理员的id',
  `username` char(6) NOT NULL COMMENT '管理员账号',
  `addtimes` datetime NOT NULL COMMENT '添加时间',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1表示正常',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  examapp.category 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`cid`, `catename`, `aid`, `username`, `addtimes`, `status`) VALUES
	(1, 'CSS', 1, '管理员', '2018-09-18 16:27:24', 1),
	(2, 'JAVASCRIPT', 1, '管理员', '2018-09-18 16:27:48', 1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
