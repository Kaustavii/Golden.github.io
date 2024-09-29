var myGame = new WizardOrpheus('', `
snoopy themed cafe
`)
myGame.createUserAction({
  name: 'message',
  parameters: ('Message from user to game'),
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') {
    let userinput = document.getElementById('input').value
    myGame.message(userinput)

    document.getElementById('conversation').innerHTML += '<p>' + userinput + '</p>'

    document.getElementById('input').value = ''
  }
})
myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.variable('scaredLevel', 'How scared the user is. This changes quickly. From 0 (not scared) to 50 (very scared).', 0)

myGame.botAction('respond', 'Send a text to the user', { message: 'What you want to say to the user' }, data => {

  //Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  document.getElementById('score').innerHTML = data.currentVariables.score.value

  document.body,StyleSheet.backgroundColor = 
    'rgba(0,0,0,${data.currentVariables.scaredLevel.value/50})'
})

