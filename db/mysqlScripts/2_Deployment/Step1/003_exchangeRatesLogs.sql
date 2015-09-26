CREATE TABLE IF NOT EXISTS exchangeRatesLogs (
  exchangeRateId int(11) primary key AUTO_INCREMENT,
  currency nchar(3),
  rate decimal(18,5),
  rateDate Date  ,
  createdOn timestamp not null default CURRENT_TIMESTAMP,
  KEY `rateDate_idx` (`rateDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
