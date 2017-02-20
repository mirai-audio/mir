# Contribution guidelines

## Technical Contributions

This document will guide you through the contribution process.

### Step 1: Fork

Create an issue for the feature or bug (if one does not already exist).

Fork the project [on GitHub](https://github.com/mirai-audio/mir) and clone the
project locally.

```bash
$ git clone git@github.com:username/mir.git
$ cd mir
$ git remote add upstream git://github.com/mirai-audio/mir.git
```

#### Which branch?

For developing new features and bug fixes, the `master` branch should be pulled
and built upon.

### Step 2: Branch

Create a branch for the feature work, use the issue number from the ticket
created in step 1 as a prefix for the branch name:

```bash
$ git checkout -b 12-my-branch -t origin/master
```

Begin hacking, and make sure to follow the
[STYLEGUIDE](https://github.com/mirai-audio/mir/wiki/STYLEGUIDE).

### Step 3: Commit

Make sure git knows your name and email address:

```bash
$ git config --global user.name "J. Random User"
$ git config --global user.email "j.random.user@example.com"
```

Add and commit:

```bash
$ git add my/changed/file.txt
$ git commit
```

Writing a good commit message is important. A commit log should describe what
changed and why. Follow these guidelines when writing one:

1. The first line should be 50 characters or less and contain a short
   description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.

A good commit log can look something like this:

```txt
explain the commit in one line

Body of commit message is a few lines of text, explaining things in more
detail, possibly giving some background about the issue being fixed, etc.

The body of the commit message can be several paragraphs, and please do proper
word-wrap and keep columns shorter than about 72 characters or so. That way,
`git log` will show things nicely even when it is indented.

Fixes: nodejs/node#1337
```

The header line should be meaningful; it is what other people see when they
run `git shortlog` or `git log --oneline`.


If the branch fixes an open issue, **please** add a reference to it at the end
of the log. Add `Fixes:` with a reference to the `<user>/<repo>#<issue>` to close 
the issue. Read more from [the cross-repo issue-closing
documentation](https://github.com/blog/1439-closing-issues-across-repositories) For
other references use `Refs:`. For example:

```txt
Fixed a typo in the documentation

Fixes: nodejs/node#1337

Refs: http://eslint.org/docs/rules/space-in-parens.html
Refs: https://github.com/nodejs/node/pull/3615
```

### Step 4: Rebase

Use `git rebase` (not `git merge`) to sync the branch to this upstream master
from time to time.

```bash
$ git fetch upstream
$ git rebase -i upstream/master
```

### Step 5: Test

Bug fixes and features **should come with tests**. Looking at other tests
to see how they should be structured can also help.

Make sure the linter does not report any issues and that all tests pass. Please
do not submit patches that fail either check.

### Step 6: Push

```text
$ git push origin 12-my-branch
```

Go to https://github.com/username/mir and select the branch.
Click the "Pull Request" button and fill out the form.

Pull requests are usually reviewed within a few days.


### Step 7: Discuss and update

Expect feedback or requests for changes to the Pull Request.
This is a big part of the submission process so don't be disheartened!

To make changes to an existing <abbr title="Pull Request">PR</abbr>, make the
changes to the branch.  When pushing that branch, GitHub will automatically
update the <abbr title="Pull Request">PR</abbr>.

Push more commits to the branch:

```text
$ git add my/changed/files
$ git commit
$ git push origin 12-my-branch
```

Or rebase against master:

```text
$ git fetch --all
$ git rebase -i origin/master
$ git push -f origin 12-my-branch
```

Or amend the last commit (_e.g. need to change the commit log_).

```text
$ git add any/changed/files
$ git commit --amend
$ git push -f origin 12-my-branch
```

### Step 8: Landing

In order to land, a Pull Request needs to be reviewed and approved by at least
one collaborator and pass all testing.  After that, as long as there are no
objections from a collaborator, the Pull Request can be merged.

Congrats🎉, you just landed your first contribution!

