/*

Officer: 7530552
CaseNum: 202-0-41316667-7530552

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce green text. Only comment out text commands.
Leave fill commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Ballpointprint.ttf");
}

function setup() {
  createCanvas(690, 759);
  textFont(letterFont);
  textSize(38);
}

function draw() {
  background(255);

  fill(0, 0, 0);
  //   text("quiet", 323, 154);
  //   text("sic", 481, 195);
  fill(0, 0, 255);
  //   text("I", 95, 114);
  //   text("You", 102, 240);
  fill(0, 0, 0);
  //   text("alone", 128, 154);
  //   text("that", 458, 400);
  //   text("day", 375, 240);
  //   text("a", 201, 38);
  //   text("your", 464, 281);
  //   text("that", 282, 281);
  fill(255, 0, 0);
  //   text("From", 567, 240);
  //   text("blessed", 322, 195);
  //   text("is", 495, 114);
  fill(0, 0, 0);
  //   text("v", 97, 195);
  fill(255, 0, 255);
  //   text("that", 414, 154);
  fill(255, 0, 0);
  //   text("since", 287, 443);
  //   text("hear", 531, 154);
  //   text("my", 232, 240);
  //   text("our", 374, 443);
  //   text("you", 98, 362);
  //   text("It", 439, 114);
  //   text("of", 535, 195);
  fill(0, 0, 255);
  //   text("moment", 169, 281);
  //   text("darling,", 353, 487);
  //   text("alive", 374, 400);
  //   text("I", 529, 400);
  fill(255, 0, 255);
  //   text("I", 28, 154);
  //   text("my", 247, 362);
  //   text("isy,", 215, 38);
  fill(255, 0, 0);
  //   text("person", 275, 400);
  //   text("the", 91, 400);
  fill(0, 255, 0);
  text("make", 141, 114);
  text("April", 488, 240);
  text("date", 491, 443);
  text("second", 494, 320);
  fill(0, 0, 255);
  //   text("luckiest", 158, 400);
  //   text("x", 94, 639);
  //   text("knew", 159, 320);
  //   text("I", 519, 362);
  //   text("face,", 21, 320);
  //   text("that", 27, 362);
  //   text("am", 74, 154);
  fill(0, 0, 0);
  //   text("can", 21, 487);
  //   text("kisses,", 171, 563);
  //   text("first", 88, 281);
  fill(255, 0, 255);
  //   text("mu", 450, 195);
  //   text("your", 27, 195);
  //   text("the", 586, 195);
  fill(0, 255, 0);
  text("chosen", 95, 443);
  fill(0, 0, 0);
  //   text("last", 428, 443);
  //   text("lovely", 534, 281);
  fill(0, 0, 255);
  //   text("in", 213, 154);
  //   text("?", 397, 114);
  fill(255, 0, 0);
  //   text("I", 485, 154);
  //   text("one", 303, 362);
  fill(0, 0, 0);
  //   text("am", 575, 400);
  //   text("think", 148, 487);
  fill(0, 0, 255);
  //   text("May", 21, 114);
  //   text("those", 326, 320);
  fill(0, 0, 0);
  //   text("a", 209, 114);
  fill(0, 0, 255);
  //   text("true", 368, 362);
  //   text("saw", 399, 281);
  //   text("the", 21, 281);
  fill(255, 0, 0);
  //   text("like", 184, 195);
  fill(255, 0, 255);
  //   text("the", 255, 195);
  //   text("lovely", 79, 38);
  fill(255, 0, 0);
  //   text("I", 113, 320);
  //   text("were", 158, 362);
  //   text("in", 445, 240);
  //   text("D", 173, 38);
  fill(0, 0, 255);
  //   text("Ever", 200, 443);
  //   text("few", 416, 320);
  //   text("green", 468, 487);
  fill(255, 0, 255);
  //   text("only", 81, 487);
  fill(255, 0, 0);
  //   text("Oh", 21, 38);
  //   text("your", 25, 443);
  fill(0, 0, 255);
  //   text("Bob", 21, 639);
  //   text("sunny", 288, 240);
  fill(0, 0, 0);
  //   text("must", 565, 362);
  fill(255, 0, 0);
  //   text("Love", 21, 563);
  fill(255, 0, 255);
  //   text("oice", 111, 195);
  //   text("are", 167, 240);
  fill(0, 0, 255);
  //   text("eyes.", 569, 487);
  fill(255, 0, 255);
  //   text("confession", 244, 114);
  //   text("the", 256, 154);
  //   text("I", 353, 281);
  fill(0, 0, 0);
  //   text("when", 537, 114);
  //   text("I", 575, 443);
  fill(255, 0, 255);
  //   text("from", 246, 320);
  //   text("harp.", 23, 240);
  //   text("of", 232, 487);
  //   text("be", 32, 400);
  //   text("your", 283, 487);
  fill(0, 0, 0);
  //   text("s", 581, 320);
  //   text("love.", 441, 362);
  //   text("and", 104, 563);
}
