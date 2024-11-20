whitelist = GlobalProperties["WhitelistedContacts"];

whitelistInputMessageHandler = function(message) {
  if (!whitelist.includes(message.contact)) {
    ContactsController.delete(message.contact);
  }
}
