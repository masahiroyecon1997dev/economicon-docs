(function () {
  var terms = [
    {
      term: 'GMM（Generalized Method of Moments）',
      body: 'モーメント条件を用いて推定する手法です。'
    },
    {
      term: '一致性（consistency）',
      body: '標本サイズが大きくなるほど、推定量が真の母数へ確率的に近づく性質です。'
    },
    {
      term: '決定係数（R-squared: R<sup>2</sup>）',
      body: '回帰モデルが被説明変数の変動をどれだけ説明できたかを表す指標です。'
    },
    {
      term: '最小二乗法（Ordinary Least Squares: OLS）',
      body: '残差平方和を最小化する回帰推定の基本手法です。'
    },
    {
      term: '最小分散線形不偏推定量（best linear unbiased estimator: BLUE）',
      body: '線形不偏推定量の中で分散が最小の推定量を指します。ガウス・マルコフの定理の文脈で使われます。'
    },
    {
      term: '操作変数法（Instrumental Variables: IV）',
      body: '内生性があるときに、外生的な操作変数を使って因果効果を推定します。'
    },
    {
      term: '内生性（endogeneity）',
      body: '説明変数と誤差項が相関してしまう問題で、OLS 推定量が偏る原因になります。'
    },
    {
      term: '不均一分散（Heteroskedasticity）',
      body: '誤差項の分散が一定でない状態です。標準誤差の推定に影響します。'
    },
    {
      term: '不偏性（Unbiasedness）',
      body: '推定量の期待値が真の母数と一致する性質です。'
    }
  ];

  terms.sort(function (a, b) {
    return a.term.localeCompare(b.term, 'en');
  });

  var input = document.getElementById('glossary-query');
  var list = document.getElementById('glossary-list');
  var count = document.getElementById('glossary-count');

  if (!input || !list || !count) {
    return;
  }

  var escapeHtml = function (value) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  var render = function () {
    var q = input.value.trim().toLowerCase();
    var filtered = terms.filter(function (item) {
      return (item.term + ' ' + item.body).toLowerCase().indexOf(q) !== -1;
    });

    count.textContent = filtered.length + ' 件';

    list.innerHTML = filtered
      .map(function (item) {
        return '<li><h4>' + item.term + '</h4><p>' + item.body + '</p></li>';
      })
      .join('');
  };

  input.addEventListener('input', render);
  render();
})();
