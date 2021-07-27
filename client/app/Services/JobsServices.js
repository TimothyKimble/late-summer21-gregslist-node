import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobsService {
  constructor() {
    this.getAllJobs()
  }
  async addJob(work) {
    const res = await api.post('jobs', work)
    console.log('your new job', res.data)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getAllJobs() {
    try {
      const res = await api.get('jobs')
      console.log(res.data)
      ProxyState.jobs = res.data.map(j => new Job(j))
    } catch (error) {
      console.error(error)
    }
  }

  async deleteJob(jobId) {
    try {
      const res = await api.delete('jobs/' + jobId)

      ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
    } catch (error) {
      console.error(error)
    }
  }

  async bidJob(jobId) {
    try {
      let foundJob = ProxyState.jobs.find(j => j.id == jobId)
      foundJob.pay -= 200
      const res = await api.put('jobs/' + jobId, foundJob)
      console.log('updated Job', res.data)

      ProxyState.jobs = ProxyState.jobs
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()