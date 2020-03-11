// @format
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function getCommitMessage() {
  const { stdout } = await exec('git log -1 --pretty="%B"');
  return stdout.replace(/\n*$/, '').replace(/\n/g, '<br/>');
}

async function getAuthor() {
  const { stdout } = await exec(
    'echo $(git log -1 --pretty="%an <%ae>") | tr -d "\n"'
  );
  return stdout;
}

async function getHash() {
  const { stdout } = await exec(
    'echo $(git log -1 --pretty="%H") | tr -d "\n"'
  );
  return stdout;
}

function getEnvValue(key) {
  return process.env[key];
}

/**
 * 获取提交数据
 * @param {object} body body 对象
 */
function getPostBody(body) {
  let ret = '';
  for (const k in body) {
    let value = encodeURIComponent(body[k]);
    ret += `&${k}=${value}`;
  }
  return ret.slice(1);
}

/**
 * post data to url
 * @param {string | object} body
 * @param {string} url
 */
async function send(body, url) {
  let _body = typeof body === 'string' ? body : getPostBody(body);
  const shellCmd = `curl "${url}" -d "${_body}"`;
  console.log(shellCmd);
  const { stdout, stderr } = await exec(shellCmd);
  stdout && console.log(stdout);
  stderr && console.log(stderr);
  return stdout;
}

module.exports = {
  exec,
  getCommitMessage,
  getAuthor,
  getHash,
  getEnvValue,
  getPostBody,
  send,
};
