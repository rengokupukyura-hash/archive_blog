const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const nohit = params.get("nohit");
const snsPartial = params.get("sns_partial");

const message = document.getElementById("message");

/* ======================
   ① SNSキーワード片割れ
   ====================== */
if (query && snsPartial === "1") {
  message.innerHTML = `
    <p>
      「${query}」に一致する記録は見つかりませんでした。<br>
      キーワードの組み合わせを変えて検索することで、<br>
      記事が見つかる場合があります。
    </p>
    <p class="note">
      当サイトの検索エンジンの仕様上、<br>
      3つ以上のキーワードで見つかる記事はありません。
    </p>
    <p><a href="index.html">← ブログ一覧に戻る</a></p>
  `;
}

/* ======================
   ② 完全にヒットなし
   ====================== */
else if (query && nohit === "1") {
  message.innerHTML = `
    <p>
      「${query}」に一致する記録は見つかりませんでした。
    </p>
    <p><a href="index.html">← ブログ一覧に戻る</a></p>
  `;
}

/* ======================
   ③ 通常検索 → log.html
   ====================== */
else if (query) {
  location.href = `log.html?q=${encodeURIComponent(query)}`;
}

/* ======================
   ④ 検索語なし
   ====================== */
else {
  message.innerHTML = `
    <p>検索キーワードが入力されていません。</p>
    <p><a href="index.html">← ブログ一覧に戻る</a></p>
  `;
}
