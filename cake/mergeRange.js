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
        (a,b) => {return a.startTime - b.startTime}
    )
    const mergeMeetings = [sortMeetings[0]]

    //mergeMeetings
    for (let i=1; i< sortMeetings.length; i++) {
        const currentMeeting = sortMeetings[i]
        //currentMeeting
        const lastMeeting = mergeMeetings[mergeMeetings.length -1]
        //lastMeeting
        if(currentMeeting.startTime <= lastMeeting.endTime) {
            lastMeeting.endTime = Math.max(lastMeeting.endTime, currentMeeting.endTime)
        } else {
            mergeMeetings.push(currentMeeting)
        }
    }


    return mergeMeetings;
}



mergeRanges(meetings) //?