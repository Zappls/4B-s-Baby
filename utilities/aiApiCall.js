import { passwordEncoder } from "../scripts/encoder.js";


export async function aiApiCall(userContent,
    sysContent) {
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/";
  const [encodedPwd, key] = passwordEncoder(userContent);
  const content = sysContent;
  const urlPara = `${baseUrl}apiCall?pwd=${encodedPwd}&key=${key}&sysContent=${content}`;

  try {
    const response = await fetch(urlPara);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn('Rate limit exceeded. No body returned.');
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    let result =  await response.text();

    let formattedResult = result
    .split('. ')
    .map(sentence => `<p>${sentence.trim()}.</p>`) 
    .join('');

    return formattedResult;

  } catch (error) {
    console.error('Fetch error:', error);
    throw error; 
  }
}

