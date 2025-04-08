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

# 必要なディレクトリを作成
RUN mkdir -p /data/lib/flows

# フローファイルをlib下にコピー
COPY ./flows/temperature.json /data/lib/flows/
COPY ./flows/weather.json /data/lib/flows/

# Node-REDの設定
ENV NODE_RED_ENABLE_PROJECTS=false \
    NODE_RED_ENABLE_SAFE_MODE=false \
    NODE_RED_FLOW_FILE=flows.json \
    FLOWS=flows.json \
    NODE_OPTIONS="--max-old-space-size=512"

# エントリーポイントとコマンドの設定
ENTRYPOINT ["npm", "start", "--", "--userDir", "/data"] 