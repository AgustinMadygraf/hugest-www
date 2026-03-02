# Deploy continuo en Cloudflare Pages (Vue + Vite)

## Contexto de este repositorio

- Framework/build: Vite (no Vue CLI)
- Build command: `npm run build`
- Output directory: `dist`
- Router detectado: no hay `vue-router` configurado actualmente en `src/router/*`

Se agrega `public/_redirects` con regla SPA para evitar 404 al refrescar rutas del cliente:

```txt
/*  /index.html  200
```

Ese archivo se copia automáticamente dentro de `dist/` en el build de Vite.

## Crear proyecto correctamente en Cloudflare Pages

> El error `Could not find a wrangler.json, wrangler.jsonc, or wrangler.toml...` aparece cuando se usa el flujo de **Workers**. Para este sitio se debe usar **Pages**.

1. Ir a **Cloudflare Dashboard**.
2. Entrar en **Workers & Pages**.
3. Click en **Create application**.
4. Elegir la pestaña **Pages** (no Workers).
5. Click en **Connect to Git**.
6. Autorizar GitHub si hace falta y seleccionar el repo `AgustinMadygraf/hugeest-www`.
7. Configurar build:
   - **Framework preset**: `Vite` (o `None` si no aparece, con comandos manuales)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: dejar vacío (repo root)
8. Variables de entorno (si aplica):
   - `NODE_VERSION=20`
9. Guardar y desplegar.

## Dominio personalizado (datamaq.com.ar)

En el proyecto de Pages:

1. Ir a **Custom domains**.
2. Agregar `datamaq.com.ar`.
3. Agregar `www.datamaq.com.ar`.
4. Seguir el asistente para validación DNS (Cloudflare suele autoconfigurar si el dominio ya está en esa cuenta).

## Verificación local antes de push

```bash
npm ci
npm run build
```

Validar que existan:

- `dist/index.html`
- `dist/_redirects`

Con eso, cada push a la rama configurada en Pages dispara deploy automático.

## Troubleshooting

### Error: `main.ts` MIME type `video/mp2t`

Si ves:

`Failed to load module script ... server responded with a MIME type of "video/mp2t"`

la causa es que se está publicando el código fuente (`index.html` con `src/main.ts`) en lugar del build de Vite.

Corregí estos campos en Cloudflare Pages:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: vacío (raíz del repo)

Luego hacé un redeploy. El sitio correcto debe cargar `assets/*.js` desde `dist/index.html`, no `src/main.ts`.
