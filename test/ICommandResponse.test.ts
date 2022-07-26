import { ICommandResponse } from '../src';

// Test ICommandResponse
describe('ICommandResponse', () => {
  it('should be defined', () => {
    
    const response: ICommandResponse = {
      status: true,
    };

    expect(response).toBeDefined();

    expect(response.status).toBe(true);
  });
});