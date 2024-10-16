import { VotingMachine } from './VotingMachine';
import { Candidate } from './Candidate';

describe('VotingMachine', () => {
  let votingMachine: VotingMachine;
  let candidate1: Candidate;
  let candidate2: Candidate;

  beforeEach(() => {
    votingMachine = new VotingMachine();
    candidate1 = new Candidate('Alice', 'Party A');
    candidate2 = new Candidate('Bob', 'Party B');
  });

  test('should add a new race with candidates', () => {
    votingMachine.addRace('Race 1', [candidate1, candidate2]);
    const candidates = votingMachine.getCandidatesByRace('Race 1');
    expect(candidates).toEqual([candidate1, candidate2]);
  });

  test('should get the ballot for a race', () => {
    votingMachine.addRace('Race 1', [candidate1, candidate2]);
    const ballot = votingMachine.getBallot('Race 1');
    expect(ballot).toBe('Alice (Party A), Bob (Party B)');
  });

  test('should cast a vote for a candidate', () => {
    votingMachine.addRace('Race 1', [candidate1, candidate2]);
    votingMachine.castVote('Race 1', candidate1);
    expect(candidate1.getVotes()).toBe(1);
    expect(candidate2.getVotes()).toBe(0);
  });

  test('should determine the winner of a race', () => {
    votingMachine.addRace('Race 1', [candidate1, candidate2]);
    votingMachine.castVote('Race 1', candidate1);
    votingMachine.castVote('Race 1', candidate1);
    votingMachine.castVote('Race 1', candidate2);
    const winner = votingMachine.determineWinner('Race 1');
    expect(winner.details).toBe('Alice (Party A)');
    expect(winner.votes).toBe(2);
  });

  test('should return "none" as winner if no votes are cast', () => {
    votingMachine.addRace('Race 1', [candidate1, candidate2]);
    const winner = votingMachine.determineWinner('Race 1');
    expect(winner.details).toBe('none');
    expect(winner.votes).toBe(0);
  });

  test('should return "none" as winner if no candidates are present', () => {
    votingMachine.addRace('Race 1', []);
    const winner = votingMachine.determineWinner('Race 1');
    expect(winner.details).toBe('none');
    expect(winner.votes).toBe(0);
  });

  test('should return an empty array if race does not exist', () => {
    const candidates = votingMachine.getCandidatesByRace('Nonexistent Race');
    expect(candidates).toEqual([]);
  });
});