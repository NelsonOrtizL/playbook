export default class pullRequest{
    constructor(title, branchName, status, repositoryNameAssociated){
        this.title                     = title
        this.status                    = status
        this.branchName                = branchName
        this.dateCreated               = new Date()
        this.repositoryNameAssociated  = repositoryNameAssociated
    }

    getStatus(){
        return `El estado del ${this.title} esta en ${this.status}`;
    }

    getTitleAndAuthor(){
        return `Titulo: ${this.title} y el autor es ${repo.author}`;
    }
}