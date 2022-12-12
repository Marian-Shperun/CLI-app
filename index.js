const contacts = require('./contacts.js');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      console.log('Contacts list obtained');
      break;

    case 'get':
      const getContact = await contacts.getContactById(id);
      console.table(getContact);
      console.log('Contact obtained');

      break;

    case 'add':
      const addContact = await contacts.addContact({ name, email, phone });
      console.table(addContact);
      console.log('The contact has been added');
      break;

    case 'remove':
      const removeContact = await contacts.removeContact(id);
      console.table(removeContact);
      console.log('The contact has been deleted');
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
