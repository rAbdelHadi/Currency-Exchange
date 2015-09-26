DROP PROCEDURE IF EXISTS exchangeRates_selectByCurrency;

DELIMITER $$

CREATE  PROCEDURE `exchangeRates_selectByCurrency`(
	_currency nchar(3)

)
 begin	
        	
declare _localRate decimal(18,10);

set _localRate = (select rate from exchangeRates where  currency = _currency) ;

select currency , Round(rate / _localRate,4 ) rate  from exchangeRates ;
 
end





