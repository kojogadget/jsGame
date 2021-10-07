export const game = {
    state: 'name',
    addLine: function (text) {
        const ul = document.querySelector('.message__list');
        const li = document.createElement('li');
        text !== ' '
            ? li.appendChild(document.createTextNode('> ' + text))
            : li.appendChild(document.createTextNode(text));
        li.setAttribute('class', 'message__text');
        ul.appendChild(li);
    },
};
