export class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello! How can I help you?");
    this.addMessageToState(message);
  }

  how(){
    const message = this.createChatBotMessage("She is pretty, ofcouse!");
    this.addMessageToState(message);

  }



  showExperience() {
    const message = this.createChatBotMessage("I have experience in Java, React, and Full-Stack Development.");
    this.addMessageToState(message);
  }

  showEducation() {
    const message = this.createChatBotMessage("I am currently pursuing B.Tech in Computer Science from Lovely Professional University.");
    this.addMessageToState(message);
  }

  showSkills() {
    const message = this.createChatBotMessage("My skills include Java, React, Node.js, MongoDB, HTML, CSS, JavaScript, and Git.");
    this.addMessageToState(message);
  }

  showProjects() {
    const message = this.createChatBotMessage("I have worked on several projects including an Amazon Clone, Tic Tac Toe Game, and a Weather App using Java.");
    this.addMessageToState(message);
  }
  showAbout() {
    const message = this.createChatBotMessage("She is Intelligents.");
    this.addMessageToState(message);
  }



  showContact() {
    const message = this.createChatBotMessage("You can reach me at tanishajaiswal757@gmail.comor connect with me on LinkedIn.");
    this.addMessageToState(message);
  }

  defaultResponse() {
    const message = this.createChatBotMessage("Sorry, I didn't quite understand that. Try asking about my skills, experience, education, or projects.");
    this.addMessageToState(message);
  }

  // defaultResponse() {
  //   const message = this.createChatBotMessage("Sorry, I do not reply to stupid People text");
  //   this.addMessageToState(message);
  // }
  // Helper function to add messages to the state
  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}
