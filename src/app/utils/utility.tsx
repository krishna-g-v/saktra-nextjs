export function cleanHTMLContent(html: string | undefined) {
  if (html === undefined) {
    return html;
  }

  return (
    html
      // Remove <a> tags and their contents
      .replace(/<[^>]+>/g, "")
      .replace(/<a\b[^>]*>.*?<\/a>/gi, "")
      // Remove &nbsp;
      .replace(/&nbsp;/g, " ")
      // Remove <p> and </p> tags but keep inner text
      .replace(/<\/?p[^>]*>/gi, "")
      // Remove <span> and </span> tags but keep inner text
      .replace(/<\/?span[^>]*>/gi, "")
      // Collapse multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
}

export async function getData(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
