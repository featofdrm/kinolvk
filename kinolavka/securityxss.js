// Экранирование HTML-символов
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('commentInput').value;
    const safeOutput = escapeHtml(userInput); // Экранирование
  
    // Безопасный вывод через textContent (альтернатива)
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = safeOutput; // textContent вместо innerHTML
    
    document.getElementById('commentsList').appendChild(commentElement);
    document.getElementById('commentInput').value = '';
  });