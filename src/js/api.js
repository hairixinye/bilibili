// 使用 CORS 代理
const PROXY = 'https://api.allorigins.win/get?url='
const API_URL = encodeURIComponent('https://api.bilibili.com/x/web-interface/ranking/v2')

export async function getVideos() {
  const response = await fetch(`${PROXY}${API_URL}`)
  const data = await response.json()
  return JSON.parse(data.contents).data.list
}
