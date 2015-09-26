DROP PROCEDURE IF EXISTS exchangeRates_insert;

DELIMITER $$

CREATE  PROCEDURE `exchangeRates_insert`(
	_currency nchar(3),
	_rate decimal(18,5),
	_rateDate Date

)
insertScope:begin

declare _oldRateDate date ;

 set _oldRateDate = (select rateDate from exchangeRates where currency = _currency )  ;


if(_oldRateDate is null or _oldRateDate <  _rateDate) then /*Update Exchange Rate table only if there is no record to this currency or the rateDate is older than new rateDate*/
insert into exchangeRates
(currency , rate , rateDate )
values
(_currency , _rate , _rateDate )
ON DUPLICATE KEY
UPDATE currency=_currency,rate = _rate , rateDate = _rateDate ;
end if ;

/*insert exchange rate logs for future use and for data integrity*/

insert into exchangeRatesLogs
(currency , rate , rateDate )
values
(_currency , _rate , _rateDate );


select _currency currency , _rate rate ;
end





