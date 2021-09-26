function salary(input) {
    let index = 0;
    let openTabs = Number(input[index])
    index++;
    let incomeSalary = Number(input[index])
    index++;
    let isLostSalary = false;

    for (let i = 0; i < openTabs; i++) {
        let currentTab = input[index]
        index++;

        if (currentTab == "Facebook") {
            incomeSalary -= 150;
        } else if (currentTab == "Instagram") {
            incomeSalary -= 100;
        } else if (currentTab == "Reddit") {
            incomeSalary -= 50;
        }
        if (incomeSalary <= 0) {
            console.log("You have lost your salary.");
            isLostSalary = true ;
            break;
        }
    }
    if (!isLostSalary){
        console.log(incomeSalary);
    }
    




}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
