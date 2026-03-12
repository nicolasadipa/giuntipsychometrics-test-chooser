# Giunti Psychometrics · Test Chooser

AI-powered tool per la raccomandazione di test psicometrici dal catalogo Giunti Psychometrics Italia.

## Setup

```bash
npm install
npm run dev
```

## Deploy su Vercel

1. Push a GitHub
2. Importa il repo su vercel.com
3. Deploy automatico

## Note

- Sostituire `src/assets/giunti-logo.svg` con il logo reale PNG/SVG
- Se si usa PNG, aggiornare l'import in `src/pages/Index.tsx`
- Il file `src/data/mockTests.ts` contiene un engine keyword-based. Per produzione, sostituire con chiamata alla API di Anthropic.
