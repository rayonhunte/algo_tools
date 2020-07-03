meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]
function mergeRanges(meetings) {
    // Merge meetings ranges
    
    
    const sortMeetings = meetings.sort(
        (a,b) => {return a.startTime - b.startTime}
    )
    const mergeMeetings = [sortMeetings[0]]
    mergeMeetings //?

    //mergeMeetings
    for (let i=1; i< sortMeetings.length; i++) {
        const currentMeeting = sortMeetings[i]
        //currentMeeting
        const lastMeeting = mergeMeetings[mergeMeetings.length -1]
        lastMeeting 
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