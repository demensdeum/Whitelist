whitelist = ["demensdeum"]

function WhitelistInputMessageHandler(message) {
  if (!whitelist.includes(message.contact)) {
    ContactsController.delete(message.contact);
  }
}
