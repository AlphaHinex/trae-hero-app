import { Browser } from '@capacitor/browser';

// 通用打开浏览器方法
window.openBrowser = async function(url) {
  try {
    await Browser.open({
      url: url,
      presentationStyle: 'fullscreen'
    });
  } catch (error) {
    console.error('Error opening browser:', error);
  }
};

// 也可以添加一个按钮来手动打开（可选）
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 20px;">
      <h1>Good Good Study, <br> Day Day Up!</h1>
      <div style="margin-top: 30px;">
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/')" style="padding: 15px 20px; font-size: 16px; margin-top: 10px;">
          发粪涂墙
        </button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; width: 100%; max-width: 600px;">
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/chinese')" style="padding: 15px 10px; font-size: 16px;">语文分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/math')" style="padding: 15px 10px; font-size: 16px;">数学分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/english')" style="padding: 15px 10px; font-size: 16px;">英语分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/history')" style="padding: 15px 10px; font-size: 16px;">历史分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/geography')" style="padding: 15px 10px; font-size: 16px;">地理分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/politics')" style="padding: 15px 10px; font-size: 16px;">政治分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/biology')" style="padding: 15px 10px; font-size: 16px;">生物分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/physics')" style="padding: 15px 10px; font-size: 16px;">物理分墙</button>
        <button onclick="window.openBrowser('https://alphahinex.github.io/habit/fftq/chemistry')" style="padding: 15px 10px; font-size: 16px;">化学分墙</button>
      </div>
      <div style="margin-top: 30px;">
        <button onclick="window.openBrowser('https://alphahinex.github.io/word-practice/')" style="padding: 15px 20px; font-size: 16px; margin-top: 10px;">
          背单词
        </button>
      </div>
    </div>
  `;
});