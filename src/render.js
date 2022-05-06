const completedTeam = window.data

//function grabUserInput () {
    completedTeam.forEach(member => {
        if(member.number) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img class="card-img-top" src="..." alt="job image">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <p class="list-group-item">Email: ${member.email}</p>
              <p class="list-group-item">Github: ${member.number}</p>
          </div> 
            `
            $('#team-parent').append(studentHTML)
        }
    });

    completedTeam.forEach(member => {
        if(member.github) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img class="card-img-top" src="..." alt="job image">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <p class="list-group-item">Email: ${member.email}</p>
              <p class="list-group-item">Github: ${member.github}</p>
          </div> 
            `
            $('#team-parent').append(studentHTML)
        }
    });

    completedTeam.forEach(member => {
        if(member.school) {
            const studentHTML = `
        <div class="card">
            <h3>${member.name}</h3>
            <img class="card-img-top" src="..." alt="job image">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="list-group-item">ID: ${member.tag}</p>
              <p class="list-group-item">Email: ${member.email}</p>
              <p class="list-group-item">Github: ${member.school}</p>
          </div> 
            `
            $('#team-parent').append(studentHTML)
        }
    });
//}
