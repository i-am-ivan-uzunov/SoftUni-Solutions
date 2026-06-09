function solve(input) {
  let limit = Number(input.shift());
  let users = {};

  let tokens = input.shift().split('=');
  let command = tokens[0];

  while (command !== 'Statistics') {
    if (command === 'Add') {
      let user = tokens[1];
      let messagesSent = Number(tokens[2]);
      let messagesReceived = Number(tokens[3]);

      users[user] = {
        messagesSent: messagesSent,
        messagesReceived: messagesReceived,
      };
    } else if (command === 'Message') {
      let sender = tokens[1];
      let receiver = tokens[2];
      if (users[sender] && users[receiver]) {
        users[sender].messagesSent += 1;
        users[receiver].messagesReceived += 1;

        let totalMessagesSender = users[sender].messagesSent + users[sender].messagesReceived;
        let totalMessagesReceiver = users[receiver].messagesSent + users[receiver].messagesReceived;

        if (totalMessagesSender >= limit) {
          console.log(`${sender} reached the capacity!`);
          delete users[sender];
        }
        if (totalMessagesReceiver >= limit) {
          console.log(`${receiver} reached the capacity!`);
          delete users[receiver];
        }
      }
    } else if (command === 'Empty') {
      let userToDelete = tokens[1];

      if (userToDelete === 'All') {
        for (let user in users) {
          delete users[user];
        }
      } else {
        delete users[userToDelete];
      }
    }

    tokens = input.shift().split('=');
    command = tokens[0];
  }

  let usersCount = Object.keys(users).length;

  console.log(`Users count: ${usersCount}`);
  for (let user in users) {
    let sum = users[user].messagesSent + users[user].messagesReceived;
    console.log(`${user} - ${sum}`);
  }
}


