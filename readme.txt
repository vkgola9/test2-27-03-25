Steps for building for a given Niche/City:
1. Update config/settings.json to reflect City/Niche/Company and other details.
---emailSettings.json can't be updated as Zoho doesn't support relay of emails
2. Generate different logo based on above Niche/City name.
3. Optional: Generate a background hero image for that City.
4. Build prod version in "dist" folder: npm run build
5. Replace logo image/background image in dist/img folder
6. Upload files as below from root folder contents to webhosting "htdocs" folder as below - 
--- .htaccess
--- src\lib //nothing else from "src"
--- config
--- dist
