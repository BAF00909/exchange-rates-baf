import { Command } from 'commander';

export const getCommandParams = () => {
    const program = new Command();
    program.option('-s <type>', '--settype <type>', 'USDRUB');
    program.option('-h', '--uhelp');
    program.parse(process.argv);
    const options = program.opts();
    return options;
}
