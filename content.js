// 等待页面加载完成
function waitForPageLoad() {
  return new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });
}

// 创建下载按钮
function createDownloadButton(video) {
  const button = document.createElement('button');
  button.className = 'sora-download-btn';
  button.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 19H19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `;
  button.title = '下载视频';
  
  // 获取视频信息
  const videoSrc = video.src || video.currentSrc;
  const videoTitle = document.title || 'sora-video';
  
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!videoSrc) {
      alert('无法获取视频地址');
      return;
    }
    
    try {
      // 使用Chrome下载API直接下载
      if (typeof chrome !== 'undefined' && chrome.downloads) {
        // 使用Chrome下载API
        chrome.downloads.download({
          url: videoSrc,
          filename: `${videoTitle}.mp4`,
          saveAs: false
        }, (downloadId) => {
          if (chrome.runtime.lastError) {
            console.error('下载失败:', chrome.runtime.lastError);
            alert('下载失败，请重试');
          } else {
            console.log('开始下载视频:', videoSrc, '下载ID:', downloadId);
          }
        });
      } else {
        // 降级方案：使用fetch和blob
        const response = await fetch(videoSrc);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `${videoTitle}.mp4`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // 清理blob URL
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        
        console.log('开始下载视频:', videoSrc);
      }
    } catch (error) {
      console.error('下载失败:', error);
      alert('下载失败，请重试');
    }
  });
  
  return button;
}

// 添加下载按钮到视频
function addDownloadButtonToVideo(video) {
  // 检查是否已经添加了下载按钮
  if (video.parentElement.querySelector('.sora-download-btn')) {
    return;
  }
  
  // 确保视频容器有相对定位
  let container = video.parentElement;
  if (getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }
  
  // 为视频添加mouseenter事件，确保按钮显示
  video.addEventListener('mouseenter', function() {
    const btn = container.querySelector('.sora-download-btn');
    if (btn) {
      btn.classList.add('visible');
    }
  });
  
  video.addEventListener('mouseleave', function() {
    const btn = container.querySelector('.sora-download-btn');
    if (btn) {
      btn.classList.remove('visible');
    }
  });
  
  const downloadBtn = createDownloadButton(video);
  container.appendChild(downloadBtn);
}

// 查找并处理所有视频元素
function processVideos() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (video.src || video.currentSrc) {
      addDownloadButtonToVideo(video);
    }
  });
}

// 监听DOM变化，处理新添加的视频
function observeDOM() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) { // 元素节点
          if (node.tagName === 'VIDEO') {
            addDownloadButtonToVideo(node);
          } else if (node.querySelectorAll) {
            const videos = node.querySelectorAll('video');
            videos.forEach(video => addDownloadButtonToVideo(video));
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// 初始化
async function init() {
  await waitForPageLoad();
  
  // 处理现有视频
  processVideos();
  
  // 监听新视频
  observeDOM();
  
  console.log('Sora视频下载器已启动');
}

// 启动扩展
init();