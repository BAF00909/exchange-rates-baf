import dedent  from 'dedent';
import chalk from 'chalk';

export const printError = (msg) => {
    console.log(dedent(`
        ${ chalk.bgRed(' ERROR ') }
        ${msg}
    `));
}

export const printHelp = () => {
    console.log(dedent(`
    ${ chalk.bgWhite(' HELP ') }
    -s [RATIO] - указать требуемое соотношение валют (USDRUB, EURRUB)
    -h - помощь
`));
}

export const printRatio = (data) => {
    console.log(dedent(`
        💹 ${chalk.bgGreen(' SUCCESS ')} Выбранная валюта: USD
        1USD / ${data.rates.RUB}
    `));
}