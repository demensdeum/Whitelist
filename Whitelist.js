whitelist = ["demensdeum"]

function WhitelistMessageHandler(message) {
  if (!whitelist.includes(message.contact)) {
    ContactsController.delete(message.contact);
  }
}
