# Light-Travel Distance Viewer for WIKISKY.ORG v1.0

## 概要

LightTravelDistanceViewerForWikisky(LTDV)は、WIKISKY.ORG の天体表示画面に天体までの距離(何億光年等)を表示する Greasemonkey スクリプトです。特に距離が確定していない遠方の銀河の距離を赤方偏移のデータから推定して表示するために使用します。

## 動作環境

- ブラウザ: Firefox 最新版
- Greasemonkey: 最新版

Chrome, Tampermonkey 等での動作は未確認です。

## インストール方法

以下の三つの .user.js ファイルをインストールします。

- wikisky.user.js
- hyperleda.user.js
- cosmocalc.user.js

Greasemonkey を有効にした状態で、ブラウザから .user.js ファイルを開くとユーザースクリプトのインストール画面が開きます。

## 操作

1. WIKISKY.ORG のマップ画面で銀河をクリックします。
2. タブが開いてクリックした天体の情報を表示する画面が表示されます。
3. ポップアップブロックの警告が出たらポップアップを許可してください。
4. 続けて二つのタブが開いて自動的に閉じます。
5. 2 の画面の銀河の名前の下に距離が表示されます。

距離は100万光年までの精度で表示しますが、赤方偏移のみからの推定値なので実際にはそこまでの精度はないと思ってください。

## 仕組み

WIKISKY.ORG の天体情報画面からPGC番号を読み取って、当該PGC天体の視線速度(v)を HyperLeda のデータベースから取得し、そこから計算した赤方偏移(z)を Ned Wright's Javascript Cosmology Calculator に与えて light travel time を計算し、それを Gly (Giga light-year) および 光年 単位で表示します。

WIKISKY.ORG の天体情報画面が銀河以外の天体の情報画面の場合(object_type=2 以外)は何もしません。HyperLeda はミラーサイトにアクセスするようにしています(本家は最近障害が発生しているため)。

Cosmology Calculator に与える宇宙論パラメータは国立天文台が一般向けに遠方天体の距離に言及する際に使用する値(H<sub>0</sub> = 67.3 km/s/Mpc、Ω<sub>m</sub> = 0.315、Ω<sub>Λ</sub> = 0.685)を使用しています。

## 光年の意味について

本スクリプトで表示される「光年」は「光路距離(light-travel time)」です。銀河から発せられた光が現在の地球に届くまで何年かかったかを基準にした距離です。10億光年と表示されていれば10億年かかって光が届いたことを意味します。

## 注意

以下の点にご注意ください。

- PGC に含まれていない銀河の距離は表示できません。
- また表示される距離はあくまで赤方偏移から推定したものなのでおおよその距離です。
- 比較的近距離の銀河に対しては精度が大きく落ちます。
- 赤方偏移とは独立に測定された距離がある場合はそちらを参照してください。

## 告知、開発状況等

VSSS に関する告知や開発状況については https://rna.hatenablog.com/archive/category/ltdv を参照してください。

## ライセンス

MIT ライセンスです。