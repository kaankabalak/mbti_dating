import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  // Test related variables
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
  
  personalityCats = [["E","I"],["S","N"],["T","F"],["J","P"]];

  // user related variables
  personality = {
    isE: null,
    isS: null,
    isT: null,
    isJ: null,
    result: ''
  };

  // list of possible personalities if any of the types are equal
  personalityList = [""];

  personalityDictionary = {
    ISTJ: ["The Duty Fulfiller", "Serious and quiet, interested in security and peaceful living. Extremely thorough, responsible, and dependable. Well-developed powers of concentration. Usually interested in supporting and promoting traditions and establishments. Well-organized and hard working, they work steadily towards identified goals. They can usually accomplish any task once they have set their mind to it. "],
    ISTP: ["The Mechanic", "Quiet and reserved, interested in how and why things work. Excellent skills with mechanical things. Risk-takers who they live for the moment. Uncomplicated in their desires. Loyal to their peers and to their internal value systems, but not overly concerned with respecting laws and rules if they get in the way of getting something done. Detached and analytical, they excel at finding solutions to practical problems."],
    ISFJ: ["The Nurturer", "Quiet, kind, and conscientious. Can be depended on to follow through. Usually puts the needs of others above their own needs. Stable and practical, they value security and traditions. Well-developed sense of space and function. Rich inner world of observations about people. Extremely perceptive of other's feelings. Interested in serving others."],
    ISFP: ["The Artist", "Quiet, serious, sensitive and kind. Do not like conflict, and not likely to do things which may generate conflict. Loyal and faithful. Extremely well-developed senses, and aesthetic appreciation for beauty. Not interested in leading or controlling others. Flexible and open-minded. Likely to be original and creative. Enjoy the present moment."],
    INFJ: ["The Protector", "Quietly forceful, original, and sensitive. Tend to stick to things until they are done. Extremely intuitive about people, and concerned for their feelings. Well-developed value systems which they strictly adhere to. Well-respected for their perserverence in doing the right thing. Likely to be individualistic, rather than leading or following. "],
    INFP: ["The Idealist", "Quiet, reflective, and idealistic. Interested in serving humanity. Well-developed value system, which they strive to live in accordance with. Extremely loyal. Adaptable and laid-back unless a strongly-held value is threatened. Usually talented writers. Mentally quick, and able to see possibilities. Interested in understanding and helping people."],
    INTJ: ["The Scientist", "Independent, original, analytical, and determined. Have an exceptional ability to turn theories into solid plans of action. Highly value knowledge, competence, and structure. Driven to derive meaning from their visions. Long-range thinkers. Have very high standards for their performance, and the performance of others. Natural leaders, but will follow if they trust existing leaders."],
    INTP: ["The Thinker", "Logical, original, creative thinkers. Can become very excited about theories and ideas. Exceptionally capable and driven to turn theories into clear understandings. Highly value knowledge, competence and logic. Quiet and reserved, hard to get to know well. Individualistic, having no interest in leading or following others."],
    
    ESTP: ["The Doer", "Friendly, adaptable, action-oriented. \"Doers\" who are focused on immediate results. Living in the here-and-now, they're risk-takers who live fast-paced lifestyles. Impatient with long explanations. Extremely loyal to their peers, but not usually respectful of laws and rules if they get in the way of getting things done. Great people skills."],
    ESTJ: ["The Guardian", "Practical, traditional, and organized. Likely to be athletic. Not interested in theory or abstraction unless they see the practical application. Have clear visions of the way things should be. Loyal and hard-working. Like to be in charge. Exceptionally capable in organizing and running activities. \"Good citizens\" who value security and peaceful living."],
    ESFP: ["The Performer", "People-oriented and fun-loving, they make things more fun for others by their enjoyment. Living for the moment, they love new experiences. They dislike theory and impersonal analysis. Interested in serving others. Likely to be the center of attention in social situations. Well-developed common sense and practical ability."],
    ESFJ: ["The Caregiver", "Warm-hearted, popular, and conscientious. Tend to put the needs of others over their own needs. Feel strong sense of responsibility and duty. Value traditions and security. Interested in serving others. Need positive reinforcement to feel good about themselves. Well-developed sense of space and function."],
    ENFP: ["The Inspirer", "Enthusiastic, idealistic, and creative. Able to do almost anything that interests them. Great people skills. Need to live life in accordance with their inner values. Excited by new ideas, but bored with details. Open-minded and flexible, with a broad range of interests and abilities."],
    ENFJ: ["The Giver", " Popular and sensitive, with outstanding people skills. Externally focused, with real concern for how others think and feel. Usually dislike being alone. They see everything from the human angle, and dislike impersonal analysis. Very effective at managing people issues, and leading group discussions. Interested in serving others, and probably place the needs of others over their own needs. "],
    ENTP: ["The Visionary", " Creative, resourceful, and intellectually quick. Good at a broad range of things. Enjoy debating issues, and may be into \"one-up-manship\". They get very excited about new ideas and projects, but may neglect the more routine aspects of life. Generally outspoken and assertive. They enjoy people and are stimulating company. Excellent ability to understand concepts and apply logic to find solutions. "],
    ENTJ: ["The Executive", "Assertive and outspoken - they are driven to lead. Excellent ability to understand difficult organizational problems and create solid solutions. Intelligent and well-informed, they usually excel at public speaking. They value knowledge and competence, and usually have little patience with inefficiency or disorganization. "]
  };

  ngOnInit() {
    for (let i=0; i<this.optionBank.length; i++) {
      this.test.answers.push(null);
    }

    let questionArr = [];
    let optionArr = [];

    for (let i = 0; i<this.optionBank.length; i++) {
      
      if (i % 10 != 9) {
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
    this.personality.isE = this.findAttribute([0]);
    // s or n
    this.personality.isS = this.findAttribute([1,2]);
    // t or f
    this.personality.isT = this.findAttribute([3,4]);
    // j or p
    this.personality.isJ = this.findAttribute([5,6]);

    // compute personality string
    this.personality.result += (this.personality.isE === "Equal") ? "X" : (this.personality.isE ? "E" : "I");
    this.personality.result += (this.personality.isS === "Equal") ? "X" : (this.personality.isS ? "S" : "N");
    this.personality.result += (this.personality.isT === "Equal") ? "X" : (this.personality.isT ? "T" : "F");
    this.personality.result += (this.personality.isJ === "Equal") ? "X" : (this.personality.isJ ? "J" : "P");

    if (this.personality.result.indexOf("X") > -1) {
      let count = 0;
      for (let i = 0; i < this.personality.result.length; i++) {
        if (this.personality.result[i] !== "X") {
          for (let j = 0; j < this.personalityList.length; j++) {
            this.personalityList[j] += this.personality.result[i];
          }
        }
        else {
          let length = this.personalityList.length;
          for (let k = 0; k < length; k++) {
            this.personalityList.push(this.personalityList[k]);
          }
          for (let k = 0; k < this.personalityList.length; k++) {
            if (k < this.personalityList.length/2) {
              this.personalityList[k] += this.personalityCats[i][0];
            }
            else {
              this.personalityList[k] += this.personalityCats[i][1];
            }
          }
          count++;
        }
      }

      console.log(this.personalityList);
      
    }
  }

  replaceAt(string, index, replace) {
    console.log(string.substring(0, index) + replace + string.substring(index + 1));
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  // determinePossiblePersonalities(str, arr, pos) {
  //   if (arr === undefined) {
  //     arr = [];
  //   }
  //   if (pos === undefined) {
  //     pos = 0;
  //   }
  //   if (str.length == 1) {
  //     if (str !== "X") {
  //       for(let i = 0; i<arr.length; i++) {
  //         arr[i] += str;
  //       }
  //     }
  //     else {
  //       for(let i = 0; i<arr.length; i++) {
  //         arr.push(arr[i]);
  //       }
  //     }
  //   }
  // }

  findAttribute(numIdxArr) {
    let countA = 0;
    let countB = 0;
 
    for( let j = 0; j < numIdxArr.length; j++) {
      for( let i = numIdxArr[j]; i < this.test.answers.length; i+=7) {
        if(this.test.answers[i] == "a") {
          countA++;
        } else if( this.test.answers[i] == "b") {
          countB++;
        }
      }
    }

    if( countA > countB) {
      return true;
    } else if( countA < countB) {
      return false;
    } else {
      return "Equal";
    }
  }

}
