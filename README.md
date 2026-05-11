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

