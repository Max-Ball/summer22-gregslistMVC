import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


function _drawJob(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  document.getElementById("listings").innerHTML = template
}

export class JobsController{
  constructor(){
    console.log(ProxyState.jobs, 'controller is working');
    ProxyState.on('jobs', _drawJob)
  }
  
    viewJobs(){
      _drawJob()
      document.getElementById('form').classList.add('d-none')
      document.getElementById('house-form').classList.add('d-none')
      document.getElementById('job-form').classList.remove('d-none')
    }


    createJob(){
      window.event.preventDefault()
      let form = window.event.target

      let newJob ={
        company: form.company.value,
        title: form.title.value,
        location: form.location.value,
        fulltime: form.fulltime.value,
        salary: form.salary.value,
        experience: form.experience.value,
        img: form.img.value
      }

      jobsService.createJob(newJob)
      form.reset()
    }

    deleteJob(id){
      console.log('delete', id);
      jobsService.deleteJob(id)
    }
  

}