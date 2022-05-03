export default class repo{
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name               = name
        this.author             = author
        this.language           = language
        this.stars              = stars
        this.forks              = forks
        this.issues_open        = issues_open
        this.issues_close       = issues_close
        this.numberOfCommits    = numberOfCommits
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}