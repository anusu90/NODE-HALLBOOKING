let frontendURL = "https://angry-lumiere-4df132.netlify.app/"
let backendURL = "https://guvi-hallbooking-1.herokuapp.com"

document.getElementById('showrooms').addEventListener('click', (e)=>{

    console.log(e.target);

    fetch(backendURL+ "/showrooms")
    .then( res => res.json())
    .then(output => {
        displayRooms(output)
    })
})

document.getElementById('showBookedRooms').addEventListener('click', (e)=>{

    console.log(e.target);

    fetch(backendURL + "/showbookedrooms")
    .then( res => res.json())
    .then(output => {
        displayBookedRooms(output)
    })
})

document.getElementById('addRoomForm').addEventListener('submit',(e)=>{
    let selectedOption  = document.querySelector('input[name="classOfRoom"]:checked').value
    console.log(selectedOption)
})


displayRooms = (output) => {
    tbody = document.querySelector("#myTableBody")
    tbody.innerHTML = "";
    output.forEach(room => {

        let tr = document.createElement('tr')
        tr.innerHTML =
            `  <th scope="row">${room.id}</th>` +
            `         <td>${room.category}</td>` +
            `  <td>${room.capacity}</td>` +
            `  <td>${room.rate}</td>`
        
        tbody.appendChild(tr)

    })
}
displayBookedRooms = (output) => {
    tbody = document.querySelector("#myTableBody2")
    tbody.innerHTML = "";
    output.forEach(room => {

        let tr = document.createElement('tr')
        tr.innerHTML =
            `  <th scope="row">${room.roomID}</th>` +
            `         <td>${room.customerName}</td>` +
            `  <td>${String(new Date(room.startTime)).slice(0,21)}</td>` +
            `  <td>${String(new Date(room.endTime)).slice(0,21)}</td>`
        
        tbody.appendChild(tr)

    })
}

// displayRooms();



document.getElementById('bookingForm').addEventListener('submit', (e)=> {

    e.preventDefault();
    let roomID = document.getElementById("roomID").value;
    let customerName = document.getElementById("customerName").value;
    let startTime = new Date (document.getElementById("startTime").value);
    let endTime = new Date (document.getElementById("endTime").value);

    if (startTime > endTime){
        alert("End time cannot be less than Start time")
    } else if (startTime < new Date() || endTime < new Date()){

        alert ("Enter valid dates")

    } else {

        fetch (backendURL+"/bookRoomJS" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({

                roomID: roomID,
                customerName: customerName,
                startTime: startTime,
                endTime: endTime,
            })

        })
            .then(function (response) {
                let status = (response.status)
                if (status === 200){
                    window.location = frontendURL;
                } else if (status === 406){
                    alert ("Rooms not available on those dates")
                }
                return response.json()
            })
            .then(outcome => console.log(outcome))
    }

})