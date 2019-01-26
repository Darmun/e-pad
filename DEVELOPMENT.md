# Development practices

## Commit style

[StyleGuide](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

Short instruction:

###### If using IDE/Git tools:

Try to keep commit format according to style guide.

###### If using command line:

Use `git status` and `git add` to add files to staging area, and then
`yarn commit` to start commit wizard which will lead you through the process.

###### Updating changelog:

If satisfied use `yarn changelog` to update changelog and commit. It's best to do this as last commit in merge request.
