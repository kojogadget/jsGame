export const game = {
    addLine: function (text) {
        let ul = document.querySelector('.message__list');
        let li = document.createElement('li');
        text !== ' '
            ? li.appendChild(document.createTextNode('> ' + text))
            : li.appendChild(document.createTextNode(text));
        li.setAttribute('class', 'message__text');
        ul.appendChild(li);
    },
};
