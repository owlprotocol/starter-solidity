# Typescript Starter Project

Typescript starter project.

## Installing

Save storage with [pnpm](https://pnpm.js.org/). You can also use regular NPM or Yarn.

```
pnpm i
```

## Cloning

To clone this starter repo and add it as an upstream folow below:

```
git clone https://github.com/leovigna/typescript-starter.git myproject
cd myproject
git remote set-url origin https://github.com/leovigna/myproject.git
git remote add upstream https://github.com/leovigna/typescript-starter.git
git push origin master
git push --all
```

Then to sync any new changes form this repo to the new repo follow [this](https://help.github.com/en/articles/syncing-a-fork):

```
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```