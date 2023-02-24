const gulp = require('gulp');
const git = require('simple-git');

const GITLAB_USER = process.env.GITLAB_USER, GITLAB_TOKEN = process.env.GITLAB_TOKEN;
let url = "";
if (GITLAB_USER && GITLAB_TOKEN)
    url = `https://${GITLAB_USER}:${GITLAB_TOKEN}@gitlab.syncfusion.com/content/bold-bi-docs.git`;
else
    url = "https://gitlab.syncfusion.com/content/bold-bi-docs.git";

gulp.task('git-clone', function (done) {
  git().silent(false)
    .clone(url, 'temp', (errorLog) => {
      if (errorLog)
        console.log(errorLog);
    })
    .exec(() => {
        git('temp').checkout('bold-bi-docs-migration', (errorLog) => {
        if (errorLog)
          console.log(errorLog);
        done();
      });
    });
})