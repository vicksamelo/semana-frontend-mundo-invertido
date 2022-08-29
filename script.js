import { subscribeToHellfireClub } from './hellfire-club.js';
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
  const subscripton = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value,
  };
  const subscriptonId = await subscribeToHellfireClub(subscripton);
  console.log(`Inscrito com sucesso ${subscriptonId}`);
});
