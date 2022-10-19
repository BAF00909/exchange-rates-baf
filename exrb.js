#!/usr/bin/env node
import { getCommandParams }  from './helpers/argv-parse.js';
import { printError, printHelp, printRatio } from './services/log.service.js';
import { getExchangeRates } from './services/api.service.js';
import { saveKeyValue, getKeyValue } from './services/store.service.js';
import { ECurrency } from './model/dictionaries.js';


const getForecast = async () => {
    try{
        const ratio = await getExchangeRates();
        printRatio(ratio);
    } catch (e) {
        printError(e.message)
    }
}

const main = () => {
    const params = getCommandParams();
    if(params.s !== ECurrency.USDRUB) {
        return saveKeyValue('s', params.s);
    }
    if(params.h) {
        printHelp();
    }
    getForecast();
}

main();