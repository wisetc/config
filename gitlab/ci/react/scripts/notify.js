// @format
const {
  getAuthor,
  getCommitMessage,
  getHash,
  getEnvValue,
  send,
} = require('./git-utils');

async function getPostBody() {
  const commitMessage = await getCommitMessage();
  const author = await getAuthor();
  const version = await getHash();
  const detail = `项目名为${getEnvValue(
    'CI_PROJECT_NAME'
  )}，分支索引为${getEnvValue(
    'CI_COMMIT_REF_NAME'
  )}，项目pipelineID为${getEnvValue('CI_PIPELINE_ID')}。`;

  return {
    name: '大家',
    appName: '示例微应用',
    url: 'http://h5.example.cn/app-dingtalk',

    commitMessage,
    author,
    detail,
    version,
  };
}

async function notify() {
  const postBody = await getPostBody();
  const url = process.env.NOTIFY_EMAIL_URL;
  await send(postBody, url);
}

notify();
