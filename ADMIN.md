# Site Administration

Where the site's moving parts live and who owns them. Update this file whenever an account, key or address changes.

## Contact form email: Web3Forms

The Lease Inquiry form has no server of its own. It posts to [Web3Forms](https://web3forms.com), which emails each inquiry on.

| | |
|---|---|
| Service | Web3Forms (free plan, about 250 submissions a month) |
| Account | Tied to the **dolfinmd@gmail.com** Google account. Sign in to the Web3Forms dashboard with that account. |
| Inquiries delivered to | **longshotpd@gmail.com** |
| Sender | `notify@web3forms.com`, subject "Lease inquiry from *name*". Reply goes to the visitor. |
| Access key | `WEB3FORMS_ACCESS_KEY` near the top of the contact form section in `script.js` |

The access key is public by design. It sits in the page source and can only send to the inbox it was created for, so it isn't a secret. The recipient is set by the key, not by the site's code: to change where inquiries go, create a new key for the new address (or change it in the Web3Forms dashboard) and put the new key in `script.js`.

**If the form stops working:** visitors see "Sorry, your inquiry couldn't be sent" with the email and phone number, and the error is logged to the browser console. Check the Web3Forms dashboard for the account status and monthly limit. If the key is blank, the form tells visitors online inquiries aren't available and gives the email and phone instead.

**Spam:** the form has a hidden `botcheck` checkbox. Web3Forms rejects any submission that ticks it.

## Hosting

| | |
|---|---|
| Host | Azure Static Web Apps, `proud-ground-044503b10` ([live site](https://proud-ground-044503b10.4.azurestaticapps.net/)) |
| Deploys | GitHub Actions (`.github/workflows/`). Pushing or merging to `main` deploys to the live site. Each pull request into `main` gets its own preview site, deleted when the pull request closes. |
| Domains | Planned: `longshotpd.com` as the main address, with `longshotpd.org` and `longshotpd.net` pointing to it. Registered at Cloudflare, which will be used for DNS only. Not connected to the site yet. |
| GitHub Pages | Also enabled on this repo, so a second copy of the site is published there. Turn it off under Settings → Pages if Azure is the only host wanted. |

## Making changes

Work on a branch, open a pull request into `main`, check the Azure preview link the bot posts on the pull request, then merge.
