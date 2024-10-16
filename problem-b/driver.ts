import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function run() {
  // Step 0: Set up the database schema
  // You will need to 

  // Step 1: Clear existing data
  // Use the deleteMany method to remove all races and candidates
  // Note that "onDelete: Cascade" should be set on the race schema's candidates field
  await prisma.$connect();
  await prisma.race.deleteMany();

  // Step 1: Create a race record with three candidates
  // Store it in a variable called "race"
  const race = await prisma.race.create({
    data: {
      name: 'Presidential Election',
      candidates: {
        create: [
          { name: 'Alice', party: 'Party A' },
          { name: 'Bob', party: 'Party B' },
          { name: 'Charlie', party: 'Party C' },
        ],
      },
    },
    include: {
      candidates: true,
    },
  });

  // Console log out the race object you created
  console.log(JSON.stringify(race));

  // Step 2: Simulate voting for the race
  // Use the update method to increment the votes for each candidate
  // The first candidate should receive 2 votes, all others should receive 1 vote
  await prisma.candidate.update({
    where: { id: race.candidates[0].id },
    data: { votes: { increment: 1 } },
  });
  await prisma.candidate.update({
    where: { id: race.candidates[1].id },
    data: { votes: { increment: 1 } },
  });
  await prisma.candidate.update({
    where: { id: race.candidates[2].id },
    data: { votes: { increment: 1 } },
  });
  await prisma.candidate.update({
    where: { id: race.candidates[0].id },
    data: { votes: { increment: 1 } },
  });


  // Step 3: Get all the candidates from the race
  // This will be an array of Candidate objects
  // Use the findMany method with the orderBy option to sort them by votes in descending order
  const candidates = await prisma.candidate.findMany({
    where: { raceId: race.id },
    orderBy: { votes: 'desc' },
  });

  // Log out each candidate's name, party, and votes
  // Use the format: "[name] ([party]) has [votes] votes."
  for (const candidate of candidates) {
    console.log(`${candidate.name} (${candidate.party}) has ${candidate.votes} votes.`);
  }

  // Step 4: Determine the winner of the election
  // The winner is the first candidate in the candidates array
  const winner = candidates[0];
  console.log(`The winner of the Presidential Election race is: ${winner.name} (${winner.party}) with ${winner.votes} votes.`);
}

// If this file is being run directly, call the run function
// We want to disconnect from the database after running the script
run()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });