function ermo(input) {

    let hourExamStart = Number(input[0]);
    let minExamStart = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hourExamStart * 60 + minExamStart;
    let timeArrive = hourArrive * 60 + minArrive;
    // 1:00 = 60 min examstart
    // 1:30 = 90min arrivetime
    if (timeArrive > timeExam) {
        console.log("Late");
        // 1:00 =60 min 
        // 0:35 = 35min
        if (timeArrive - timeExam < 60) {
            console.log(`${timeArrive - TimeExam} minutes after the start`);
        } else {
            let diff = timeArrive - timeExam
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else if (timeArrive <= timeExam && timeExam - timeArrive <= 30) {
        console.log("On time");
        if (timeExam - timeArrive !== 0) {
            console.log(`${timeExam - timeArrive} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExam - timeArrive;
        let h = Math.floor(diff / 60);
        let min = diff % 60;
        if (h === 0) {
            console.log(`${min} minutes before the start`);
        } else if (min < 10) {
            console.log(`${h}:0${min} hours before the start`);
        } else {
            console.log(`${h}:${min} hours before the start`);
        }
    }




}
ermo(["9",
"00",
"8",
"30"])


