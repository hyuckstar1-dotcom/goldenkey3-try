<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>GoldenKey App</title>
</head>
<body>
  <h1>📊 주도섹터 기록 앱</h1>

  <h3>날짜 선택</h3>
  <input type="date" id="date">

  <h3>섹터 입력</h3>
  <input type="text" id="sector" placeholder="예: 반도체">

  <h3>종목 입력</h3>
  <input type="text" id="stock" placeholder="예: 삼성전자">

  <h3>메모</h3>
  <textarea id="memo"></textarea>

  <br><br>
  <button onclick="saveData()">저장</button>

  <h3>📌 저장된 데이터</h3>
  <div id="result"></div>

  <script src="app.js"></script>
</body>
</html>
