// Create web page
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Page');
}

/*
Find accounts of a Gmail
*/
function accountLinker() {
  const keywords = ["verify", "account", "confirm", "welcome", "creation"];
  const scope = ''; // 'is:starred subject:'
  const userEmail = Session.getActiveUser().getEmail();
  var threads = [];
  var messages = [];

  // Create a thread for each keyword
  for (var i = 0; i < keywords.length; i++) {
    threads.push(GmailApp.search(scope+keywords[i], 0, 100))
  }

  // Create and filter a list of messages
  messages = threadsToMessages(threads);

  // Filters content of message
  messagesExtract(messages);

  // Remove duplicates
  messagesClean(messages);

  GmailApp.sendEmail(userEmail, "EmailAccountLinker", messages);
}

/*
Convert a list of Gmail Threads to a list of messages 
*/
function threadsToMessages(threads) {
  const messages = [];

  for (var i = 0; i < threads.length; i++) {
    for (var j = 0; j < threads[i].length; j++) {
      messages.push(GmailApp.getMessageById(threads[i][j].getId()));
    }
  }

  return messages;
}

/*
Filter a list of Gmail messages for info
*/
function messagesExtract(messages) {
  for (var i = 0; i < messages.length; i++) {
    messages[i] = messages[i].getFrom().slice(0, messages[i].getFrom().indexOf("<"));
  }
}

/*
Remove duplicate messages
*/
function messagesClean(messages) {
    for (var i = 0; i < messages.length; i++) {
      for (var j = 0; j < messages.length; j++) {
        if (messages[i] == messages[j] && i != j) {
          messages.splice(j, 1);
        }
      }
    }
    messages.sort();
}
