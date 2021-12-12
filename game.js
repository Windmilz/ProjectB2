let bedroom = new Prompt("Your alarm has been beeping forever", [
  new Choice(
    "Ignore alarm",
    "You decide to ignore your alarm. Who cares about work anyways",
    true,
  ),
  new Choice(
    "Stop alarm",
    "You stop the alarm and get out of bed. Time to seize the day",
    false,
  ),
]);

let kitchen = new Prompt(
  "You get dressed and start to hurry out the door. Halfway out the door you realize you don't have any shoes on.",
  [
    new Choice(
      "Give up",
      "You give up looking for your shoes. You arrive at work and get fired for not wearing them. Good job",
      true,
    ),
    new Choice("Look", "You start looking for your shoes. You search all over your house and find them in your kitchen. Why are they in your kitchen?", false),
  ],
);
let keys = new Prompt(
  "With shoes in hand, you start runnin to the door. Halfway out the door you realize you don't have your keys",
  [
    new Choice(
      "Get back in bed",
      "At this point, you've had enough for today and you just get back in bed. Who cares about work anyways.",
      false,
    ),
    new Choice("Look", "You turn your house upsidedown and finally found your keys underneath your TV. Why did you leave these here. Are you going crazy?", true),
  ],
);

let prompts = [bedroom, kitchen, keys];
let game = new Game(prompts);

game.init();
