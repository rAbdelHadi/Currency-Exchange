CREATE TABLE IF NOT EXISTS exchangeRates (
  currency nchar(3) primary key,
  rate decimal(18,5),
  rateDate Date  ,
  lastUpdatedOn timestamp not null default CURRENT_TIMESTAMP,
  KEY `rateDate_idx` (`rateDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
