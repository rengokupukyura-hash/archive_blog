(function () {
  const params = new URLSearchParams(window.location.search);
  let query = params.get("q");
  if (!query) return;

  query = query.trim();

  // 半角・全角スペース対応
  const words = query.split(/[ 　]+/);

  const results = {
    himari:     document.getElementById("result-himari"),
    maehara:   document.getElementById("result-maehara"),
    osoroi:    document.getElementById("result-osoroi"),
    proto:     document.getElementById("result-proto"),
    hayasaka:  document.getElementById("result-hayasaka"),
    groupwork: document.getElementById("result-groupwork"),
    sns:       document.getElementById("result-sns"),
    shiro:     document.getElementById("result-shiro"),
    mitemoraeteru: document.getElementById("result-mitemoraeteru"),
  };

  // 全部隠す
  Object.values(results).forEach(el => {
    if (el) el.classList.add("hidden");
  });

  let hit = false;

  const hasHimatter = words.includes("Himatter");
  const hasId = words.includes("himawari-1020");

  /* ======================
     ① SNS裏記事（2ワード完全一致）
     ====================== */
  if (words.length === 2 && hasHimatter && hasId) {
    results.sns.classList.remove("hidden");
    hit = true;
  }

  /* ======================
     ② 通常1ワード検索
     ====================== */
  if (!hit) {
    const q = query.replace(/[ 　]+/g, "");

    if (q === "向日葵ひまり") {
      results.himari.classList.remove("hidden");
      hit = true;

    } else if (q === "前原美咲") {
      results.osoroi.classList.remove("hidden");
      hit = true;

    } else if (q === "前原") {
      results.maehara.classList.remove("hidden");
      hit = true;

    } else if (q === "プロトくん") {
      results.proto.classList.remove("hidden");
      hit = true;

    } else if (q === "早坂あかり") {
      results.hayasaka.classList.remove("hidden");
      hit = true;

    } else if (q === "グループワーク") {
      results.groupwork.classList.remove("hidden");
      hit = true;

    } else if (q === "shiroさん") {
      results.shiro.classList.remove("hidden");
      hit = true;
    }

    else if (q === "見てもらえてる") {
     results.mitemoraeteru.classList.remove("hidden");
    hit = true;
  }

  }

  /* ======================
     ③ SNSキーワード片割れだけ
     ====================== */
  if (!hit && (hasHimatter ^ hasId)) {
    location.href =
      `search.html?q=${encodeURIComponent(query)}&sns_partial=1`;
    return;
  }

  /* ======================
     ④ 完全にヒットなし
     ====================== */
  if (!hit) {
    location.href =
      `search.html?q=${encodeURIComponent(query)}&nohit=1`;
  }
})();
