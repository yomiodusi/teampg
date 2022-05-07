const completedTeam = window.data

//function grabUserInput () {
    completedTeam.forEach(member => {
        if(member.number) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img styles={{width:20px}} class="card-img-top" src="../images/cofee.png" alt="job image">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <p class="list-group-item">Email: <a href=${member.email}>${member.email}</a></p>
              <p class="list-group-item">Number: ${member.number}</p>
            </div> 
        </div>    `
            $('#team-parent').append(studentHTML)
        }
    });

    completedTeam.forEach(member => {
        if(member.github) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img class="card-img-top" src="../images/glasses.png" alt="job image">
            <div class="card-body">
              <h5 class="card-title">Engineer</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <a class="list-group-item">Email: ${member.email}</a>
              <p class="list-group-item">Github:<a href = https://github.com/${member.github}>${member.github}</a></p>
            </div> 
        </div>  `
            $('#team-parent').append(studentHTML)
        }
    });
 
    completedTeam.forEach(member => {
        if(member.school) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img class="card-img-top" src="../images/student.png" alt="job image">
            <div class="card-body">
              <h5 class="card-title">Student</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <p class="list-group-item">Email: ${member.email}</p>
              <p class="list-group-item">School: ${member.school}</p>
            </div> 
        </div>   `
            $('#team-parent').append(studentHTML)
        }
    });
         
             
             
//}
