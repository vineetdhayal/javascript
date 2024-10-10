class JobManager {
    constructor() {
        this.runningJobs = 0;
        this.jobQueue = [];
    }
    addJob(job) {
        this.jobQueue.push(job);
        this.runJobs();
    }
    runJobs() {
        if (this.jobQueue.length > 0 && this.runningJobs < 2) {
            const myJob = this.jobQueue.shift();
            this.runJob(myJob);
        }
    }
    runJob(job) {
        this.runningJobs++;
        console.log(`starting job ${job}`);
        setTimeout(() => {
            this.runningJobs--;
            console.log(`ending job ${job}`);
            this.runJobs();
        }, Math.random() * 1000)
    }
}

const jobManager = new JobManager();

jobManager.addJob("Job 1");
jobManager.addJob("Job 2");
jobManager.addJob("Job 3");
jobManager.addJob("Job 4");
jobManager.addJob("Job 5");
