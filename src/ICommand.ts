import { ICommandResponse } from './ICommandResponse';

export interface ICommand {
  execute: () => ICommandResponse;
};