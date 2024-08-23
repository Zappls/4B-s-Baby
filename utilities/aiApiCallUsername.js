


export async function aiApiCallUsername(userContent, sysContent) {
  const url = "http://localhost:3001/";
  const [adj1, adj2, noun] = userContent
  const urlPara = `${url}apiCallUsername?adj1=${encodeURIComponent(
  adj1
)}&adj2=${encodeURIComponent(adj2)}&noun=${encodeURIComponent(
  noun
)}&sysContent=${encodeURIComponent(sysContent)}`;

  try {
    const response = await fetch(urlPara);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit exceeded. No body returned.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    let result = await response.text();
    return result

  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}