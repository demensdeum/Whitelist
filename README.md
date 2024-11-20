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

1. Install GramEXT

2. Enable whitelist extension

3. Configure whitelist extension

## Usage  

- The extension automatically handles incoming messages, checking each sender against the whitelist.  
- Contacts not on the whitelist are deleted immediately.  
- If whitelist is empty, then all incoming messages will be deleted.

## Notes  

- This script assumes that `GlobalProperties["WhitelistedContacts"]` is an array of valid contact IDs.  
- Ensure the IDs in the whitelist match the format used by Telegram Desktop.  

## License  

This project is licensed under the MIT License. Feel free to modify and distribute it.  
