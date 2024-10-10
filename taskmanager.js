class TaskManager {
    constructor() {
        this.aResult = null;
        this.bResult = null;
        this.cResult = null;
        this.dResult = null;
        this.eResult = null;
    }
    async taskA() {
        console.log('task A');
    }
    async taskB() {
        console.log('task B');
    }
    async taskC() {
        console.log('task C');
    }
    async taskD(resA, resB) {
        console.log('task D', resA, resB);
    }
    async taskE(resA, resB) {
        console.log('task E', resA, resB);
    }

    async executeTasks() {
        [this.aResult, this.bResult, this.cResult] = await Promise.all([this.taskA, this.taskB, this.taskC]);
        this.dResult = await this.taskD(this.aResult, this.bResult);
        this.eResult = await this.taskE(this.cResult, this.dResult);
    }
}
const manager = new TaskManager();
manager.executeTasks();
