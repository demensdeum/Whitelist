# GramEXT Extension: Whitelisted Contacts  

This extension for **GramEXT**, the JavaScript extension framework for Telegram Desktop, ensures that only messages from whitelisted contacts are allowed. Contacts not on the whitelist are automatically deleted.  

## Overview  

This GramEXT extension manages a "whitelisted contacts" feature for Telegram Desktop. It uses the `GlobalProperties` object to store and validate the list of allowed contacts, automatically removing unapproved ones.  

## How It Works  

1. **Whitelist Setup**  
   - The whitelist is stored in the `GlobalProperties["WhitelistedContacts"]` array.  
   - Only contacts in this whitelist are retained.  

2. **Message Filtering**  
   - When a message is received, the script checks the sender's ID against the whitelist.  
   - If the sender is not whitelisted, the contact is deleted using the `ContactsController.delete()` method.  

## Installation  

1. **Prepare GramEXT**  
   - Install and configure **GramEXT** for your Telegram Desktop app.  
   - Ensure JavaScript extensions are enabled.  

2. **Add the Script**  
   - Save the following script in a `.js` file:  

     ```javascript
     var whitelist = GlobalProperties["WhitelistedContacts"];

     var whitelistInputMessageHandler = function(message) {  
       if (!whitelist.includes(message.contact)) {  
         ContactsController.delete(message.contact);  
       }  
     };
     ```  

3. **Configure Whitelist**  
   - Define your whitelist in `GlobalProperties` before loading the script. For example:  

     ```javascript
     GlobalProperties["WhitelistedContacts"] = ["contact_id_1", "contact_id_2"];
     ```  

4. **Load the Script**  
   - Use GramEXT to load the script into Telegram Desktop.  

## Usage  

- The extension automatically handles incoming messages, checking each sender against the whitelist.  
- Contacts not on the whitelist are deleted immediately.  

## Notes  

- This script assumes that `GlobalProperties["WhitelistedContacts"]` is an array of valid contact IDs.  
- Ensure the IDs in the whitelist match the format used by Telegram Desktop.  

## License  

This project is licensed under the MIT License. Feel free to modify and distribute it.  
