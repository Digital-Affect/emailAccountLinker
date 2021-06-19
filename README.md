# EmailAccountLinker
https://script.google.com/macros/s/AKfycbyQJhMp3IYH-0Wer6dYGlIvf2pzd4GQ1p1gMrPp0UhkgaOqWsvKwKH3C-vokUc3HY-y/exec

## Description
The emailAccountLinker returns all accounts linked to a given Gmail. 
It accomplishes this task by using Google’s scripting service for Gmail 
to scan for accounts associated with the given Gmail account. Afterwards 
the accounts are filtered by heuristics to better display a list of accounts.
On acceptance of basic policies and given permission, the emailAccountLinker 
will process the Gmail account and report back to the user.

### Future Tasks
* messagesExtract() cuts off some titles because of poor slice indexing
* messagesClean() needs better optimization of removing duplicate terms
* messagesClean() needs to remove extra spaces for better sorting
* More thorough search terms and scope utilization
