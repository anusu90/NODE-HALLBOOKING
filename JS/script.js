document.getElementById('showrooms').addEventListener('click', (e)=>{

    console.log(e.target);

    fetch("http://localhost:3001/showrooms")
    .then( res => res.json())
    .then(output => {
        displayRooms(output)
    })
})

document.getElementById('showBookedRooms').addEventListener('click', (e)=>{

    console.log(e.target);

    fetch("http://localhost:3001/showbookedrooms")
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
            `  <td>${room.startTime}</td>` +
            `  <td>${room.endTime}</td>`
        
        tbody.appendChild(tr)

    })
}

displayRooms();
