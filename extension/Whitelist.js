var whitelist = GlobalProperties["WhitelistedContacts"];
var whitelistConfigured = GlobalProperties["WhitelistedConfigured"];

var whitelistInputMessageHandler = function(message) {
  if (!whitelistConfigured) {
    console.log("Whitelist is not configured!");
    return;
  }
  if (whitelist.length() < 1) {
    console.log("Whitelist is empty! Silence mode?");
  }
  if (!whitelist.includes(message.contact)) {
    ContactsController.delete(message.contact);
  }
}
