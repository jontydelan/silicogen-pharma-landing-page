<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/00fe9a2c-48a5-4f4b-bd92-b98b8c03d9ed

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Using docker for local running
1. `docker build -t silicogen-pharma .`
2. `docker run -p 3000:3000 -e RESEND_API_KEY="key" silicogen-pharma`

## Create docker image
1. `docker tag silicogen-pharma delanjonty/silicogen-pharma:latest`
2. `docker push delanjonty/silicogen-pharma:latest`

