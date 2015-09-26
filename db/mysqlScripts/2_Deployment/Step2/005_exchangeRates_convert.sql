DROP PROCEDURE IF EXISTS exchangeRates_convert;

DELIMITER $$

CREATE  PROCEDURE `exchangeRates_convert`(
	_fromCurrency nchar(3),
	_toCurrency  nchar(3),
	_value decimal(18,5)

)
 begin	
        	
declare _fromCurrencyRate decimal(18,5);
declare _toCurrencyRate decimal(18,5);

set _fromCurrencyRate = (select rate from exchangeRates where  currency = _fromCurrency) ;
set _toCurrencyRate =   (select rate from exchangeRates where  currency = _toCurrency) ;

select  round(( _value / _fromCurrencyRate ) * _toCurrencyRate,4) value ;

 
end





