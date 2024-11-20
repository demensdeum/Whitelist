var whitelist = GlobalProperties["WhitelistedContacts"];

var whitelistInputMessageHandler = function(message) {
  if (!whitelist.includes(message.contact)) {
    ContactsController.delete(message.contact);
  }
}
