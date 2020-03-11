# .gitlab-ci for React

Gitlab CI 针对 React js 项目的部署脚本配置。

## 脚本文件

- [git-utils](./scripts/git-utils.js) 提供发送数据的方法
- [notify.js](./scripts/notify.js) 通过接口发送部署结果邮件
- [save_build.prod.js](./scripts/save_build.prod.js) 通过接口将版本部署结果存库
- [deploy.dev.local.sh](./scripts/deploy.dev.local.sh) 部署编译好的代码到内网开发环境
- [deploy.test.local.sh](./scripts/deploy.test.local.sh) 部署编译好的代码到内网预览环境
- [sync.sh](./scripts/sync.sh) 传输 master 中的代码到生产环境的部署目录

## 编译配置

下面是编译过程中使用到的几个环境变量：

- BUILD_LOGGER_URL 版本部署存库接口
- DEPLOYE_PATH 目标部署目录
- GITLAB_PUSH_ACCOUNT 将部署脚本同步的 test 分支推送至远程所用 gitlab 账号
- NOTIFY_EMAIL_URL 版本发布通知接口
- REACT_APP_PASSWORD 应用的后台调试登录密码
- REACT_APP_VCONSOLE_INVOKE_CODE 应用的调试器唤起口令
- SSH_PORT 目标服务器 ssh 端口
- SSH_PRIVATE_KEY 目标服务器部署账号对应的 ssh 私钥
- SSH_SERVER 目标服务器地址
- SSH_USER 目标服务器 ssh 用户名
