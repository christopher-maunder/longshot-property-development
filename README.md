# Longshot Property Development - Dynamic Website

A professional, fully responsive property development showcase website built with HTML, CSS, and JavaScript. Features a dynamic property portfolio, image galleries, and contact form.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Property Portfolio** - Easy-to-update property listings with detailed information
- **Image Gallery** - Property photos with navigation controls in modal view
- **Contact Form** - Client inquiry form with validation and status feedback
- **Property Quick View** - Cards display key property information at a glance
- **Smooth Navigation** - Sticky header with smooth scrolling navigation
- **Modern UI** - Professional design with excellent visual hierarchy

## Project Structure

```
Longshot Webpage/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Dynamic functionality and form handling
├── Longshot.jpg        # Company logo
├── Longshot01.jpg      # Property images
├── Longshot02.jpg
├── Longshot03.jpg
└── README.md           # This file
```

## How to Use Locally

1. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required

2. **Edit Properties**
   - Open `script.js`
   - Find the `properties` array (around line 8)
   - Update property details, prices, images, and descriptions
   - Save and refresh the browser

3. **Customize Contact Information**
   - In `index.html`, search for "Contact Information" section
   - Update email, phone, and hours
   - In `script.js`, update the form handling to send emails to your backend

## Customization Guide

### Update Properties

Edit the `properties` array in `script.js`:

```javascript
const properties = [
    {
        id: 1,
        title: "Property Title",
        price: "$X,XXX,XXX",
        priceNumeric: 1000000,
        type: "Residential",
        beds: 4,
        baths: 3,
        description: "Property description...",
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    },
    // Add more properties...
];
```

### Update Colors

Edit the `:root` CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #e74c3c;    /* Accent color */
    --accent-color: #3498db;       /* Button/link color */
    --light-gray: #ecf0f1;
    --dark-gray: #34495e;
}
```

### Update Company Information

1. **Logo** - Replace `Longshot.jpg` with your logo
2. **Company Name** - Edit in the navbar section of `index.html`
3. **Contact Details** - Update in the Contact section
4. **Meta Information** - Edit `<title>` and meta tags in `<head>`

## Deployment to Azure Static Web Apps

### Prerequisites
- Azure subscription
- GitHub account with this repository
- Azure CLI (optional, but recommended)

### Step 1: Prepare Repository

1. Create a GitHub repository or upload these files
2. Ensure the root folder contains `index.html`, `styles.css`, `script.js`, and all images
3. Commit and push to GitHub

### Step 2: Create Azure Static Web App

**Option A: Using Azure Portal**

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for "Static Web Apps" and click "Create"
3. Fill in the form:
   - **Resource Group**: Create new or select existing
   - **Name**: `longshot-property-dev` (or your preferred name)
   - **Plan**: Free (for testing) or Standard (for production)
   - **Region**: Select closest region
4. Click "Sign in with GitHub"
5. Authorize Azure and select your repository
6. Choose:
   - **Organization**: Your GitHub organization/account
   - **Repository**: Select the Longshot Webpage repo
   - **Branch**: main (or your deployment branch)
7. Build details should auto-detect or use:
   - **Build Presets**: None
   - **App location**: `/` (root)
   - **Api location**: (leave empty if no backend)
   - **Output location**: `.` (dot)
8. Click "Review + Create" → "Create"

**Option B: Using Azure CLI**

```bash
# Login to Azure
az login

# Set variables
RESOURCE_GROUP="longshot-rg"
APP_NAME="longshot-property"
LOCATION="eastus"
REPO_URL="https://github.com/YOUR_USERNAME/longshot-webpage"
GITHUB_TOKEN="your_github_token"

# Create resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create Static Web App
az staticwebapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --source $REPO_URL \
    --branch main \
    --app-location "/" \
    --output-location "." \
    --token $GITHUB_TOKEN
```

### Step 3: GitHub Actions Workflow

Azure automatically creates a GitHub Actions workflow. The workflow file will be in:
```
.github/workflows/azure-static-web-apps-*.yml
```

Review and verify the workflow is correct. It will:
1. Build your app (just copying files for static content)
2. Deploy to Azure Static Web Apps

### Step 4: Access Your Site

After deployment completes:
1. Go back to Azure Portal
2. Find your Static Web App resource
3. Click "Overview"
4. Copy the **URL** - This is your live website!

The site will be available at: `https://<app-name>.<region>.azurestaticapps.net`

## Setting Up Custom Domain

1. In Azure Portal, select your Static Web App
2. Go to **Custom domains** in the left menu
3. Click **Add**
4. Enter your domain name
5. Follow DNS verification steps with your domain provider
6. Azure will provision an SSL certificate automatically

## Adding Backend Functionality

Currently, the contact form displays a success message but doesn't send emails. To add real backend:

### Option 1: Azure Functions (Recommended)

1. Create an Azure Function (HTTP trigger) for contact form submission
2. Update the `handleFormSubmit()` function in `script.js`:

```javascript
const response = await fetch('/.netlify/functions/contact', {
    method: 'POST',
    body: JSON.stringify(data)
});
```

### Option 2: Third-Party Service

Use services like:
- **Formspree** - Form handling as a service
- **EmailJS** - Send emails directly from JavaScript
- **Firebase** - Backend-as-a-service

## Performance Optimization

- All assets are optimized for web
- CSS is minified for production
- Images should be optimized (consider using WebP format)
- Static Web Apps automatically provides CDN caching

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Not supported (but outdated - not recommended)

## Security Features

- Static Web Apps provides DDoS protection
- Free SSL certificate for all domains
- No backend exposed (static content only)
- CORS configured automatically

## Troubleshooting

### Images not showing
- Ensure image files are in the same folder as HTML
- Check file names match exactly (case-sensitive)
- Use relative paths: `Longshot01.jpg` not `/Longshot01.jpg`

### Form not working
- Open browser console (F12) for errors
- Verify form submission handler is loaded
- Check email format validation

### Site not deploying
- Check GitHub workflow logs
- Verify file structure matches expectations
- Ensure no build errors in workflow

## Support & Maintenance

- Update property listings in `script.js`
- Keep contact information current
- Test on mobile devices regularly
- Monitor Azure Static Web Apps metrics for traffic

## Future Enhancements

Consider adding:
- Property search and filtering
- Map integration (Google Maps)
- Advanced image gallery with lightbox
- Blog/news section
- Video tours
- Virtual property walk-throughs
- Newsletter signup
- CRM integration
- Analytics dashboard

## License

© 2024 Longshot Property Development. All rights reserved.

---

**Need Help?**
- Azure Static Web Apps Docs: https://docs.microsoft.com/azure/static-web-apps/
- Azure Portal: https://portal.azure.com
- GitHub: https://github.com
