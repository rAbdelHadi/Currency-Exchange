CREATE TABLE IF NOT EXISTS scheduler (
  name varchar(150) primary key,
  lastRunDate Date
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
