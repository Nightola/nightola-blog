export async function onRequest(context) {
  const workerUrl = "https://vocaloid-api.925857461.workers.dev/";
  
  // 在 Cloudflare 内部发起请求，绕过公网域名限制
  const response = await fetch(workerUrl, {
    method: context.request.method,
    headers: context.request.headers,
  });

  // 返回 Worker 的结果
  return response;
}
