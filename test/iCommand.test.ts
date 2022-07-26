import { ICommand } from '../src';

// Test ICommand
describe('ICommand', () => {
  it('should be defined', () => {
    const command: ICommand = {
      execute: () => {
        return {
          status: true,
        };
      }
    };

    expect(command).toBeDefined();

    const response = command.execute();
    expect(response.status).toBe(true);
  });
});