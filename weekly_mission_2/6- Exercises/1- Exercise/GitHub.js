// Creando un objeto Repo
const repo = {
    // Lista de atributos
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 10,
    stars: 100,
    forks: 150,
    issues_open: 10,
    issues_close: 10,

    //Lista de métodos
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },

    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
};

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "LaunchX practicas",
    repositoryNameAssociated: "LaunchX",
    status: "OPEN",
    numberOfComments: 100,
    labels: ["Node","JavaScript","JSON","Git"],
    author: "carlogilmar",
    dateCreated: new Date(),
    lastUpdated: new Date(),

    getTitleAndAuthor: function(){
        return `El titulo es ${this.title} y el autor es ${this.author}`;
    },

    getGeneralInfo: function(){
        return `El repositorio ${this.repositoryNameAssociated} y fue creado el ${this.dateCreated} y esta actualizado hasta el dia ${this.lastUpdated}`
    }
}

console.log("Nombre del issue:" + issue.title)
console.log("Titulo y Author: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "PullRequest",
    branchName: "master",
    dateCreated: new Date(),
    status: "OPEN",
    repositoryNameAssociated: "LaunchX",

    getStatus: function(){
        return `El estado del ${this.title} esta en ${this.status}`;
    },
    getTitleAndAuthor: function(){
        return `Titulo: ${this.title} y el autor es ${repo.author}`;
    }
}

console.log("Nombre del PullRequest:" + pullRequest.title)
console.log("Titulo y Author: " + pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())

