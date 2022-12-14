# unko
自動bumpツールとか<br>
DISBOARDやディス速やDicoAllのBUMP(UP)を自動化します<br>

## 準備
まずは`npm install discord.js-selfbot-v13`して、セルボパッケージを入れる<br>
次に、それぞれのスクリプトファイルを開き、ChannelIDをセルボを実行するチャンネルのID(通知がやばいのでプライベートチャンネルにすることをおすすめ)、トークン(ユーザーのもの)を入れます<br>

## Crontab
定期実行するためにCrontabを設定しましょう<br>
Crontabの例<br>
DISSBOARD `00 0-23/2 * * * node bump.js`<br>
ディス速 `00 0-23/1 * * * node dissokuup.js`<br>
DicoAll `00 0-23/1 * * * node up.js`<br>
ちなみにこの方法だと、一秒単位でずれてBUMPに失敗することがあるので、スクリプト内で1時間経ったらbumpのように実装しようと思っています<br>
でも私はNodeJSに疎いので、これからも開発するつもりはありません。<br>
一応MIT Licenseなので、待ちきれない人は勝手にフォークして勝手に改造してください。<br>
