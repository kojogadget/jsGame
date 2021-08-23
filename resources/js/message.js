'use strict';

const addHeading = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'header--2');
  ul.appendChild(li);
};

const addLine = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');

  text !== ' '
    ? li.appendChild(document.createTextNode('> ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text');
  ul.appendChild(li);
};

const addLineMore = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');

  text !== ' '
    ? li.appendChild(document.createTextNode('  ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text--2');
  ul.appendChild(li);
};
