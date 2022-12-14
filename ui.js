class Ui {
    constructor(){
        this.profile = document.getElementById('profile')
    }

    //display profile in ui

    showProfile(user){
      this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row"> 
      <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}"> 
      <a href = "${user.html_url}" target = "_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
      </div>
      <div class="col-md-9">
       <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
       <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
       <span class="badge badge-success">Public followers: ${user.followers}</span>
       <span class="badge badge-info">Public repos :${user.following}</span>
       <br>
       <br>
       <ul class="list-group">
       <li class="list-group-item">Company: ${user.company}</li>
       <li class="list-group-item">Website: ${user.blog}</li>
       <li class="list-group-item">Location: ${user.location}</li>
       <li class="list-group-item">Member since: ${user.created_at}</li>
       </ul>
      </div>
      </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repositories<h3>
      <div id="repos"></div>
      `
       


    }
    //clear profile
   

   //clear alert message
}