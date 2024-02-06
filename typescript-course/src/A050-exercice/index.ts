export interface Option {
  optionTitle: string;
  countVotes: number;

  addVote(): void;
}

export interface Voting {
  votingQuestion: string;
  options: Option[];

  addOption(option: Option): void;
  vote(optionIdx: number): void;
  showResults(): void;
}

export interface Poll {
  generalTitle: string;
  voting: Voting[];

  showResults(): void;
}

export class VotationOption implements Option {
  constructor(public optionTitle: string) {
    this.countVotes = 0;
  }
  countVotes: number;
  addVote(): void {
    this.countVotes++;
  }
}

export class VotationVoting implements Voting {
  constructor(
    public votingQuestion: string,
    public options: Array<Option> = [],
  ) {}
  addOption(option: Option): void {
    this.options.push(option);
  }

  vote(optionIdx: number): void {
    if (this.options[optionIdx - 1]) this.options[optionIdx - 1].addVote();
  }

  showResults(): void {
    console.log(this.votingQuestion);
    this.options.forEach((option) =>
      console.log(option.optionTitle + ' --> ' + option.countVotes),
    );
  }
}

export class VotationPoll implements Poll {
  constructor(
    public generalTitle: string,
    public voting: Voting[] = [],
  ) {}
  showResults(): void {
    console.log(this.generalTitle);
    this.voting.forEach((v) => {
      v.showResults();
      console.log('');
    });
  }
}

const v1 = new VotationVoting('How old are you?');
v1.addOption(new VotationOption('>15'));
v1.addOption(new VotationOption('>25'));
v1.addOption(new VotationOption('>35'));
v1.addOption(new VotationOption('>45'));

v1.vote(2);
v1.vote(3);
v1.vote(3);
v1.vote(4);

const v2 = new VotationVoting('What is your favorite color?');
v2.addOption(new VotationOption('Blue'));
v2.addOption(new VotationOption('Red'));
v2.addOption(new VotationOption('Yellow'));
v2.addOption(new VotationOption('Purple'));

v2.vote(1);
v2.vote(1);
v2.vote(1);

const poll = new VotationPoll('Test', [v1, v2]);
poll.showResults();
