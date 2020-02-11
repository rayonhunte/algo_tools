// const message = ['c', 'a', 'k', 'e', ' ',
//     'p', 'o', 'u', 'n', 'd', ' ',
//     's', 't', 'e', 'a', 'l'
// ];

const message = 'vault'.split('');
message


function reverseWords(message) {

    // Decode the message by reversing the words
    if (message.length === 0) {return []}
    start = 0
    end = message.length-1 //?
    while (end < start) {
        temp1 = message[start] //?
        temp2 = message[end] //?
        message[end] = temp1
        message[start] = temp2
        start++
        end--
    }
    return message
}

reverseWords(message) //?

message.join('') //?