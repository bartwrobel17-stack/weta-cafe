# Weta Cafe

Next.js + React + TypeScript website for Weta Cafe, Wrocław.

## Gallery owner panel
The owner panel is intentionally implemented as a **local demo**: photos are stored in browser localStorage and the demo password is `weta-demo`. For production, set `NEXT_PUBLIC_OWNER_PASSWORD` and replace the storage layer with Supabase, S3, Cloudinary or another persistent backend without changing the public gallery UI.

## Run
`npm install`
`npm run dev`

## Deploy
Import the repository into Vercel. No custom server is required.

## Source data
Business details were prepared from the information supplied for Weta Cafe. Google Maps is used only as an embedded map and source of supplied business imagery.