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

-- 导出  表 examapp.answer 结构
CREATE TABLE IF NOT EXISTS `answer` (
  `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `qid` int(11) NOT NULL COMMENT '哪一个题',
  `uid` int(11) DEFAULT NULL COMMENT 'PC端用户的uid',
  `openid` char(120) DEFAULT NULL COMMENT '小程序端的openid',
  `answer` varchar(500) DEFAULT NULL COMMENT '答案',
  `addtimes` datetime DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='用户答题的答案';

-- 正在导出表  examapp.answer 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` (`aid`, `qid`, `uid`, `openid`, `answer`, `addtimes`) VALUES
	(1, 3, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '我的第一个答案', '2018-09-30 13:50:50'),
	(2, 13, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '增删查改', '2018-09-30 13:51:08'),
	(3, 4, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', 'in斯坦大大 ', '2018-09-30 13:52:03'),
	(4, 1, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '1', '2018-09-30 14:00:47'),
	(5, 1, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '2', '2018-09-30 14:00:53'),
	(6, 1, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '12', '2018-09-30 14:01:13'),
	(7, 6, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '跨域你好', '2018-09-30 14:02:23'),
	(8, 11, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '你好', '2018-09-30 14:02:31'),
	(9, 12, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '你好撒地方萨芬', '2018-09-30 14:02:35'),
	(10, 13, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '你好撒地方萨芬阿斯顿发斯蒂芬', '2018-09-30 14:02:39'),
	(11, 1, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '1', '2018-09-30 14:05:16'),
	(12, 2, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '2', '2018-09-30 14:05:26'),
	(13, 3, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '3', '2018-09-30 14:05:33'),
	(14, 4, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '35656', '2018-09-30 14:06:37'),
	(15, 5, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '35656787887', '2018-09-30 14:07:29'),
	(16, 2, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', '123', '2018-09-30 14:09:08'),
	(17, 2, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', 'asdassadf', '2018-09-30 14:12:32'),
	(18, 11, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', 'sdfsaf ', '2018-09-30 14:12:46'),
	(19, 12, NULL, 'oJqvu0HxgC1JOZ7XSIKrPuICmGyc', 'ddfgdg', '2018-09-30 14:12:52');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
