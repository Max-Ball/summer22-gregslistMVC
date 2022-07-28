import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js";


class JobsService{

  createJob(newJob){
    ProxyState.jobs = [...ProxyState.jobs, new Job(newJob)]
    console.log('new job working?');

  }

  deleteJob(id){
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
  }
}



export const jobsService = new JobsService()