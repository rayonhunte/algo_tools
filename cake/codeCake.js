let message = 'thief cake'.split('')
// let message = 'vault'.split('');

// const message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ];

function reverseChar  (message, left, right)  {
    while (left < right) {
        const temp = message[left];
        message[left] = message[right];
        message[right] = temp;
        left++;
        right--;
    }
}

function reverseWords (message) {    
    reverseChar(message, 0, message.length -1)
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {
        if(i === message.length || message[i] === ' ') {
            reverseChar(message, currentWordStartIndex, i - 1)
            currentWordStartIndex = i +1;
        }
    }

    return message.join('')
}

reverseWords(message) //?