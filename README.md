# Network & Linux Academy

An independent technology-learning website focused on clear, structured computer-networking tutorials, with Linux administration and practical lab material planned for future updates.

## Website

- **Homepage:** `index.html`
- **Styles:** `style.css`
- **Search and navigation:** `script.js`
- **Tutorials:** `articles/`
- **Downloadable resources:** `resources.html`
- **Favicon:** `favicon.svg`

## Current content

The networking library currently contains 19 tutorials:

- Access Control Lists (ACLs)
- BGP
- DHCP
- DNS
- EIGRP
- EtherChannel
- Inter-VLAN Routing
- IPv4 Addressing
- IPv6 Addressing
- NAT
- OSI Model
- Advanced OSPF
- Introduction to OSPF
- Route Redistribution
- Spanning Tree Protocol (STP)
- IPv4 Subnetting
- TCP vs UDP
- VLAN Fundamentals
- VLAN Trunking (IEEE 802.1Q)

The homepage search index is maintained in `script.js`. When adding an article, update both the article cards in `index.html` and the search data in `script.js`.

## Run locally

You can run the site with Visual Studio Code and the Live Server extension:

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click and choose **Open with Live Server**.

Alternatively, if Python is installed, run this from the project root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)` folder.
5. Save and wait for GitHub Pages to publish the site.

The published address will be shown in the Pages settings.

## Project status

- Networking tutorial library: available
- Homepage search: implemented
- Responsive layout: implemented; continue testing across devices
- Resource library landing page: available; downloadable products in development
- Linux tutorial library: planned
- Practical lab library: planned

## Technology

Built with plain HTML, CSS and JavaScript. No framework or build step is required.

## Maintainer

This is an independently maintained educational project. Technical explanations are intended for learning and should be checked against current vendor documentation before use in production networks.
