import { Candidate } from './Candidate';

export class VotingMachine {
    // Declare a private variable named races
    // This variable should be an object with keys
    // representing the race name and values representing an array of candidates

    /**
     * Create a new method called addRace that
     * adds a new race with the given candidates to the voting machine.
     * @param raceName - The name of the race to add.
     * @param candidates - An array of candidates in the race.
     * @returns void
     */

    /**
     * Create a new method called getBallot that
     * gets the details of all candidates in a race, separated by ", "
     * @param raceName - The name of the race to get the ballot for.
     * @returns - A string containing the details of all candidates.
     */


    /**
     * Create a new method called castVote that
     * records a vote for the given candidate
     * @param raceName - The name of the race to vote in.
     * @param candidate - The candidate to vote for.
     * @returns void
     */


    /**
     * Create a new method called resetVotes that
     * resets the vote count for all candidates
     * @returns void
     */


    /**
     * Create a new method called getCandidatesByRace that
     * gets all candidates for a given race
     * @param raceName - The race to get candidates for.
     * @returns An array of candidates
     */


    /**
     * Create a new metho called determineWinner that
     * determines the winner of a given race name. 
     * If no votes are cast, or no candidate is present, the winner is "none".
     * @param raceName - The name to compute the winner for
     * @returns An object containing the winner's details and number of votes
     */

}

// Interface for the winner object
// You will return this object from the determineWinner method
export interface Winner {
    details: string;
    votes: number;
}
