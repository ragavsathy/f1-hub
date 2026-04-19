export const drivers = [
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
        telemetry: "P2 - Avg pace: 1:13.4s | Fastest lap: 1:12.7s (L65) | Deg: Moderate"
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
        telemetry: "P1 - Avg pace: 1:13.1s | Fastest lap: 1:12.4s (L68) | Deg: Low"
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
        telemetry: "P3 - Avg pace: 1:13.5s | Fastest lap: 1:13.0s (L40) | Deg: High"
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
        telemetry: "P4 - Avg pace: 1:13.7s | Fastest lap: 1:12.9s (L70) | Deg: Moderate"
      },
      {
        raceId: "italian-gp-26",
        name: "Italian Grand Prix",
        status: "Upcoming"
      }
    ]
  }
];
