DROP PROCEDURE IF EXISTS scheduler_insert;

DELIMITER $$

CREATE  PROCEDURE `scheduler_insert`(
	_name varchar(150),
	_lastRunDate Date
)
begin

INSERT INTO  scheduler (name,lastRunDate ) VALUES (_name,_lastRunDate)
  ON DUPLICATE KEY UPDATE lastRunDate=_lastRunDate;

end;


