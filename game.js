let bedroom = new Prompt("Your alarm has been beeping forever", [
  new Choice(
    "Ignore alarm",
    "You decide to ignore your alarm. Who cares about work anyways",
    true,
  ),
  new Choice(
    "Stop alarm",
    "Well this isn't good. You're late for work.",
    false,
  ),
]);

let kitchen = new Prompt(
  "You get dressed and start to hurry out the door. Halfway out the door you realize you don't have any shoes on.",
  [
    new Choice(
      "Search for Shoes",
      "After turning your entire apartment upsidedown you find your shoes in the kitchen. Why were your shoes in the kitchen?", false),

    new Choice("Give up", "Seeing this as a sign from the universe you just get back into bed. It's a no bones day.", true),
  ],
);
let keys = new Prompt(
  "With shoes in hand, you start runnin to the door. Halfway out the door you realize you don't have your keys",
  [
    new Choice(
      "Get back in bed",
      "At this point, you've had enough for today and you just get back in bed. Who cares about work anyways.",
      true,
    ),
    new Choice("Look", "You turn your house upsidedown and finally found your keys underneath your TV. Why did you leave these here. Are you going crazy?", false),
  ],
);
let car = new Prompt(
  "You get in your car and pull out of your driveway. This day has been such a mess. ",
  [
    new Choice(
      "Take the highway",
      "You're running late so you decide to gamble and take the highway. Unfortunately there's a minor accident on the highway so you get stuck.",
      false,
    ),
    new Choice("Take the back roads", "You decide to bite the bullet and take the back roads to work. The highway would make you even more late anyways.", false),
  ],
);
let work = new Prompt(
  "You finally get into work, at this point you're very very late.",
  [
    new Choice(
      "Apologize to your boss",
      "You go straight to your bosses office, and before you have an oppurtunity to open your mouth, your boss praises you for cominig in on your day off.",
      false,
    ),
    new Choice("Avoid your boss", "You duck into your cubicle, but before you get to work a coworker sees you. 'You must really love work, coming in on your day off,' they say.", false),
  ],
);
let loop = new Prompt(
  "Wait? It's your day off? And to think this day couldnt get any worse. You get up from your desk in a hurry. All of a sudden your vision starts to blur and you hear an alarm clock.",
  [
    new Choice(
      "Turn off your alarm",
      "You wake up in a cold sweat. Your alarm has been beeping forever.",
      false,
    ),
    new Choice("Wake up", "You suddenly wake up, and you realize that you're late for work", false),
  ],
);
let GameOver = new Prompt(
  "GAME OVER",
  [
    new Choice(
      "Play Again",
      "",
      true,
    ),
    new Choice("Play Again", "", true),
  ],
);
let prompts = [bedroom, kitchen, keys, car, work, loop , GameOver];
let game = new Game(prompts);

game.init();
