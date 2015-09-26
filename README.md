# Currency-Exchange
Simple Demo for Currency Exchange Web app and it's related service

## Prerequisites
1. install Mysql -- https://dev.mysql.com/downloads/mysql/
2. install Git https://git-scm.com/download/win
3. install node.js -- https://nodejs.org/en/

### Keep in mind
1. Please make sure to make mysql **username: root** and the **password: 123456** because root user credentails will be used 
when deploying the db script in **Currency-Exchange\db\mysqlScripts\mysqlrunner.dev** windows command and in 
the server and the service configuration files.

2. Please make sure to choose default collation utf8 when installing mysql .


## Deployment process
1. Run **Currency-Exchange\db\mysqlScripts\mysqlrunner.dev** for deploying the needed scripts. 
2. Run **Currency-Exchange\server\install** command for installing the needed node.js modules for the server.
3. Run **Currency-Exchange\service\install** command for installing the needed node.js modules for the service.

## Running process
1. Run **Currency-Exchange\service\run service** command for starting the currency exchange service
2. Run **Currency-Exchange\server\run server** command for starting the currency exchange server
3. Browse\Currency-Exchange\website\index.html file.

## Desing overview :
### Currency Exchange Service : 
responsible to get the currency exchange rates from the third party and insert these rates in the DB.

* ExchangeRate table : used to maintain the latest rate for each currency.
* ExchangeRatesLogs table : will be used in the future for making exchange rates chart and also for the data validity.
* Scheduler table : used to maintain the last date when the service has been run.

### Currency Exchange Server  
 responsible for the Restful API .
* Restful API :
1. convert : convert a given value from currency to currency using the latest rates .
  * http Method : GET
  * params : fromCurrency , toCurrency , value
2. getRates  : get all curency rates for a specifc currency 
  * http Method : GET
  * params : currency









