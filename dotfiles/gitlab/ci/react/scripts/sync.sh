which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
mkdir -p ~/.ssh
chmod 700 ~/.ssh
ssh-keyscan -p $SSH_PORT $SSH_SERVER >> ~/.ssh/known_hosts
chmod 644 ~/.ssh/known_hosts
ssh -p $SSH_PORT -T $SSH_USER@$SSH_SERVER
scp -P $SSH_PORT -r ./build/* $SSH_USER@$SSH_SERVER:$DEPLOYE_PATH
