import { Browser } from '@capacitor/browser';

async function openWordPracticePage() {
  try {
    await Browser.open({
      url: 'https://alphahinex.github.io/word-practice/',
      presentationStyle: 'fullscreen'
    });
  } catch (error) {
    console.error('Error opening browser:', error);
  }
}

// 应用启动时自动打开网页
window.onload = () => {
  openWordPracticePage();
};

// 也可以添加一个按钮来手动打开（可选）
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center;">
      <h1>Word Practice App</h1>
      <p>点击按钮打开单词练习页面</p>
      <button onclick="openWordPracticePage()" style="padding: 10px 20px; font-size: 16px; margin-top: 20px;">
        打开练习页面
      </button>
    </div>
  `;
});