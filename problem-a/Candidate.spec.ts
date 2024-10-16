import { Candidate } from './Candidate';

describe('Candidate', () => {
  let candidate: Candidate;

  beforeEach(() => {
    candidate = new Candidate('John Doe', 'Independent');
  });

  test('should return candidate details', () => {
    expect(candidate.getDetails()).toBe('John Doe (Independent)');
  });

  test('should initialize with zero votes', () => {
    expect(candidate.getVotes()).toBe(0);
  });

  test('should increment votes', () => {
    candidate.addVote();
    expect(candidate.getVotes()).toBe(1);
  });

  test('should increment votes multiple times', () => {
    candidate.addVote();
    candidate.addVote();
    candidate.addVote();
    expect(candidate.getVotes()).toBe(3);
  });

  test('should handle different candidate names and parties', () => {
    const candidate2 = new Candidate('Jane Smith', 'Democrat');
    expect(candidate2.getDetails()).toBe('Jane Smith (Democrat)');
    expect(candidate2.getVotes()).toBe(0);
  });
});