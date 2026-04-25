const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx974zdf1RAyxgTIlMtkR0bQuk3LReIfAW3cQ4XZPB-KcF13i6qilJvACz51I12eANC/exec";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: event.body,
      redirect: "follow",
    });

    const text = await response.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
}
