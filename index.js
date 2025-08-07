const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    try {
           // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const num1 = core.getInput('number1');
    const num2 = core.getInput('number2');

    const result = Number(num1) + Number(num2)

   core.setOutput('result', result)
    } catch (error) {
        core.setFailed(error.message)
    }

}

run();