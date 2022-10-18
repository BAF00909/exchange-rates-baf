#!/usr/bin/env node
import { getCommandParams }  from './helpers/argv-parse.js';
import { printError, printHelp, printRatio } from './services/log.service.js';
import { getExchangeRates } from './services/api.service.js';

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
    if(params.s) {
        
    }
    if(params.h) {
        printHelp();
    }
    getForecast();
}

main();