module.exports = {
    flowFile: 'flows.json',
    flowFilePretty: true,
    
    // Node-REDの管理画面のセキュリティ設定
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",  // "password"のハッシュ
            permissions: "*"
        }]
    },

    // エディタの設定
    editorTheme: {
        projects: {
            enabled: false
        }
    },

    // 実行時の設定
    functionGlobalContext: {
        // ここにグローバルコンテキストを追加できます
    },

    // Node-REDのログ設定
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
}; 