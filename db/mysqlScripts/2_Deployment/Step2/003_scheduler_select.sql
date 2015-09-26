DROP PROCEDURE IF EXISTS scheduler_selectLastRunTime;

DELIMITER $$

CREATE  PROCEDURE `scheduler_selectLastRunTime`(
	_name varchar(150)
)
begin
	select lastRunDate from scheduler where name like  _name ;
end;
