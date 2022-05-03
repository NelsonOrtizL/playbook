import repo from './repo.js'
import issue from './issue.js'
import pullRequest from './pullRequest.js';

const repo1 = new repo('LaunchX','Carlogilmar','JavaScript',10,100,150,10,10);
const issue1 = new issue('LaunchX practicas','LaumchX','OPEN',100,["Node","JavaScript","JSON","Git"],'carlogilmar');
const pullRequest1 = new pullRequest('PullRequest','master','OPEN','LaunchX');

console.log(repo1.getGeneralInfo());
console.log(issue1.getGeneralInfo());
console.log(pullRequest1.getStatus());
