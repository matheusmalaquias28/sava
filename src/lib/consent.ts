/**
 * Consentimento de cookies (LGPD) + Google Consent Mode v2.
 *
 * O padrão é tudo negado, aplicado antes de qualquer tag (ver `consentBootScript`
 * no layout). Quando GTM/GA4/Meta forem instalados, eles já respeitam a escolha:
 * - analytics  -> analytics_storage
 * - marketing  -> ad_storage, ad_user_data, ad_personalization
 * O GTM também recebe o evento `consent_update` no dataLayer.
 */

export const CONSENT_KEY = "sava-consent";
// Incrementar quando as categorias ou a política de cookies mudarem: o banner volta a aparecer.
export const CONSENT_VERSION = 1;
export const CONSENT_OPEN_EVENT = "sava:consent-open";

export type ConsentChoice = { analytics: boolean; marketing: boolean };
export type ConsentRecord = ConsentChoice & { necessary: true; version: number; date: string };

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

function toGoogle(c: ConsentChoice) {
  const ads = c.marketing ? "granted" : "denied";
  return {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  };
}

export function saveConsent(choice: ConsentChoice): ConsentRecord {
  const record: ConsentRecord = { necessary: true, ...choice, version: CONSENT_VERSION, date: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* navegação privada sem storage: a escolha vale só nesta visita */
  }
  window.gtag?.("consent", "update", toGoogle(choice));
  window.dataLayer?.push({ event: "consent_update", consent_analytics: choice.analytics, consent_marketing: choice.marketing });
  return record;
}

export function openConsentPreferences() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/** Roda inline no <head>, antes de qualquer script de terceiros. */
export const consentBootScript = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY}')||'null');
if(c&&c.version===${CONSENT_VERSION}){var a=c.marketing?'granted':'denied';
gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:a,ad_user_data:a,ad_personalization:a});}}catch(e){}
`;
