import { ICommand } from './ICommand';
import { ICommandConfig } from './ICommandConfig';

export interface ICommandFactory {
  makeCommand: (config: ICommandConfig) => ICommand;
};