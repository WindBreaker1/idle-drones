# Idle Drones

A simple game about making drones!

- [Idle Drones](#idle-drones)
  - [To-do's 📑](#to-dos-)
  - [Known Bugs 🐛](#known-bugs-)
  - [Features 💹](#features-)
  - [Gameplay Loop 🔁](#gameplay-loop-)
  - [One-time upgrades ⚙️](#one-time-upgrades-️)
  - [One-time upgrades progression ⚙️⏭](#one-time-upgrades-progression-️)
  - [Season system (Not Implemented) 📆](#season-system-not-implemented-)
  - [Day and night system (Not Implemented) 🌦️](#day-and-night-system-not-implemented-️)
  - [Music/Sounds 🎵](#musicsounds-)

## To-do's 📑

- [ ] Find ways to shorten code.
- [ ] Improve game balance (upgrade costs, the time between each upgrade, etc.).
- [ ] Add a timer that stops when you win the game, that tells you how long it took you to beat the game.
- [ ] Split your `scripts/main.js` code into more modules for better readability.
- [ ] Add an option where you can name your population.
- [ ] Make it so every upgrade is hidden. When you buy the first one, the first one is revealed and so on. (Pondering the possibility of adding; Kinda like having everything in your face).
- [ ] More upgrades/better progression?
- [ ] Find a better save system than just `localStorage`?
- [ ] Add more one-liners to `scripts/news.js`.
- [ ] Better readme file.
- [ ] Add game to personal website. (https://zaalmoxxis.com/).
- [ ] Launch with github pages.
- [x] 1.0 build.
- [x] Alpha build.
- [x] Initialize git repo.

## Known Bugs 🐛

- It seems the first upgrade (Two Hands) can be clicked on without any food. It doesn't give you anything, but it does lock the upgrade from being bought unless you reset progress and reset the page. So you must click the button to buy the upgrade only when you have 100 food.
- After buying a production upgrade, the text may not display the correct value per second, even though the effect is still there. I think this may have to do with the `Math.trunc()` on every value in the `updateText()` function.

## Features 💹

- 5 production upgrades
- 29 one-time upgrades
- 20+ Quirky one-liners
- Light/Dark mode

## Gameplay Loop 🔁

1. Gather '🍖 Food' by clicking on the button.
2. When you have 10 food, you can lure a '🧔 Human'.
3. You can buy one-time upgrades in the '🧪 R&D Department'.
4. You can assign a human to become a '👩‍🌾 Farmer'. Farmers farm and gather 0.1 food per second.
5. You can assign a human to become a '🪓 Lumberjack'. Lumberjacks cut and gather 0.1 wood per second.
6. You can assign a human to become a '⛏ Miner'. Miners mine and gather 0.1 stone per second.
7.  You can assign a human to become a '💀 Scavenger'. Scavengers gather scrap (metal and circuitry).
8.  You can assign a human to become a '🔨 Drone Builder'. Drone builders build drones.
9.  Win Condition: Make 7,000,000,000 (7 billion) drones.

## One-time upgrades ⚙️

'✅' = Complete implementation of the upgrade.

These upgrades do not reflect the final ones. These are just blueprints I used to visualize what I would ultimately use in the game.

1. Two Hands: Click Power + 1 | Cost: 50 food | ✅
2. Breeding: Human Production + 0.1 | Cost: 2 humans, 100 food
3. Full Belly: Farmer Production x10 | Cost: 500 food
4. Explore Forest: Gather 100 wood | Cost: 10 humans, 1,000 food
5. Advanced Wilderness Skills: Click Power + 8 | Cost: 2,500 food
6. Stork: Human Production + 0.9 | Cost: 15 humans, 5,000 food
7. Better Farming Tools: Farmer Production x10 | Cost: 50 wood
8. Sacrifice to the Wood Gods: Lumberjack Production x10 | Cost: 50 humans, 5,000 food
9. Explore Quarry: Gather 100 stone | Cost: 10 humans, 10,000 food, 250 wood
10. Brain Power!!!: Click Power + 90 | Cost: 20,000 food
11.  Stone Age: Wood is temporary, stone is forever. | x10 Farmer Production | Cost: 50 stone | 'Stone, hurrahh! Stone, hurrahh!'
12.  Architecture: Use the wood to build better buildings to make people feel safer. | Human Production + 9 | Cost: 20 humans, 20,000 food, 2,000 wood, 20 stone | The power of geometry.
13. The Power of Steve: Invoke the power of Steve to punch down any tree in your way. | x4 Lumberjack Production | Cost: 5,000 wood | 'The legendary minecrafter.'
14. Sculptures: Sculptures inspire your miners to work harder. | x2 Miner Production | Cost: 1 human, 50,000 food, 500 stone | 'Every block of stone has a statue inside it, and it is the task of the sculptor to discover it.'
15. Explore Abandoned City: Gather 100 scrap | Cost: 100,000 food, 10,000 wood, 1,000 stone | 'What have our ancestors done...'
16. Tractors | Humans are overrated. | x16 Farmer Production | Cost: 100 scrap | 'Tractors help, right? Idk, I'm not a farmer.'
17. Luck +777: Your luck is maxed out. | Click Power + 77 | Cost: 777,777 food | 'I want my third hand! (＃°Д°)'
18. Society: Laws, infastructure and responsibility. | Human Production + 90 | Cost: 5,000 humans, 500,000 food, 50,000 wood, 5,000 stone, 500 scrap | 'I'm sure nothing will go wrong...'
19. Chainsaws: Rip through trees like a knife through butter. | x8 Lumberjack Production | Cost: 7,500 scrap | 'Serial killers in the making.'
20. 🗿: 🗿 | x4 Miner Production | Cost: 10,000 scrap | '🗿'
21. No Fear: New advances in technology can make your future scavengers not fear the outside horrors. | x2 Scavenger Production | Cost: 750,000 food
22. The Third Hand: Due to prolonged exposure to radiation, you grow a third arm. | Click Power + 898 | Cost: 1,333,333 food | 'Finally.'
23. Endless Perpetuity: More humans mean more humans mean more humans mean... | All Production x100 | Cost: 2,000,000 food | 'What are we living for..?'
24. Human++: Empower future humans with robotic parts. | All Production x1000 | Cost: 5,000,000 food | 'Human, but better.'
25. Build Drone Factory: Unlock Drone Factory | Cost: 10,000,000 food, 1,000,000 wood, 100,000 stone, 10,000 metal | 'We look towards the future.'
26. drone builder | x10 Drone Production | Cost: 100 drones
27. drone builder | x100 Drone Production | Cost: 10,000 drones
28. drone builder | x1,000 Drone Production | Cost: 1,000,000 drones
29. Conquer Earth: Cost: 7,000,000,000 drones

## One-time upgrades progression ⚙️⏭

These upgrades do not reflect the final ones. These are just blueprints I used to visualize what I would ultimately use in the game.

1. Click Power Upgrade
2. Human Production Upgrade
3. Farmer Production Upgrade
4. Unlock Forest, unlock Lumberjack
5. Click Power Upgrade
6. Human Production Upgrade
7. Farmer Production Upgrade
8. Lumberjack Production Upgrade
9. Unlock Quarry, unlock Miner
10. Click Power Upgrade
11. Human Production Upgrade
12. Farmer Production Upgrade
13. Lumberjack Production Upgrade
14. Miner Production Upgrade
15. Unlock Abandoned City, unlock Scavenger
16. Click Power Upgrade
17. Human Production Upgrade
18. Farmer Production Upgrade
19. Lumberjack Production Upgrade
20. Miner Production Upgrade
21. Scavenger Production Upgrade
22. Click and Farmer Upgrade
23. Human, Lumberjack, Miner and Scavenger Upgrade
24. All Production Upgrade
25. Unlock Drone Factory, unlock Drone Builder
26. Drone Builder Production Upgrade
27. Drone Builder Production Upgrade
28. Drone Builder Production Upgrade
29. Win Upgrade

## Season system (Not Implemented) 📆

- 🌳 Spring: +25% overall production.
- 🌞 Summer: 0% overall production.
- 🍁 Autumn: 0% overall production.
- ⛄ Winter: -25% overall production.

## Day and night system (Not Implemented) 🌦️

- 🌞 Day: +10% overall production.
- 🌙 Night: -10% overall production.

## Music/Sounds 🎵

I'll refrain from adding any sounds or music. I'd like to keep this game super minimalistic.