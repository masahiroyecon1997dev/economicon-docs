# Economicon — 計量経済分析デスクトップアプリ

> **Econometric Analysis Desktop App for Everyone**

[![Version](https://img.shields.io/badge/version-0.3.0-blue)](https://github.com/masahiroyecon1997dev/Economicon/releases)
[![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)](https://github.com/masahiroyecon1997dev/Economicon/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](../LICENSE)
[![Status](https://img.shields.io/badge/status-Pre--release-orange)](https://github.com/masahiroyecon1997dev/Economicon/releases)

---

# <!-- SCREENSHOT PLACEHOLDER

ここにアプリのメインスクリーンショットを配置
推奨サイズ: 1280×720 以上, PNG または WebP
例: ![Economiconメイン画面](./assets/screenshot-main.png)
====================================================== -->

---

## 概要 / Overview

### 日本語

**「計量経済学を、もっと身近に、直感的に。」**

Economiconは、計量経済学の初学者・学部生・大学院生・研究者が、**コードを書かずに GUI 操作だけ**でデータの性質や分析の傾向を素早く確認できるスタンドアロン型デスクトップアプリケーションです。

データの読み込みから高度な統計推定（固定効果・操作変数法・DID・RDD など）まで、すべてクリック操作で完結。分析結果はラベル付きで明瞭に表示され、Markdown・LaTeX 形式でそのままコピーして論文やレポートに貼り付けることができます。

### English

**"Making Econometrics More Accessible and Intuitive."**

Economicon is a standalone desktop application that allows students, researchers, and practitioners to quickly explore data and run econometric analyses — **entirely through a GUI, no coding required**.

From data import to advanced estimation (fixed effects, IV, DID, RDD, etc.), everything is just a few clicks away. Results are displayed with labeled coefficients, standard errors, t-statistics, p-values, and confidence intervals — and can be copied directly in Markdown or LaTeX format.

---

## 対象ユーザー / Target Users

| 日本語                                      | English                                                                |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| 計量経済学を学び始めた学部生                | Undergraduates learning econometrics                                   |
| 卒論・修論でデータ分析を行う大学院生        | Graduate students running analyses for their thesis                    |
| 素早くデータを探索したい実務研究者          | Practitioners who need rapid data exploration                          |
| R や Stata の前に手法を直感的に理解したい方 | Anyone who wants an intuitive grasp of methods before diving into code |

---

## 主要機能 / Key Features

### 📥 データ入出力 / Data I/O

- **対応形式**: CSV / Excel / Parquet のインポート・エクスポート
- **日本語対応**: 日本語ファイル名・列名・文字コード (Shift-JIS, UTF-8 等) に対応

<!-- SCREENSHOT PLACEHOLDER
  ここにデータインポート画面のスクリーンショットを配置
  例: ![データインポート](./assets/screenshot-import.png)
-->

---

### 🗂️ データマネジメント / Data Management

- テーブルの名前変更・複製・削除
- **不変性設計**: 操作は常に新テーブルとして保存。元データを上書きしない
- 複数テーブルを同時管理し、処理の再現性を担保

---

### 🛠️ データ加工 / Data Wrangling

- **Join / Union**: 複数テーブルの結合・連結
- **変数計算**: 数式を使って新しい列を生成
- **ラグ・リード列**: パネルデータ分析用のタイムラグ変数を生成
- **フィルタリング**: 列メニューから条件を指定してデータを絞り込み
- **列移動**: ドラッグ＆ドロップで列を並び替え

---

### 📊 統計解析 / Statistical Analysis

- **基本統計量**: 平均・中央値・分散・標準偏差・歪度・尖度・null 数 など
- **相関行列**: 変数間の相関係数を一覧表示

<!-- SCREENSHOT PLACEHOLDER
  ここに統計量表示画面のスクリーンショットを配置
  例: ![統計量](./assets/screenshot-statistics.png)
-->

---

### 📈 推定モデル / Estimation Models

すべての推定結果は **係数・標準誤差・t 値・p 値・信頼区間** をセットで表示します。

All estimation results display **coefficients, standard errors, t-statistics, p-values, and confidence intervals** together.

| モデル             | 内容                                                  |
| ------------------ | ----------------------------------------------------- |
| OLS / WLS / GLS    | 通常最小二乗法・加重最小二乗法・一般最小二乗法        |
| ロバスト標準誤差   | HC0–HC3, クラスター標準誤差                           |
| 固定効果モデル     | Within 推定量（パネルデータ）                         |
| 変量効果モデル     | GLS 推定量（パネルデータ）                            |
| 2SLS / GMM-IV      | 操作変数法・一般化モーメント法                        |
| DID                | 差分の差分法（Difference-in-Differences）             |
| RDD                | 回帰不連続デザイン（Regression Discontinuity Design） |
| Heckman 選択モデル | サンプルセレクションバイアスの補正                    |

<!-- SCREENSHOT PLACEHOLDER
  ここに回帰分析結果画面のスクリーンショットを配置
  例: ![回帰分析結果](./assets/screenshot-regression.png)
-->

---

### 📋 結果のコピー / Copy Results

回帰分析の結果を以下の形式でクリップボードにコピーできます。

| 形式     | 用途                   |
| -------- | ---------------------- |
| テキスト | メモ・メール           |
| Markdown | GitHub / Notion / Zenn |
| LaTeX    | 学術論文・レポート     |

---

### ⚙️ システム設定 / System Settings

- **テーマ**: ダークモード / ライトモードの切り替え
- **言語**: 日本語 / English の切り替え
- **文字コード**: Shift-JIS, UTF-8, CP932 など日本語環境向け設定

---

### 🎲 シミュレーション / Simulation

- 統計モデル検証用のサンプルデータを自動生成
- シード値の手動指定で結果を再現可能

---

# <!-- FUTURE SECTION PLACEHOLDER

## 📽️ デモ動画 / Demo Video

ここにデモ動画（YouTube embed または GIF）を配置予定

---

## 📚 統計・計量経済学用語集 / Glossary

OLS, 固定効果, DID, RDD などの用語解説セクションを配置予定
====================================================== -->

---

## インストール方法 / Installation

> **現在は Windows 専用です。** macOS / Linux 対応は予定されていません（[FAQ 参照](#faq)）。

### 手順 / Steps

1. **ダウンロード**
   [Releases ページ](https://github.com/masahiroyecon1997dev/Economicon/releases) から最新の `Economicon_x.x.x_x64-setup.exe` をダウンロードしてください。

2. **インストーラーを実行**
   ダウンロードした `.exe` ファイルをダブルクリックして実行します。

   > ⚠️ **Windows による保護について**
   > 本アプリは現在デジタル署名を行っていないため、SmartScreen による警告が表示される場合があります。
   > その場合は「詳細情報」→「実行」を選択してください。
   > スマートアプリコントロール（SAC）が有効な環境では、SAC をオフにする必要があります。

3. **WebView2 ランタイム（初回のみ）**
   Microsoft Edge WebView2 が未インストールの場合、初回起動時に自動でダウンロード・インストールされます（インターネット接続が必要です）。

### アンインストール / Uninstall

「設定 > アプリ > インストールされているアプリ」から `Economicon` を選択してアンインストールしてください。

設定ファイル等を完全に削除する場合は、以下のディレクトリを手動で削除してください。

```
%LOCALAPPDATA%\economicon   ← ログファイル等
%APPDATA%\economicon        ← ユーザー設定ファイル等
```

---

## テクノロジースタック / Technology Stack

```
Economicon
├── Frontend  — React 19 + TypeScript
│               Tauri 2 (Rust-based desktop runtime)
│               Vite 7 / Tailwind CSS 4 / Radix UI
│               Zustand (state) / react-i18next (i18n)
│               TanStack Table / Virtual
│
└── Backend   — FastAPI + Python
                statsmodels  (OLS / WLS / GLS / robust SE)
                linearmodels (fixed effects / RE / 2SLS / GMM-IV)
                scipy        (statistical tests)
                polars       (high-speed in-memory data processing)
                numpy        (numerical computing)
```

### 数値照合テスト / Numerical Verification

主要モデルの推定結果は、標準ベンチマークデータセット（Grunfeld 等）を用いて R（`plm`, `fixest`）と数値照合を行い、$10^{-8}$ 以下の誤差での一致を確認しています。

Key model outputs have been verified against R (`plm`, `fixest`) using standard benchmark datasets (e.g., Grunfeld), with differences below $10^{-8}$.

---

## FAQ

> 今後 FAQ が増えることを想定した設計になっています。
> ご質問は [GitHub Issues](https://github.com/masahiroyecon1997dev/Economicon/issues) でどうぞ。

---

### Q. 無料で使えますか？ / Is it free?

**A.** はい、MIT ライセンスのもと**完全無料**で提供しています。商用・学術目的を問わず利用できます。

**A.** Yes, Economicon is **completely free** under the MIT License, for both commercial and academic use.

---

### Q. Mac や Linux で動きますか？ / Does it run on macOS or Linux?

**A.** 現時点では **Windows 専用**です。macOS / Linux への対応は現在予定されていません。

**A.** Currently **Windows only**. macOS and Linux support is not planned at this time.

---

### Q. インターネット接続は必要ですか？ / Is an internet connection required?

**A.** 通常の使用では不要です。ただし初回起動時に Microsoft Edge WebView2 ランタイムのインストールが必要な場合、一時的にインターネット接続が必要になります。

**A.** No internet connection is required for normal use. An internet connection may be needed only during first launch if WebView2 runtime is not yet installed.

---

### Q. データはどこに保存されますか？プライバシーは大丈夫ですか？ / Where is my data stored?

**A.** すべてのデータはお使いの **PC 内のメモリ上**でのみ処理されます。外部サーバーへのデータ送信は一切行いません。アプリを閉じるとメモリ上のデータは消去されます（保存した場合はローカルファイルに残ります）。

**A.** All data is processed **locally in memory** on your PC. No data is ever sent to external servers. Data in memory is cleared when you close the app (unless explicitly saved to a local file).

---

### Q. R や Stata と結果が違う場合はどうすればいいですか？ / What if results differ from R or Stata?

**A.** 主要モデルは R との数値照合テストを実施していますが、エッジケースで差異が生じる可能性があります。[GitHub Issue](https://github.com/masahiroyecon1997dev/Economicon/issues) でデータと設定を添えてご報告ください。

また、学位論文・学術論文など厳密な研究での利用時は、R（`plm`, `fixest`）や Stata 等の標準ツールで結果を再確認することを**強く推奨します**。

**A.** Major models have been verified against R, but edge cases may produce differences. Please report via [GitHub Issue](https://github.com/masahiroyecon1997dev/Economicon/issues) with your data and settings.

For academic papers and dissertations, we **strongly recommend** cross-checking results with R (`plm`, `fixest`) or Stata.

---

### Q. どのくらいのデータサイズまで扱えますか？ / What data sizes are supported?

**A.** データはインメモリで処理されるため、上限はお使いの PC の RAM に依存します。高速な Polars エンジンを採用しているため、数百万行規模のデータも実用的に扱えます。

**A.** Data is processed in memory, so the limit depends on your PC's RAM. Thanks to the high-performance Polars engine, datasets with millions of rows are handled efficiently in practice.

---

### Q. 日本語ファイルは読み込めますか？ / Can I load Japanese files?

**A.** はい。日本語のファイル名・列名・セル値に対応しています。また CSV 読み込み時の文字コード（Shift-JIS, UTF-8, CP932 等）もアプリ設定から変更できます。

**A.** Yes. Japanese file names, column names, and cell values are fully supported. The file encoding (Shift-JIS, UTF-8, CP932, etc.) can be configured in the app settings.

---

## 免責事項 / Disclaimer

> **本ツールは「学習」および「迅速なデータ探索」を目的としています。**

- **MIT ライセンス**: 計算結果の正確性に関するいかなる保証もありません。
- **自己責任の原則**: 本ツールの出力結果に基づく判断は、すべて利用者自身の責任において行ってください。
- **厳密な研究への利用**: 学位論文・学術論文・重要な意思決定に使用する場合は、必ず R / Stata 等の標準ツールで結果を再確認してください。
- **検証範囲の限界**: 主要モデルは R との照合テストを実施していますが、すべてのエッジケースを網羅しているわけではありません。

> **This tool is intended for learning and rapid data exploration purposes.**

- **MIT License**: No warranty is provided for the accuracy of calculation results.
- **Use at your own risk**: All decisions based on the tool's output are solely the user's responsibility.
- **For rigorous research**: Always cross-check with R, Stata, or other standard tools before using results in academic publications.

ライセンス全文: [LICENSE](../LICENSE)

---

## 貢献・フィードバック / Contributing & Feedback

> プルリクエスト（PR）は受け付けていません。コードの整合性とセキュリティを維持するため、変更はすべてメンテナーが管理します。

- **バグ報告**: [GitHub Issues](https://github.com/masahiroyecon1997dev/Economicon/issues)
- **機能提案**: [GitHub Issues](https://github.com/masahiroyekin1997dev/Economicon/issues)

---

## 開発者 / Developer

|                 |                                                                  |
| --------------- | ---------------------------------------------------------------- |
| **GitHub**      | [@masahiroyecon1997dev](https://github.com/masahiroyecon1997dev) |
| **Email**       | <!-- メールアドレスをここに追加してください -->                  |
| **X (Twitter)** | <!-- @ハンドル名をここに追加してください -->                     |

---

<p align="center">
  <a href="https://github.com/masahiroyecon1997dev/Economicon/releases">📥 ダウンロード / Download</a>
  ·
  <a href="https://github.com/masahiroyecon1997dev/Economicon/issues">🐛 バグ報告 / Report a Bug</a>
  ·
  <a href="https://github.com/masahiroyecon1997dev/Economicon/issues">💡 機能提案 / Request a Feature</a>
</p>
