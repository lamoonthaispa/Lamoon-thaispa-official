
export function renderEmailTemplate({ firstName, massageType, duration, slot, price, orderId }) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="max-width:600px;margin:0 auto;background-color:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <div style="background-color:#4F3921;color:#fff;padding:20px;text-align:center;">
          <h1 style="margin:0;">lamoonThaispa</h1>
        </div>
        <div style="padding:30px;color:#333;">
          <h2 style="color:#4F3921;">Bonjour, ${firstName} !</h2>
          <p>Merci d'avoir choisi les services de lamoonThaispa. Nous espérons que vous aurez une expérience relaxante et bénéfique pour votre santé.</p>
          <div style="border:1px solid #eee;border-radius:8px;padding:16px;margin-top:16px;background-color:#F6F1EA;">
            <h3 style="margin-top:0;color:#333;">Détails de la réservation</h3>
            <table style="width:100%;font-size:14px;color:#333;">
              <tbody>
                <tr><td style="padding:6px 0;width:160px;color:#666;">Numéro de commande</td><td style="padding:6px 0;"><strong>${orderId || '-'}</strong></td></tr>
                <tr><td style="padding:6px 0;color:#666;">Service</td><td style="padding:6px 0;">${massageType || '-'}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Durée</td><td style="padding:6px 0;">${duration ? `${duration} minutes` : '-'}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Date et heure</td><td style="padding:6px 0;">${slot || '-'}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Prix</td><td style="padding:6px 0;"><strong style="color:#0a7f2e;">${price ? `${price} THB` : '-'}</strong></td></tr>
              </tbody>
            </table>
          </div>
          <a href="https://your-spa-website.com" style="display:inline-block;padding:12px 24px;background-color:#4F3921;color:#fff;text-decoration:none;border-radius:5px;margin-top:10px;">Visiter le site web</a>
        </div>
        <div style="background-color:#f0f0f0;padding:15px;text-align:center;font-size:12px;color:#666;">© 2025 lamoonThaispa. All rights reserved.</div>
      </div>
    </div>
  `;
}
