

let labels1 = ["22/4",	"23/4",	"24/4",	"25/4",	"26/4",	"27/4",	"28/4","29/4",	"30/4","31/4"];
let data1= [500, 50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811];
let colors1 = ["red", "blue"];

let myChart1 = document.getElementById("myChart1").getContext('2d');

let Chart6 = new Chart(myChart1, {
    type : 'line',
    data: {
        labels: labels1,
        datasets: [{
            label: 'Number of Conversations',
            data: data1,
            backgroundColor: '#2196f3',
            borderColor: '#2196f3', 
            fill: false,

        }],

    },
 
});



let labels2 = ["TransferIssues", "AccountOpeningEnquiry","ComplaintFollowUp","Activation","NeedsClarification","BlockingIssues","EcobankOnline","General_Connect_Agent","OTPIssues","AccountBalanceEnquiry"];
let data2 = [13000, 10000,9000,8700,7900,6500,6000,5500,5400,5000];
let colors2 = "Blue";

let myChart2 = document.getElementById("myChart2").getContext('2d')

let chart2 = new Chart(myChart2, {
    type : 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2,
            label: "Top 10 Most Hit Intents"

        }]
    },

});


let labels4 = ["Resolved by Agents", "Resolved by Bot"];
let data4 = [14000, 4000];
let colors4 = ["red", "blue"];

let myChart4 = document.getElementById("myChart4").getContext('2d')

let Chart4 = new Chart(myChart4, {
    type : 'pie',
    data: {
        labels: labels4,
        datasets: [{
            data: data4,
            backgroundColor: colors4

        }]
    },
 
});

let labels5 = ["Assigned Handover", "Un-Assigned Handover", "Resolved by Agents"];
let data5 = [4000, 1000, 3400];
let colors5 = ["red", "blue", "green"];

let myChart5 = document.getElementById("myChart5").getContext('2d')

let Chart5 = new Chart(myChart5, {
    type : 'doughnut',
    data: {
        labels: labels5,
        datasets: [{
            data: data5,
            backgroundColor: colors5

        }]
    },
 
});
