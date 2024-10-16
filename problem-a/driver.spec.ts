import { run } from './driver';
// Mock console.log to capture the output
const LOG: string[] = [];
const storeLogFunction = (...inputs: any[]) => {
  LOG.push(inputs.join(' '));
};
console.log = jest.fn(storeLogFunction);

describe('Driver script tests', () => {
  beforeAll(() => {
    // Clear the log before running the script
    LOG.length = 0;

    // Run the driver script
    run();
  });

  test('Logs the details of each candidate', () => {
    expect(LOG[0]).toBe('Alice (Party A)');
    expect(LOG[1]).toBe('Bob (Party B)');
    expect(LOG[2]).toBe('Charlie (Party C)');
  });

  test('Logs the winner of the race', () => {
    expect(LOG[3]).toBe('The winner of the Presidential Election race is: Alice (Party A) with 2 votes.');
  });
});