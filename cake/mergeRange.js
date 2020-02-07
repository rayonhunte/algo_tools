meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]

// results
//   [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
//   ]

// meetings =   [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]
// meetings = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
// meetings = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

function mergeRanges(meetings) {
    // Merge meetings ranges
    
    
    const sortMeetings = meetings.sort(
        (a,b) => {return a.startTime - b.endTime}
    )
    const someArray = []
    for(let i=0; i< sortMeetings.length-1; i++){
        if (sortMeetings[i].endTime >= sortMeetings[i+1].startTime ) {
            if (sortMeetings[i].startTime > sortMeetings[i+1].startTime) {
                someArray.push(
                    { startTime: sortMeetings[i+1].startTime,  endTime: sortMeetings[i+1].endTime}
               )        
            } else {
                someArray.push(
                    { startTime: sortMeetings[i].startTime,  endTime: sortMeetings[i+1].endTime}
               )  
            } 

        } else {
            // if(sortMeetings[i].endTime < sortMeetings[i+1].startTime) {
            //     someArray.push(
            //         sortMeetings[i]
            //     )
            // }
        }
       }

    return someArray;
}



mergeRanges(meetings) //?