document.addEventListener("DOMContentLoaded",function(){
    let form = document.getElementById("docter-form");
    let tableBody = document.getElementById("docter-table-body");
    form.addEventListener("submit", function(event){
        event.preventDefault();



        let name = document.getElementById("name").value;
        let docterId = document.getElementById("docter-id").value;
        let specialization = document.getElementById("specialization").value;
        let experience = parseInt( document.getElementById)("experience").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;

       let role = "";
       if(experience > 5){
        role = "senior";
       }else if (experience >= 2 && experience <=5){
        role = "junior";
       }else{
        role = "Trainee";
       }


    let newRow = document.createElement("tr");
    newRow.innerHTML = `
       <td>${name}</td>
       <td>${docterId}</td>
       <td>${specialization}</td>
       <td>${experience}</td>
       <td>${email}</td>
       <td>${mobile}</td>
       <td>${role}</td>
       <td><button class="delete-btn">Delete</button></td>
    
    `;
    
    newRow.querySelector(".delete-btn").addEventListener("click", function(){
        newRow.remove();
    });
    tableBody.appendChild(newRow);
    form.reset();

    });
});