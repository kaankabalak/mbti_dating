import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  count = 0;

  test = {
    answers: []
  }

  questionBank = [
    "When the phone rings do you: ",
    "Are you more: ",
    "Is it worse to: ",
    "With people, are you usually more: ",
    "Are you more comfortable in making: ",
    "Is clutter in the workplace something you: ",
    "Is it your way to: ",
    "Waiting in line, do you often: ",
    "Are you more: ",
    "Are you more interested in: ",
    "In making up your mind, are you more likely to go by: ",
    "In sizing up others, do you tend to be: ",
    "Do you prefer contracts to be: ",
    "Are you more satisfied having: ",
    "At a party, do you: ",
    "Do you tend to be more: ",
    "Do you like writers who: ",
    "Which appeals to you more: ",
    "If you must disappoint someone, are you usually: ",
    "On the job, do you want your activities to be: ",
    "Do you more often prefer: ",
    "Does interacting with strangers: ",
    "Facts: ",
    "Do you find visionaries and theorists: ",
    "In a heated discussion, do you: ",
    "Is it better to be: ",
    "At work, it is more natural for you to: ",
    "Are you more comfortable: ",
    "Do you tend to: ",
    "Common sense is: ",
    "Children often do not: ",
    "When in charge of others, do you tend to be: ",
    "Are you more often: ",
    "Are you more prone to: ",
    "In most situations, are you more: ",
    "Do you think of yourself as: ",
    "Are you more frequently: ",
    "Do you speak more in: ",
    "Which is more of a compliment: ",
    "Which rules you more: ",
    "When finishing a job, do you like to: ",
    "Do you prefer to work: ",
    "Are you the kind of person who: ",
    "Are you inclined to take what is said: ",
    "Do you more often see: ",
    "Is it worse to be: ",
    "In trying circumstances are you sometimes: ",
    "Do you tend to choose: ",
    "Are you inclined to be more: ",
    "At work, do you tend to: ",
    "Are you more likely to trust: ",
    "Are you more inclined to feel: ",
    "Do you think of yourself as a: ",
    "Do you value in yourself more that you are: ",
    "Do you usually want things: ",
    "Would you say you are more: ",
    "Do you consider yourself: ",
    "Do you prize in yourself: ",
    "Are you drawn more to: ",
    "Which seems the greater fault: ",
    "Are you swayed more by: ",
    "Do you feel better about: ",
    "Is it preferable mostly to: ",
    "Are you inclined to be: ",
    "In stories, do you prefer: ",
    "Is it easier for you to: ",
    "Which do you wish more for yourself: ",
    "Do you see yourself as basically: ",
    "Do you tend to notice: ",
    "Are you more: "
  ];

  optionBank = [
    ["hurry to get it first ", "hope someone else will answer "],
    ["observant than introspective ", "introspective than observant "],
    ["have your head in the clouds ", "be in a rut "],
    ["firm than gentle ", "gentle than firm "],
    ["critical judgments ", "value judgments "],
    ["take time to straighten up ", "tolerate pretty well "],
    ["make up your mind quickly ", "pick and choose at some length "],
    ["chat with others ", "stick to business "],
    ["sensible than idealistic ", "idealistic than sensible "],
    ["what is actual ", "what is possible "],
    ["data ", "desires "],
    ["objective and impersonal ", "friendly and personal "],
    ["signed, sealed and delivered ", "settled on a handshake "],
    ["a finished project ", "work in progress "],
    ["interact with many, even strangers ", "interact with a few friends "],
    ["factual than speculative ", "speculative than factual "],
    ["say what they mean ", "use metaphors and symbolism "],
    ["consistency of thought ", "harmonious relationships "],
    ["frank and straightforward ", "warm and considerate "],
    ["scheduled ", "unscheduled "],
    ["final, unalterable statements ", "tentative, preliminary statements "],
    ["energize you ", "tax your reserves "],
    ["speak for themselves ", "illustrate principles "],
    ["somewhat annoying ", "rather fascinating "],
    ["stick to your guns ", "look for common ground "],
    ["just ", "merciful "],
    ["point out mistakes ", "try to please others "],
    ["after a decision ", "before a decision "],
    ["say what’s on your mind ", "keep your ears open "],
    ["usually reliable ", "frequently questionable "],
    ["make themselves useful enough ", "exercise their fantasy enough "],
    ["firm and unbending ", "forgiving and lenient "],
    ["a cool‐headed person ", "a warm‐hearted person "],
    ["nailing things down ", "exploring the possibilities "],
    ["deliberate than spontaneous ", "spontaneous than deliberate "],
    ["an outgoing person ", "a private person "],
    ["a practical sort of person ", "a fanciful sort of person "],
    ["particulars than generalities ", "generalities than particulars "],
    ['"There’s a logical person"' , '"There’s a sentimental person"'],
    ["your thoughts ", "your feelings "],
    ["tie up all the loose ends ", "move on to something else "],
    ["to deadlines ", "just whenever "],
    ["is rather talkative ", "doesn’t miss much "],
    ["more literally ", "more figuratively "],
    ["what is right in front of you ", "what can only be imagined "],
    ["a softy ", "hard‐nosed "],
    ["too unsympathetic ", "too sympathetic "],
    ["rather carefully ", "somewhat impulsively "],
    ["hurried than leisurely ", "leisurely than hurried "],
    ["be sociable with your colleagues ", "keep more to yourself "],
    ["your experiences ", "your conceptions "],
    ["down to earth ", "somewhat removed "],
    ["tough‐minded person ", "tender‐hearted person "],
    ["reasonable ", "devoted "],
    ["settled and decided ", "just penciled in "],
    ["serious and determined ", "easy going "],
    ["a good conversationalist ", "a good listener "],
    ["a strong hold on reality ", "a vivid imagination "],
    ["fundamentals ", "overtones "],
    ["to be too compassionate ", "to be too dispassionate "],
    ["convincing evidence ", "a touching appeal "],
    ["coming to closure ", "keeping your options open "],
    ["make sure things are arranged ", "just let things happen naturally "],
    ["easy to approach ", "somewhat reserved "],
    ["action and adventure ", "fantasy and heroism "],
    ["put others to good use ", "identify with others "],
    ["strength of will ", "strength of emotion "],
    ["thick‐skinned ", "thin‐skinned "],
    ["disorderliness ", "opportunities for change "],
    ["routinized than whimsical ", "whimsical than routinized "],
  ];

  questions = [];
  options = [];

  personality = '';

  ngOnInit() {
    for( let i=0; i<this.optionBank.length; i++) {
      this.test.answers.push(null);
    }

    let questionArr = [];
    let optionArr = [];

    for( let i = 0; i<this.optionBank.length; i++) {
      
      if(i % 10 != 9) {
        questionArr.push(this.questionBank[i]);
        optionArr.push(this.optionBank[i]);
      } else if(i % 10 == 9) {
        questionArr.push(this.questionBank[i]);
        optionArr.push(this.optionBank[i]);
        this.questions.push(questionArr);
        this.options.push(optionArr);
        questionArr = [];
        optionArr = [];
      }
    }

    console.log(this.questions);
    console.log(this.options);
  }

  onSubmit() {
    console.log("submit");
    // e or i
    this.findAttribute([0]);
    // n or s
    this.findAttribute([1,2]);
    // t or f
    this.findAttribute([3,4]);
    // j or p
    this.findAttribute([5,6]);
  }

  findAttribute(numIdxArr) {
    let countA = 0;
    let countB = 0;
    // extrovert(E) or introvert(I) 
    for( let j = 0; j < numIdxArr.length; j++) {
      for( let i = numIdxArr[j]; i < this.test.answers.length; i+=7) {
        if(this.test.answers[i] == "a") {
          countA++;
        } else if( this.test.answers[i] == "b") {
          countB++;
        }
      }
    }
    
    console.log("A:", countA);
    console.log("B:", countB);
  }

}
