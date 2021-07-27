import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsServices.js";
import { api } from "../Services/AxiosService.js";

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {

  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }

  async addJob() {
    try {
      event.preventDefault()
      let form = event.target
      let work = {
        company: form.company.value,
        name: form.name.value,
        time: form.time.value,
        pay: form.pay.value,
        imgUrl: form.imgUrl.value,
        description: form.description.value
      }
      jobsService.addJob(work)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }

  deleteJob(jobId) {
    console.log('You are trying to delete the job by the id of ' + jobId)
    jobsService.deleteJob(jobId)
  }

  async bidJob(jobId) {
    console.log('you are bidding on the job with the id of', jobId)
    jobsService.bidJob(jobId)
  }
}

