FROM nodered/node-red:3.1.3

# 必要なノードのインストール
RUN npm install \
    node-red-dashboard@3.6.1 \
    node-red-contrib-moment@4.0.0 \
    node-red-contrib-statistics@2.2.2 \
    node-red-contrib-simple-message-queue@0.2.7 \
    node-red-contrib-throttle@0.1.7

# 作業ディレクトリの設定
WORKDIR /usr/src/node-red

# Node-REDの設定
ENV NODE_RED_ENABLE_PROJECTS=true \
    NODE_RED_ENABLE_SAFE_MODE=false \
    NODE_RED_FLOW_FILE=flows.json \
    FLOWS=flows.json \
    NODE_OPTIONS="--max-old-space-size=512"

# エントリーポイントとコマンドの設定
ENTRYPOINT ["npm", "start", "--", "--userDir", "/data"] 