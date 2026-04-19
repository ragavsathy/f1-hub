import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()

const driversData = [
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    colorClass: "team-blue",
    title: "Defending 2026 Title Hopeful",
    summary: "In 2026, Max continues to extract every ounce of aerodynamic performance from the RB chassis, adapting ruthlessly to new active aero regulations.",
    races: [
      {
        raceId: "dutch-gp-26",
        name: "Dutch Grand Prix",
        status: "Completed",
        theGood: "Flawless launch handling extreme load on dry tyres. Aggressive defense on lap 14 secured track position over Lando.",
        theBad: "Ignored initial suggestions to pit for mediums, costing roughly 1.5 seconds per lap under VSC.",
        telemetry: "P2 - Avg pace: 1:13.4s | Fastest lap: 1:12.7s (L65) | Deg: Moderate",
        laps: [
          { lapNum: 1, time: "1:16.820", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 2, time: "1:14.210", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 3, time: "1:14.050", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 4, time: "1:14.100", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 5, time: "1:14.300", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 6, time: "1:14.800", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 7, time: "1:15.200", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 8, time: "1:16.900", tyre: "Soft (C3)", pitStop: true },
          { lapNum: 9, time: "1:35.200", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 10, time: "1:13.800", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 11, time: "1:13.600", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 12, time: "1:13.400", tyre: "Medium (C2)", pitStop: false }
        ]
      },
      {
        raceId: "italian-gp-26",
        name: "Italian Grand Prix",
        status: "Upcoming"
      }
    ]
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    team: "McLaren",
    colorClass: "team-papaya",
    title: "The Challenger",
    summary: "Lando is driving events this season with raw one-lap pace. His qualifying dominance frequently dictates the entire grid's Sunday strategy.",
    races: [
      {
        raceId: "dutch-gp-26",
        name: "Dutch Grand Prix",
        status: "Completed",
        theGood: "Capitalized immediately on Red Bull's delayed pit stop. Outstanding pace on hards through the second stint, stretching the lead.",
        theBad: "Slight wheelspin on race start dropped him briefly to P3, losing valuable early aerodynamic clean air.",
        telemetry: "P1 - Avg pace: 1:13.1s | Fastest lap: 1:12.4s (L68) | Deg: Low",
        laps: [
          { lapNum: 1, time: "1:17.320", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 2, time: "1:14.910", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 3, time: "1:14.550", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 4, time: "1:14.200", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 5, time: "1:14.100", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 6, time: "1:14.150", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 7, time: "1:14.300", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 8, time: "1:14.500", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 9, time: "1:16.200", tyre: "Medium (C2)", pitStop: true },
          { lapNum: 10, time: "1:34.800", tyre: "Hard (C1)", pitStop: false },
          { lapNum: 11, time: "1:13.100", tyre: "Hard (C1)", pitStop: false },
          { lapNum: 12, time: "1:13.050", tyre: "Hard (C1)", pitStop: false }
        ]
      },
      {
        raceId: "italian-gp-26",
        name: "Italian Grand Prix",
        status: "Upcoming"
      }
    ]
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    colorClass: "team-red",
    title: "The Master of Monaco",
    summary: "The 2026 engine regulations favored Ferrari's acceleration, allowing Charles to dominate low-speed corner exits. His season relies on capitalizing here.",
    races: [
      {
        raceId: "dutch-gp-26",
        name: "Dutch Grand Prix",
        status: "Completed",
        theGood: "Braking control into Turn 1 was masterful, holding off Mercedes under heavy DRS threat.",
        theBad: "A slow 3.4s pit stop prevented Charles from challenging for P2. Setup was too harsh on front-left tyres.",
        telemetry: "P3 - Avg pace: 1:13.5s | Fastest lap: 1:13.0s (L40) | Deg: High",
        laps: [
          { lapNum: 1, time: "1:17.500", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 2, time: "1:14.800", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 3, time: "1:14.900", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 4, time: "1:15.150", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 5, time: "1:15.800", tyre: "Soft (C3)", pitStop: false },
          { lapNum: 6, time: "1:17.900", tyre: "Soft (C3)", pitStop: true },
          { lapNum: 7, time: "1:38.200", tyre: "Hard (C1)", pitStop: false },
          { lapNum: 8, time: "1:14.100", tyre: "Hard (C1)", pitStop: false },
          { lapNum: 9, time: "1:14.000", tyre: "Hard (C1)", pitStop: false },
          { lapNum: 10, time: "1:13.900", tyre: "Hard (C1)", pitStop: false }
        ]
      },
      {
        raceId: "italian-gp-26",
        name: "Italian Grand Prix",
        status: "Upcoming"
      }
    ]
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    team: "Ferrari",
    colorClass: "team-red",
    title: "The Veteran Tactician",
    summary: "Adjusting dramatically in his 2026 Ferrari run, Lewis is a master of the long game. His race awareness dictates the flow of the midfield closing gaps.",
    races: [
      {
        raceId: "dutch-gp-26",
        name: "Dutch Grand Prix",
        status: "Completed",
        theGood: "Nursed a set of dying mediums incredibly well, stretching stint 1 further than Pirelli's guidelines.",
        theBad: "Took too long to find the limit in qualifying setup for FP3, severely comprising starting grid position.",
        telemetry: "P4 - Avg pace: 1:13.7s | Fastest lap: 1:12.9s (L70) | Deg: Moderate",
        laps: [
          { lapNum: 1, time: "1:18.100", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 2, time: "1:15.800", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 3, time: "1:15.600", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 4, time: "1:15.400", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 5, time: "1:15.300", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 6, time: "1:15.300", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 7, time: "1:15.450", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 8, time: "1:15.600", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 9, time: "1:15.800", tyre: "Medium (C2)", pitStop: false },
          { lapNum: 10, time: "1:16.100", tyre: "Medium (C2)", pitStop: false }
        ]
      },
      {
        raceId: "italian-gp-26",
        name: "Italian Grand Prix",
        status: "Upcoming"
      }
    ]
  }
];

async function main() {
  await prisma.lap.deleteMany()
  await prisma.race.deleteMany()
  await prisma.driver.deleteMany()

  for (const drv of driversData) {
    const createdDriver = await prisma.driver.create({
      data: {
        id: drv.id,
        name: drv.name,
        team: drv.team,
        colorClass: drv.colorClass,
        title: drv.title,
        summary: drv.summary,
        points: drv.points || 0,
        rank: drv.rank || 0,
      }
    });

    if (drv.races) {
      for (const race of drv.races) {
        const createdRace = await prisma.race.create({
          data: {
            raceId: race.raceId,
            name: race.name,
            status: race.status,
            theGood: race.theGood || null,
            theBad: race.theBad || null,
            telemetry: race.telemetry || null,
            driverId: createdDriver.id
          }
        });

        if (race.laps) {
          for (const lap of race.laps) {
            await prisma.lap.create({
              data: {
                lapNum: lap.lapNum,
                time: lap.time,
                tyre: lap.tyre,
                pitStop: lap.pitStop || false,
                raceId: createdRace.id
              }
            });
          }
        }
      }
    }
  }

  console.log("Database perfectly seeded!");
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
