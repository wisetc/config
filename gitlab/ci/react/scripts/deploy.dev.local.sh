export DOCKER_MAPPING_DEPLOY_VOLUME="/deployment"
export PROJECT_DEPLOY_DIR_NAME_CURRENT="$DOCKER_MAPPING_DEPLOY_VOLUME/$CI_PROJECT_NAME/$CI_COMMIT_REF_NAME/$(git log -1 --pretty='%h')"
export PROJECT_DEPLOY_DIR_NAME_LATEST="$DOCKER_MAPPING_DEPLOY_VOLUME/$CI_PROJECT_NAME/$CI_COMMIT_REF_NAME/latest"
export TEST_ORIGIN="http://192.168.1.33:8000"
mkdir -p $PROJECT_DEPLOY_DIR_NAME_CURRENT
mkdir -p $PROJECT_DEPLOY_DIR_NAME_LATEST

npm run build
ls -lh build
cp -r build/* $PROJECT_DEPLOY_DIR_NAME_CURRENT
ls -lh $PROJECT_DEPLOY_DIR_NAME_LATEST
rm -rf $PROJECT_DEPLOY_DIR_NAME_LATEST/*
cp -r build/* $PROJECT_DEPLOY_DIR_NAME_LATEST
echo "$TEST_ORIGIN/$CI_PROJECT_NAME/$CI_COMMIT_REF_NAME/$(git log -1 --pretty='%h')/index.html"
echo "$TEST_ORIGIN/$CI_PROJECT_NAME/$CI_COMMIT_REF_NAME/latest/index.html"
