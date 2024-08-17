import renderToDom from '../utils/renderToDom';

const jokeCard = (obj) => {
  const content = `
    <h1>Joke Generator</h1>
    <small id="joke-delivery">${obj.setup}</small><br />
    <button class="btn btn-danger" id="get-punchline">Get punchline</button><br />
    <hr />
  `;
  renderToDom('#app', content);

  document.querySelector('#get-punchline')
    .addEventListener('click', () => {
      document.querySelector('#joke-delivery').innerHTML = `${obj.delivery}`;
    });
};

export default jokeCard;
