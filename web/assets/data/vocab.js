const words = [
    {
        "id": 1,
        "word": "deadline",
        "japanese": "締め切り",
        "romaji": "shimekiri",
        "meaning_en": "the final time or date something must be finished",
        "examples": [
            {
                "english": "I need to finish this project before the deadline.",
                "japanese": "締め切りまでにこのプロジェクトを終わらせる必要があります。"
            },
            {
                "english": "The deadline was extended by three days.",
                "japanese": "締め切りは3日延長されました。"
            }
        ]
    },
    {
        "id": 2,
        "word": "schedule",
        "japanese": "予定",
        "romaji": "yotei",
        "meaning_en": "a plan of activities or events and their times",
        "examples": [
            {
                "english": "My schedule is full this week.",
                "japanese": "今週は予定がいっぱいです。"
            },
            {
                "english": "Please check the meeting schedule.",
                "japanese": "会議の予定を確認してください。"
            }
        ]
    },
    {
        "id": 3,
        "word": "client",
        "japanese": "顧客",
        "romaji": "kokyaku",
        "meaning_en": "a customer or company receiving services",
        "examples": [
            {
                "english": "We had a meeting with the client today.",
                "japanese": "今日クライアントと会議をしました。"
            },
            {
                "english": "The client requested a new feature.",
                "japanese": "クライアントが新しい機能を希望しました。"
            }
        ]
    },
    {
        "id": 4,
        "word": "feature",
        "japanese": "機能",
        "romaji": "kinou",
        "meaning_en": "a specific function or ability of software",
        "examples": [
            {
                "english": "This app has a dark mode feature.",
                "japanese": "このアプリにはダークモード機能があります。"
            },
            {
                "english": "We are developing a new feature.",
                "japanese": "新しい機能を開発しています。"
            }
        ]
    },
    {
        "id": 5,
        "word": "interface",
        "japanese": "画面",
        "romaji": "gamen",
        "meaning_en": "the visual part of an application users interact with",
        "examples": [
            {
                "english": "The interface is simple and easy to use.",
                "japanese": "画面はシンプルで使いやすいです。"
            },
            {
                "english": "We improved the mobile interface.",
                "japanese": "モバイル画面を改善しました。"
            }
        ]
    },
    {
        "id": 6,
        "word": "database",
        "japanese": "データベース",
        "romaji": "deetabeesu",
        "meaning_en": "a system used to store and organize data",
        "examples": [
            {
                "english": "The user data is stored in a database.",
                "japanese": "ユーザーデータはデータベースに保存されています。"
            },
            {
                "english": "We need to update the database schema.",
                "japanese": "データベース構造を更新する必要があります。"
            }
        ]
    },
    {
        "id": 7,
        "word": "server",
        "japanese": "サーバー",
        "romaji": "saabaa",
        "meaning_en": "a computer or system that provides data or services",
        "examples": [
            {
                "english": "The server is currently down.",
                "japanese": "現在サーバーが停止しています。"
            },
            {
                "english": "We deployed the app to the server.",
                "japanese": "アプリをサーバーにデプロイしました。"
            }
        ]
    },
    {
        "id": 8,
        "word": "deploy",
        "japanese": "デプロイする",
        "romaji": "depuroi suru",
        "meaning_en": "to release software to a live environment",
        "examples": [
            {
                "english": "We deployed the update last night.",
                "japanese": "昨夜アップデートをデプロイしました。"
            },
            {
                "english": "The app failed to deploy correctly.",
                "japanese": "アプリのデプロイに失敗しました。"
            }
        ]
    },
    {
        "id": 9,
        "word": "responsive",
        "japanese": "レスポンシブ",
        "romaji": "resuponshibu",
        "meaning_en": "able to adapt to different screen sizes",
        "examples": [
            {
                "english": "This website is fully responsive.",
                "japanese": "このウェブサイトは完全にレスポンシブ対応です。"
            },
            {
                "english": "Responsive design is important for mobile users.",
                "japanese": "モバイルユーザーにはレスポンシブデザインが重要です。"
            }
        ]
    },
    {
        "id": 10,
        "word": "algorithm",
        "japanese": "アルゴリズム",
        "romaji": "arugorizumu",
        "meaning_en": "a step-by-step method used to solve a problem",
        "examples": [
            {
                "english": "The recommendation algorithm needs improvement.",
                "japanese": "おすすめアルゴリズムを改善する必要があります。"
            },
            {
                "english": "I studied sorting algorithms today.",
                "japanese": "今日はソートアルゴリズムを勉強しました。"
            }
        ]
    },
    {
        "id": 11,
        "word": "repository",
        "japanese": "リポジトリ",
        "romaji": "ripojitori",
        "meaning_en": "a storage location for project files and version history",
        "examples": [
            {
                "english": "I uploaded the project to a GitHub repository.",
                "japanese": "プロジェクトをGitHubのリポジトリにアップロードしました。"
            },
            {
                "english": "Please clone the repository before starting.",
                "japanese": "作業を始める前にリポジトリをクローンしてください。"
            }
        ]
    },
    {
        "id": 12,
        "word": "commit",
        "japanese": "コミット",
        "romaji": "komitto",
        "meaning_en": "a saved change in version control",
        "examples": [
            {
                "english": "I forgot to commit my changes yesterday.",
                "japanese": "昨日変更をコミットするのを忘れました。"
            },
            {
                "english": "Make a commit after finishing the feature.",
                "japanese": "機能が終わったらコミットしてください。"
            }
        ]
    },
    {
        "id": 13,
        "word": "branch",
        "japanese": "ブランチ",
        "romaji": "buranchi",
        "meaning_en": "a separate line of development in Git",
        "examples": [
            {
                "english": "I created a new branch for the UI update.",
                "japanese": "UI更新用に新しいブランチを作りました。"
            },
            {
                "english": "Please merge this branch after testing.",
                "japanese": "テスト後にこのブランチをマージしてください。"
            }
        ]
    },
    {
        "id": 14,
        "word": "debug",
        "japanese": "デバッグする",
        "romaji": "debaggu suru",
        "meaning_en": "to find and fix errors in software",
        "examples": [
            {
                "english": "I spent two hours debugging the app.",
                "japanese": "アプリのデバッグに2時間かかりました。"
            },
            {
                "english": "The login function still needs debugging.",
                "japanese": "ログイン機能はまだデバッグが必要です。"
            }
        ]
    },
    {
        "id": 15,
        "word": "framework",
        "japanese": "フレームワーク",
        "romaji": "fureemuwaaku",
        "meaning_en": "a tool or structure used to build applications",
        "examples": [
            {
                "english": "React is a popular frontend framework.",
                "japanese": "Reactは人気のあるフロントエンドフレームワークです。"
            },
            {
                "english": "This framework speeds up development.",
                "japanese": "このフレームワークは開発を速くします。"
            }
        ]
    },
    {
        "id": 16,
        "word": "environment",
        "japanese": "環境",
        "romaji": "kankyou",
        "meaning_en": "the setup or conditions where software runs",
        "examples": [
            {
                "english": "The development environment is ready.",
                "japanese": "開発環境の準備ができました。"
            },
            {
                "english": "The app works differently in each environment.",
                "japanese": "アプリは環境ごとに動きが違います。"
            }
        ]
    },
    {
        "id": 17,
        "word": "performance",
        "japanese": "性能",
        "romaji": "seinou",
        "meaning_en": "how well a system or application works",
        "examples": [
            {
                "english": "We improved the app performance.",
                "japanese": "アプリの性能を改善しました。"
            },
            {
                "english": "Poor performance can frustrate users.",
                "japanese": "性能が悪いとユーザーは不満を感じます。"
            }
        ]
    },
    {
        "id": 18,
        "word": "authentication",
        "japanese": "認証",
        "romaji": "ninshou",
        "meaning_en": "the process of verifying a user's identity",
        "examples": [
            {
                "english": "The app uses email authentication.",
                "japanese": "そのアプリはメール認証を使っています。"
            },
            {
                "english": "Authentication failed due to an invalid password.",
                "japanese": "パスワードが違うため認証に失敗しました。"
            }
        ]
    },
    {
        "id": 19,
        "word": "dashboard",
        "japanese": "ダッシュボード",
        "romaji": "dasshuboodo",
        "meaning_en": "a screen that displays important information and statistics",
        "examples": [
            {
                "english": "The dashboard shows learning progress.",
                "japanese": "ダッシュボードに学習の進み具合が表示されます。"
            },
            {
                "english": "I redesigned the admin dashboard.",
                "japanese": "管理ダッシュボードを作り直しました。"
            }
        ]
    },
    {
        "id": 20,
        "word": "prototype",
        "japanese": "試作品",
        "romaji": "shisakuhin",
        "meaning_en": "an early version used for testing ideas",
        "examples": [
            {
                "english": "I built a prototype in one week.",
                "japanese": "1週間で試作品を作りました。"
            },
            {
                "english": "The prototype helped us test the idea quickly.",
                "japanese": "試作品のおかげでアイデアを早く試せました。"
            }
        ]
    },
    {
        "id": 21,
        "word": "API",
        "japanese": "API",
        "romaji": "ee-pii-ai",
        "meaning_en": "a set of rules that allows different applications to communicate with each other",
        "examples": [
            {
                "english": "We need to integrate a third-party weather API.",
                "japanese": "外部の天気APIを統合する必要があります。"
            },
            {
                "english": "The API documentation is very clear.",
                "japanese": "そのAPIドキュメントは非常にわかりやすいです。"
            }
        ]
    },
    {
        "id": 22,
        "word": "refactor",
        "japanese": "リファクタリングする",
        "romaji": "rifaktaringu suru",
        "meaning_en": "to improve the internal structure of code without changing how it behaves",
        "examples": [
            {
                "english": "I will refactor this long function tomorrow.",
                "japanese": "明日、この長い関数をリファクタリングします。"
            },
            {
                "english": "Refactoring makes the codebase cleaner.",
                "japanese": "リファクタリングをするとコードベースがきれいになります。"
            }
        ]
    },
    {
        "id": 23,
        "word": "component",
        "japanese": "構成要素",
        "romaji": "konpoonento",
        "meaning_en": "a reusable piece of user interface or code",
        "examples": [
            {
                "english": "This button is a reusable UI component.",
                "japanese": "このボタンは再利用可能なUIコンポーネントです。"
            },
            {
                "english": "We broke down the page into smaller components.",
                "japanese": "ページをいくつかの小さなコンポーネントに分解しました。"
            }
        ]
    },
    {
        "id": 24,
        "word": "endpoint",
        "japanese": "エンドポイント",
        "romaji": "endopointo",
        "meaning_en": "a specific URL where an API can access information from a server",
        "examples": [
            {
                "english": "The login endpoint returns a token.",
                "japanese": "ログイン用エンドポイントはトークンを返します。"
            },
            {
                "english": "Please test this API endpoint.",
                "japanese": "このAPIエンドポイントをテストしてください。"
            }
        ]
    },
    {
        "id": 25,
        "word": "frontend",
        "japanese": "フロントエンド",
        "romaji": "furontoendo",
        "meaning_en": "the part of a website or app that users see and interact with",
        "examples": [
            {
                "english": "She specializes in frontend development.",
                "japanese": "彼女はフロントエンド開発を専門としています。"
            },
            {
                "english": "We are fixing a frontend bug.",
                "japanese": "フロントエンドのバグを修正しています。"
            }
        ]
    },
    {
        "id": 26,
        "word": "backend",
        "japanese": "バックエンド",
        "romaji": "bakkuendo",
        "meaning_en": "the server-side part of an application that handles logic and databases",
        "examples": [
            {
                "english": "The backend handles payment processing securely.",
                "japanese": "バックエンドが決済処理を安全に処理します。"
            },
            {
                "english": "He writes backend code using Node.js.",
                "japanese": "彼はNode.jsを使ってバックエンドのコードを書いています。"
            }
        ]
    },
    {
        "id": 27,
        "word": "middleware",
        "japanese": "ミドルウェア",
        "romaji": "midoruwea",
        "meaning_en": "software that acts as a bridge between an operating system or database and applications",
        "examples": [
            {
                "english": "The authentication middleware checks user status.",
                "japanese": "認証ミドルウェアがユーザーのステータスをチェックします。"
            },
            {
                "english": "We added logging middleware to our server.",
                "japanese": "サーバーにログ記録用のミドルウェアを追加しました。"
            }
        ]
    },
    {
        "id": 28,
        "word": "payload",
        "japanese": "ペイロード",
        "romaji": "peiroodo",
        "meaning_en": "the actual transmitted data in an API request or response",
        "examples": [
            {
                "english": "The request payload contains user details.",
                "japanese": "リクエストのペイロードにユーザーの詳細情報が含まれています。"
            },
            {
                "english": "Check if the payload format is correct.",
                "japanese": "ペイロードの形式が正しいか確認してください。"
            }
        ]
    },
    {
        "id": 29,
        "word": "encryption",
        "japanese": "暗号化",
        "romaji": "angouka",
        "meaning_en": "the process of converting information into secret code to prevent unauthorized access",
        "examples": [
            {
                "english": "Data encryption protects sensitive user information.",
                "japanese": "データの暗号化は、機密性の高いユーザー情報を保護します。"
            },
            {
                "english": "Passwords require strong encryption.",
                "japanese": "パスワードには強力な暗号化が必要です。"
            }
        ]
    },
    {
        "id": 30,
        "word": "deprecated",
        "japanese": "非推奨の",
        "romaji": "hishuishou no",
        "meaning_en": "software features that are old and being replaced, so they should not be used",
        "examples": [
            {
                "english": "This HTML tag is deprecated in modern web development.",
                "japanese": "このHTMLタグは現代のウェブ開発では非推奨になっています。"
            },
            {
                "english": "The compiler showed a warning for a deprecated library.",
                "japanese": "コンパイラが非推奨のライブラリに関する警告を表示しました。"
            }
        ]
    },
    {
        "id": 31,
        "word": "optimize",
        "japanese": "最適化する",
        "romaji": "saitekika suru",
        "meaning_en": "to make a system, code, or design as perfect and fast as possible",
        "examples": [
            {
                "english": "We need to optimize the images for faster loading.",
                "japanese": "読み込みを速くするために、画像を最適化する必要があります。"
            },
            {
                "english": "The team worked hard to optimize database queries.",
                "japanese": "チームはデータベースクエリを最適化するために尽力しました。"
            }
        ]
    },
    {
        "id": 32,
        "word": "syntax",
        "japanese": "構文（シンタックス）",
        "romaji": "koubun",
        "meaning_en": "the specific grammar rules of a programming language",
        "examples": [
            {
                "english": "JavaScript syntax can be tricky for beginners.",
                "japanese": "JavaScriptの構文は初心者にとって難しいことがあります。"
            },
            {
                "english": "A syntax error prevented the script from running.",
                "japanese": "構文エラーのせいでスクリプトが実行できませんでした。"
            }
        ]
    },
    {
        "id": 33,
        "word": "compile",
        "japanese": "コンパイルする",
        "romaji": "konpairu suru",
        "meaning_en": "to convert source code into machine language that a computer understands",
        "examples": [
            {
                "english": "It takes a few seconds to compile the code.",
                "japanese": "コードをコンパイルするのに数秒かかります。"
            },
            {
                "english": "The program failed to compile due to an error.",
                "japanese": "エラーのせいでプログラムのコンパイルに失敗しました。"
            }
        ]
    },
    {
        "id": 34,
        "word": "exception",
        "japanese": "例外",
        "romaji": "reigai",
        "meaning_en": "an error or unusual event that occurs during code execution",
        "examples": [
            {
                "english": "The program threw an exception when the file was missing.",
                "japanese": "ファイルが見つからなかったため、プログラムが例外をスローしました。"
            },
            {
                "english": "Use try-catch blocks to handle exceptions properly.",
                "japanese": "例外を適切に処理するために、try-catch文を使用してください。"
            }
        ]
    },
    {
        "id": 35,
        "word": "validation",
        "japanese": "検証（バリデーション）",
        "romaji": "barideeshon",
        "meaning_en": "the process of checking if data input is correct and secure",
        "examples": [
            {
                "english": "Form validation ensures that email addresses are valid.",
                "japanese": "フォームの検証により、メールアドレスが有効であることを確認します。"
            },
            {
                "english": "We need to add client-side validation.",
                "japanese": "クライアント側のバリデーションを追加する必要があります。"
            }
        ]
    },
    {
        "id": 36,
        "word": "callback",
        "japanese": "コールバック",
        "romaji": "koorubakku",
        "meaning_en": "a function passed as an argument to another function to be executed later",
        "examples": [
            {
                "english": "The click handler runs a callback function.",
                "japanese": "クリックハンドラがコールバック関数を実行します。"
            },
            {
                "english": "Nested callbacks can make code hard to read.",
                "japanese": "コールバックが入れ子になると、コードが読みづらくなることがあります。"
            }
        ]
    },
    {
        "id": 37,
        "word": "asynchronous",
        "japanese": "非同期の",
        "romaji": "hidouki no",
        "meaning_en": "operations that run independently of the main program flow without blocking it",
        "examples": [
            {
                "english": "Asynchronous requests prevent the UI from freezing.",
                "japanese": "非同期リクエストによってUIのフリーズを防ぐことができます。"
            },
            {
                "english": "Fetching data from an API is usually asynchronous.",
                "japanese": "APIからのデータ取得は通常、非同期で行われます。"
            }
        ]
    },
    {
        "id": 38,
        "word": "synchronous",
        "japanese": "同期の",
        "romaji": "douki no",
        "meaning_en": "code execution that happens step-by-step in perfect order, blocking next tasks until current finishes",
        "examples": [
            {
                "english": "Synchronous tasks block execution until they are done.",
                "japanese": "同期タスクは、完了するまで後続の処理の実行をブロックします。"
            },
            {
                "english": "Standard JavaScript execution is single-threaded and synchronous.",
                "japanese": "標準的なJavaScriptの実行はシングルスレッドかつ同期処理です。"
            }
        ]
    },
    {
        "id": 39,
        "word": "library",
        "japanese": "ライブラリ",
        "romaji": "raiburari",
        "meaning_en": "a collection of pre-written code that developers can use to solve common problems",
        "examples": [
            {
                "english": "jQuery is a famous JavaScript library.",
                "japanese": "jQueryは有名なJavaScriptのライブラリです。"
            },
            {
                "english": "We imported a library for formatting dates.",
                "japanese": "日付のフォーマット変更用にライブラリをインポートしました。"
            }
        ]
    },
    {
        "id": 40,
        "word": "package",
        "japanese": "パッケージ",
        "romaji": "pakkeeji",
        "meaning_en": "a module or directory of code distributed together with a manifest file",
        "examples": [
            {
                "english": "You can install this package using npm.",
                "japanese": "npmを使ってこのパッケージをインストールできます。"
            },
            {
                "english": "Please update your project packages.",
                "japanese": "プロジェクトのパッケージを更新してください。"
            }
        ]
    },
    {
        "id": 41,
        "word": "module",
        "japanese": "モジュール",
        "romaji": "mojuuru",
        "meaning_en": "an isolated, discrete component of a software program",
        "examples": [
            {
                "english": "Each module should handle only one specific task.",
                "japanese": "各モジュールは1つの特定のタスクのみを処理すべきです。"
            },
            {
                "english": "We exported the authentication logic into a separate module.",
                "japanese": "認証ロジックを別のモジュールにエクスポートしました。"
            }
        ]
    },
    {
        "id": 42,
        "word": "dependency",
        "japanese": "依存関係",
        "romaji": "izon kankei",
        "meaning_en": "a separate piece of software or library that your code needs to work properly",
        "examples": [
            {
                "english": "This project has too many external dependencies.",
                "japanese": "このプロジェクトは外部への依存関係が多すぎます。"
            },
            {
                "english": "We need to install the missing dependency.",
                "japanese": "不足している依存関係をインストールする必要があります。"
            }
        ]
    },
    {
        "id": 43,
        "word": "configuration",
        "japanese": "設定（構成）",
        "romaji": "settei",
        "meaning_en": "the arrangements and settings chosen for a program or system hardware",
        "examples": [
            {
                "english": "Check the configuration file for database settings.",
                "japanese": "データベースの設定については設定ファイルを確認してください。"
            },
            {
                "english": "The initial configuration took a lot of time.",
                "japanese": "初期設定に多くの時間がかかりました。"
            }
        ]
    },
    {
        "id": 44,
        "word": "parameter",
        "japanese": "パラメータ（媒介変数）",
        "romaji": "parameeta",
        "meaning_en": "a variable declared in a function definition used to accept data input",
        "examples": [
            {
                "english": "This function takes three parameters.",
                "japanese": "この関数は3つのパラメータを受け取ります。"
            },
            {
                "english": "The second parameter is optional.",
                "japanese": "2番目のパラメータはオプション（任意）です。"
            }
        ]
    },
    {
        "id": 45,
        "word": "argument",
        "japanese": "引数（ひきすう）",
        "romaji": "hikisuu",
        "meaning_en": "the actual value or data passed into a function when calling it",
        "examples": [
            {
                "english": "Pass the string as an argument to the log method.",
                "japanese": "文字列を引数としてlogメソッドに渡してください。"
            },
            {
                "english": "The function received an invalid argument.",
                "japanese": "関数が無効な引数を受け取りました。"
            }
        ]
    },
    {
        "id": 46,
        "word": "variable",
        "japanese": "変数",
        "romaji": "hensuu",
        "meaning_en": "a named storage location in memory used to hold data values that can change",
        "examples": [
            {
                "english": "We defined a variable to keep track of scores.",
                "japanese": "スコアを記録するために変数を定義しました。"
            },
            {
                "english": "Make sure to declare your variables before using them.",
                "japanese": "変数を使用する前に必ず宣言してください。"
            }
        ]
    },
    {
        "id": 47,
        "word": "constant",
        "japanese": "定数",
        "romaji": "teisuu",
        "meaning_en": "a named storage location holding data that cannot be altered during program execution",
        "examples": [
            {
                "english": "The value of a constant cannot be reassigned.",
                "japanese": "定数の値を再代入することはできません。"
            },
            {
                "english": "We use a constant to store the API key.",
                "japanese": "APIキーを保存するために定数を使用します。"
            }
        ]
    },
    {
        "id": 48,
        "word": "function",
        "japanese": "関数",
        "romaji": "kansuu",
        "meaning_en": "a block of organized, reusable code used to perform a specific action",
        "examples": [
            {
                "english": "This function calculates the average calculation.",
                "japanese": "この関数は平均の計算を行います。"
            },
            {
                "english": "You can call a function anywhere in your script.",
                "japanese": "スクリプト内のどこからでも関数を呼び出すことができます。"
            }
        ]
    },
    {
        "id": 49,
        "word": "method",
        "japanese": "メソッド",
        "romaji": "mesoddo",
        "meaning_en": "a function that belongs to a specific object or class",
        "examples": [
            {
                "english": "The array object has a custom sort method.",
                "japanese": "配列オブジェクトにはカスタムのソートメソッドがあります。"
            },
            {
                "english": "We invoked the login method.",
                "japanese": "ログインメソッドを呼び出しました。"
            }
        ]
    },
    {
        "id": 50,
        "word": "object",
        "japanese": "オブジェクト",
        "romaji": "obujekto",
        "meaning_en": "a standalone entity in code containing properties and methods",
        "examples": [
            {
                "english": "The JSON data is converted into a JavaScript object.",
                "japanese": "JSONデータはJavaScriptオブジェクトに変換されます。"
            },
            {
                "english": "An object can group related variables together.",
                "japanese": "オブジェクトを使うと、関連する変数をグループ化できます。"
            }
        ]
    },
    {
        "id": 51,
        "word": "array",
        "japanese": "配列",
        "romaji": "hairetsu",
        "meaning_en": "a structured collection used to store multiple values in a single variable",
        "examples": [
            {
                "english": "We created an array to hold the list of names.",
                "japanese": "名前のリストを保持するための配列を作成しました。"
            },
            {
                "english": "Arrays in JavaScript use zero-based indexing.",
                "japanese": "JavaScriptの配列は0から始まるインデックスを使用します。"
            }
        ]
    },
    {
        "id": 52,
        "word": "string",
        "japanese": "文字列",
        "romaji": "mojiretsu",
        "meaning_en": "a sequence of alphanumeric characters used to represent text in coding",
        "examples": [
            {
                "english": "The text field returns user input as a string.",
                "japanese": "テキストフィールドはユーザーの入力を文字列として返します。"
            },
            {
                "english": "You can join two strings together using concatenation.",
                "japanese": "結合を使うことで2つの文字列をつなげることができます。"
            }
        ]
    },
    {
        "id": 53,
        "word": "boolean",
        "japanese": "真偽値（ブーリアン）",
        "romaji": "shingichi",
        "meaning_en": "a data type that can only hold one of two values: true or false",
        "examples": [
            {
                "english": "The flag evaluates to a boolean value.",
                "japanese": "そのフラグは真偽値として評価されます。"
            },
            {
                "english": "IsLoggedIn is a boolean variable.",
                "japanese": "IsLoggedInはブーリアン（真偽値）変数です。"
            }
        ]
    },
    {
        "id": 54,
        "word": "loop",
        "japanese": "ループ（繰り返し処理）",
        "romaji": "ruupu",
        "meaning_en": "a code structure that repeats a sequence of instructions until a condition is met",
        "examples": [
            {
                "english": "We used a for-loop to iterate through the list items.",
                "japanese": "リストの項目をループ処理するためにfor文を使用しました。"
            },
            {
                "english": "Be careful not to write an infinite loop.",
                "japanese": "無限ループを書かないように注意してください。"
            }
        ]
    },
    {
        "id": 55,
        "word": "condition",
        "japanese": "条件",
        "romaji": "jouken",
        "meaning_en": "a statement or logical expression that must evaluate to true or false to steer flow",
        "examples": [
            {
                "english": "The if-statement checks if the condition matches.",
                "japanese": "if文は条件が一致するかどうかをチェックします。"
            },
            {
                "english": "The program behaves differently based on this condition.",
                "japanese": "プログラムはこの条件に基づいて異なる挙動をします。"
            }
        ]
    },
    {
        "id": 56,
        "word": "scope",
        "japanese": "スコープ（有効範囲）",
        "romaji": "sukoopu",
        "meaning_en": "the region or context of a program where a declared variable is accessible",
        "examples": [
            {
                "english": "Variables declared inside a function have local scope.",
                "japanese": "関数内で宣言された変数はローカルスコープを持ちます。"
            },
            {
                "english": "Global scope variables can be accessed from anywhere.",
                "japanese": "グローバルスコープの変数にはどこからでもアクセスできます。"
            }
        ]
    },
    {
        "id": 57,
        "word": "element",
        "japanese": "要素（エレメント）",
        "romaji": "youso",
        "meaning_en": "an individual component part of a webpage DOM structure or array",
        "examples": [
            {
                "english": "We selected the DOM element using its ID attribute.",
                "japanese": "ID属性を使用してDOM要素を選択しました。"
            },
            {
                "english": "You can add classes to an element using jQuery.",
                "japanese": "jQueryを使うと要素にクラスを追加できます。"
            }
        ]
    },
    {
        "id": 58,
        "word": "attribute",
        "japanese": "属性",
        "romaji": "zokusei",
        "meaning_en": "additional values or characteristics that configure an HTML element",
        "examples": [
            {
                "english": "The image tag requires a source attribute.",
                "japanese": "画像タグにはソース（src）属性が必要です。"
            },
            {
                "english": "We dynamically updated the href attribute.",
                "japanese": "href属性を動的に更新しました。"
            }
        ]
    },
    {
        "id": 59,
        "word": "selector",
        "japanese": "セレクター",
        "romaji": "serekutaa",
        "meaning_en": "a string pattern used to target and choose HTML elements for styling or actions",
        "examples": [
            {
                "english": "The CSS selector applies styles to all list entries.",
                "japanese": "そのCSSセレクターはすべてのリスト項目にスタイルを適用します。"
            },
            {
                "english": "We used a class selector in jQuery to select the buttons.",
                "japanese": "ボタンを選択するためにjQueryでクラスセレクターを使用しました。"
            }
        ]
    },
    {
        "id": 60,
        "word": "event",
        "japanese": "イベント",
        "romaji": "ibento",
        "meaning_en": "an action or occurrence detected by a program, like a mouse click or key press",
        "examples": [
            {
                "english": "The click event triggers a flashcard flip animation.",
                "japanese": "クリックイベントが単語カードの反転アニメーションを作動させます。"
            },
            {
                "english": "We need to prevent the default submit event behavior.",
                "japanese": "通常の送信イベントの挙動を防ぐ必要があります。"
            }
        ]
    },
    {
        "id": 61,
        "word": "listener",
        "japanese": "リスナー（イベント待機処理）",
        "romaji": "risunaa",
        "meaning_en": "a procedure in JavaScript that waits for an event to occur before firing code",
        "examples": [
            {
                "english": "We attached an event listener to the reset button.",
                "japanese": "リセットボタンにイベントリスナーを設定しました。"
            },
            {
                "english": "Removing unused listeners improves application memory consumption.",
                "japanese": "未使用のリスナーを削除すると、アプリケーションのメモリ消費が改善されます。"
            }
        ]
    },
    {
        "id": 62,
        "word": "production",
        "japanese": "本番環境",
        "romaji": "honban kankyou",
        "meaning_en": "the live server environment where real users interact with the finalized app",
        "examples": [
            {
                "english": "Do not test experimental updates directly in production.",
                "japanese": "実験的なアップデートを本番環境で直接テストしないでください。"
            },
            {
                "english": "The bug was only visible in the production environment.",
                "japanese": "そのバグは本番環境でのみ発生していました。"
            }
        ]
    },
    {
        "id": 63,
        "word": "staging",
        "japanese": "ステージング環境（検証環境）",
        "romaji": "suteejingu kankyou",
        "meaning_en": "a mirror environment of production used to test code completely before release",
        "examples": [
            {
                "english": "We deployed the branch to staging for final review.",
                "japanese": "最終確認のためにブランチをステージング環境にデプロイしました。"
            },
            {
                "english": "The staging server data mimics live user metrics.",
                "japanese": "ステージングサーバーのデータは、実際の本番データを模しています。"
            }
        ]
    },
    {
        "id": 64,
        "word": "terminal",
        "japanese": "ターミナル",
        "romaji": "taaminaru",
        "meaning_en": "a text-based interface used to execute console commands directly to the computer core",
        "examples": [
            {
                "english": "Open your terminal and run the installation script.",
                "japanese": "ターミナルを開き、インストール用スクリプトを実行してください。"
            },
            {
                "english": "I prefer using terminal shortcuts for code setup tasks.",
                "japanese": "コードのセットアップ作業には、ターミナルのショートカットを使うのが好きです。"
            }
        ]
    },
    {
        "id": 65,
        "word": "command",
        "japanese": "コマンド（命令）",
        "romaji": "komando",
        "meaning_en": "an instruction given by a user to a computer shell system interpreter",
        "examples": [
            {
                "english": "Type this command to check your current Git version status.",
                "japanese": "現在のGitのバージョン状態を確認するには、このコマンドを入力します。"
            },
            {
                "english": "The terminal returned an unknown command system error prompt.",
                "japanese": "ターミナルが「不明なコマンド」というシステムエラープロンプトを返しました。"
            }
        ]
    },
    {
        "id": 66,
        "word": "script",
        "japanese": "スクリプト",
        "romaji": "sukuriputo",
        "meaning_en": "a program or sequence of instructions carried out by another interpreter engine",
        "examples": [
            {
                "english": "This shell script automates our system backup tasks daily.",
                "japanese": "このシェルスクリプトは、日々のシステムバックアップ作業を自動化します。"
            },
            {
                "english": "The webpage loads a script element containing application assets.",
                "japanese": "ウェブページは、アプリのアセットを含むスクリプト要素を読み込みます。"
            }
        ]
    },
    {
        "id": 67,
        "word": "query",
        "japanese": "クエリ（問い合わせ）",
        "romaji": "kueri",
        "meaning_en": "a request for specific information fetched directly from a database system",
        "examples": [
            {
                "english": "An unoptimized query can slow down system responses dramatically.",
                "japanese": "最適化されていないクエリは、システム応答を著しく低下させる可能性があります。"
            },
            {
                "english": "We write custom SQL queries to extract monthly metrics.",
                "japanese": "月次指標を抽出するためにカスタムSQLクエリを作成します。"
            }
        ]
    },
    {
        "id": 68,
        "word": "index",
        "japanese": "インデックス（索引）",
        "romaji": "indekkusu",
        "meaning_en": "an optimization marker layout that accelerates dataset pointer query speeds",
        "examples": [
            {
                "english": "Adding an index to the email column makes profile lookups faster.",
                "japanese": "email列にインデックスを追加すると、プロフィール検索が速くなります。"
            },
            {
                "english": "The lookup query failed because the index was corrupted.",
                "japanese": "インデックスが破損していたため、検索クエリが失敗しました。"
            }
        ]
    },
    {
        "id": 69,
        "word": "token",
        "japanese": "トークン",
        "romaji": "tookun",
        "meaning_en": "an encrypted string object utilized to validate verified session security identities",
        "examples": [
            {
                "english": "The server issues a secure token after a user logs in.",
                "japanese": "ユーザーがログインすると、サーバーは安全なトークンを発行します。"
            },
            {
                "english": "An expired auth token will result in access denied statuses.",
                "japanese": "認証トークンの期限が切れると、アクセス拒否ステータスになります。"
            }
        ]
    },
    {
        "id": 70,
        "word": "session",
        "japanese": "セッション",
        "romaji": "sesshon",
        "meaning_en": "the duration of a continuous interactive connection cycle on a website server",
        "examples": [
            {
                "english": "The user session automatically expires after thirty minutes of inactivity.",
                "japanese": "ユーザーセッションは、30分間操作がないと自動的に終了します。"
            },
            {
                "english": "We clear the storage values once the current session ends.",
                "japanese": "現在のセッションが終了すると、ストレージの値をクリアします。"
            }
        ]
    }
]