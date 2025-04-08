# Fi-Red-Sim

FIWAREデバイスシミュレータ（Node-REDベース）

## 概要

このプロジェクトは、FIWAREエコシステムのためのデバイスシミュレータです。Node-REDを使用して、様々なIoTデバイスの動作をシミュレートし、FIWARE Orion Context Brokerと連携します。

## 主な機能

- 複数のIoTデバイスのシミュレーション
- リアルタイムデータ生成
- FIWAREエンティティの自動作成と更新
- 視覚的なフロー制御とモニタリング

## 必要条件

- Docker
- Docker Compose

## セットアップ

1. リポジトリのクローン：
   ```bash
   git clone [repository-url]
   cd fi-red-sim
   ```

2. 環境の起動：
   ```bash
   cd docker
   docker-compose up -d
   ```

3. アクセス：
   - Node-RED: http://localhost:1880
   - Orion Context Broker: http://localhost:1026
   
   Node-REDの初期認証情報：
   - ユーザー名: admin
   - パスワード: password

## 使用方法

1. Node-REDインターフェースにアクセス
2. 提供されているサンプルフローをインポート
3. 必要に応じてフローをカスタマイズ
4. デプロイしてシミュレーションを開始

## ディレクトリ構造

```
fi-red-sim/
├── docker/
│   └── docker-compose.yml
├── flows/
│   └── flows.json
└── config/
    └── settings.js
```

## ライセンス

MIT

## 貢献

プルリクエストやイシューの報告を歓迎します。
