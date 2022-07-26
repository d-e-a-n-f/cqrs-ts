import { ICommandConfig, ICommandFactory } from '../src';

// Test ICommandFactory
describe('ICommandFactory', () => {
  it('should be defined', () => {
    const factory: ICommandFactory = {
      makeCommand: (_config: ICommandConfig) => {
        return {
          execute: () => {
            return {
              status: true,
            }
          }
        };
      }
    };

    expect(factory).toBeDefined();

    const command = factory.makeCommand({
      commandName: 'test',
      args: {
        test: 'test',
      },
    });

    expect(command).toBeDefined();

    const response = command.execute();
    expect(response.status).toBe(true);

  });
});