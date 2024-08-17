import renderToDom from '../utils/renderToDom';

const jokeCard = (obj) => {
  const content = `
    <h1>Joke Generator</h1>
    <small id="joke-delivery">${obj.setup}</small><br />
    <div id="render-joke-delivery-here"></div>
    <button class="btn btn-danger" id="get-punchline">Get punchline</button><br />
    <hr />
  `;
  renderToDom('#app', content);

  document.querySelector('#get-punchline')
    .addEventListener('click', () => {
      document.querySelector('#render-joke-delivery-here').innerHTML = `${obj.delivery} 🤣🤣🤣`;
      document.querySelector('#get-punchline').innerHTML = 'Get Another Joke';
    });
};

export default jokeCard;
