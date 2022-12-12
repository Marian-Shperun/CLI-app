## CLI APP

- Install dependencies
```bash
  npm install
```

 - [Gets a list of contacts](https://i.ibb.co/yNL7vxc/get-contacts-list.png)
```bash
  node index.js --action="list"
```

-  [Get contact by ID](https://i.ibb.co/rcQ5xMk/get-one-contact.png)
```bash
  node index.js --action="get" --id=5
```

-  [Adds a contact](https://i.ibb.co/vmh3tRg/Adds-a-contact.png)
```bash
  node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
```

-  [Deletes the contact](https://i.ibb.co/10S5gqx/deletes-the-contact.png)
```bash
  node index.js --action="remove" --id=3
```

