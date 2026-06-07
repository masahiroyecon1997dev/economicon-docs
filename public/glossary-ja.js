(function () {
  var terms = [
    {
      term: 'BLUE',
      body: 'Best Linear Unbiased Estimator の略。線形不偏推定量の中で分散が最小の推定量を指します。ガウス・マルコフの定理の文脈で使われます。'
    },
    {
      term: 'Consistency',
      body: '一致性。標本サイズが大きくなるほど、推定量が真の母数へ確率的に近づく性質です。'
    },
    {
      term: 'Endogeneity',
      body: '内生性。説明変数と誤差項が相関してしまう問題で、OLS 推定量が偏る原因になります。'
    },
    {
      term: 'GMM',
      body: 'Generalized Method of Moments（一般化モーメント法）。モーメント条件を用いて推定する手法です。'
    },
    {
      term: 'Heteroskedasticity',
      body: '不均一分散。誤差項の分散が一定でない状態です。標準誤差の推定に影響します。'
    },
    {
      term: 'IV',
      body: 'Instrumental Variables（操作変数法）。内生性があるときに、外生的な操作変数を使って因果効果を推定します。'
    },
    {
      term: 'OLS',
      body: 'Ordinary Least Squares（通常最小二乗法）。残差平方和を最小化する回帰推定の基本手法です。'
    },
    {
      term: 'R^2',
      body: '決定係数。回帰モデルが被説明変数の変動をどれだけ説明できたかを表す指標です。'
    },
    {
      term: 'Unbiasedness',
      body: '不偏性。推定量の期待値が真の母数と一致する性質です。'
    },
    {
      term: 'Variance Inflation Factor',
      body: 'VIF。多重共線性の強さを評価する指標で、値が大きいほど共線性が強いことを示します。'
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
        return '<li><h3>' + escapeHtml(item.term) + '</h3><p>' + escapeHtml(item.body) + '</p></li>';
      })
      .join('');
  };

  input.addEventListener('input', render);
  render();
})();
