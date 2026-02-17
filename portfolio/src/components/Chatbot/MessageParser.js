class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("experience")) {
      this.actionProvider.showExperience();
    } else if (lowerCaseMessage.includes("education")) {
      this.actionProvider.showEducation();
    } else if (lowerCaseMessage.includes("skills")) {
      this.actionProvider.showSkills();
    } else if (lowerCaseMessage.includes("projects")) {
      this.actionProvider.showProjects();
    } 
    else if (lowerCaseMessage.includes("tanisha")) {
      this.actionProvider.showAbout();
    } 
    else if (lowerCaseMessage.includes("how")) {
      this.actionProvider.how();
    } 
    else if (
      lowerCaseMessage.includes("contact") ||
      lowerCaseMessage.includes("email") ||
      lowerCaseMessage.includes("linkedin")
    ) {
      this.actionProvider.showContact();
    } else {
      this.actionProvider.defaultResponse();
    }
  }
}

export default MessageParser;
