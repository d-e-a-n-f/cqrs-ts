import { ICommandConfig } from '../src';

// Test ICommandConfig
describe('ICommandConfig', () => {

  it('should be defined', () => {
    const config: ICommandConfig = {
      commandName: 'test',
      args: {
        test: 'test',
      },
    };
    
    expect(config).toBeDefined();
    expect(config.commandName).toBe('test');
    expect(config.args.test).toBe('test');

  });
});