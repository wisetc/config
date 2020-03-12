// @format
const { getAuthor, getCommitMessage, getHash, send } = require('./git-utils');

async function getPostBody() {
  const content = await getCommitMessage();
  const creator = await getAuthor();
  const version = await getHash();
  return {
    content,
    creator,
    product: 'dingtalk',
    version,
  };
}

async function saveBuild() {
  const postBody = await getPostBody();
  const url = process.env.BUILD_LOGGER_URL;
  await send(postBody, url);
}

saveBuild();
