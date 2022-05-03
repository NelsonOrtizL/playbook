export default class issue{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title                     = title
        this.status                    = status
        this.labels                    = labels
        this.author                    = author
        this.dateCreated               = new Date()
        this.lastUpdated               = new Date()
        this.numberOfComments          = numberOfComments
        this.repositoryNameAssociated  = repositoryNameAssociated
    }

    getTitleAndAuthor(){
        return `El titulo es ${this.title} y el autor es ${this.author}`;
    }

    getGeneralInfo(){
        return `El repositorio ${this.repositoryNameAssociated} y fue creado el ${this.dateCreated} y esta actualizado hasta el dia ${this.lastUpdated}`
    }
}