---
layout: post
title:  "Setting Up Jekyll with GitHub Pages"
date:   2025-08-27 11:00:00 -0400
categories: jekyll github-pages tutorial
tags: [web-development, static-sites, github]
---

Welcome to my first blog post! I just finished setting up this Jekyll site to work with GitHub Pages, and I wanted to share the process.

## What is Jekyll?

Jekyll is a static site generator that's perfect for blogs and documentation sites. It takes your content written in Markdown and converts it into a static website that can be hosted anywhere.

## Why GitHub Pages?

GitHub Pages offers free hosting for static websites directly from your GitHub repository. It's perfect for:

- Personal websites and portfolios
- Project documentation
- Blogs and simple websites
- Prototypes and demos

## Key Changes Made

To get this site working properly with GitHub Pages, I made several important changes:

### 1. Updated the Gemfile

Instead of using Jekyll directly, I switched to the `github-pages` gem:

{% highlight ruby %}
gem "github-pages", "~> 228", group: :jekyll_plugins
{% endhighlight %}

### 2. Fixed Configuration

Updated `_config.yml` with proper settings for GitHub Pages:

{% highlight yaml %}
title: Gaston's GitHub Pages Site
description: Welcome to my personal website
baseurl: ""
url: "https://gagrehansavona.github.io"
theme: minima
{% endhighlight %}

### 3. Added Essential Plugins

Included important plugins for SEO and functionality:

- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - XML sitemap
- `jekyll-seo-tag` - SEO optimization

## Next Steps

Now that the site is set up, I plan to:

- Add more blog posts about my projects
- Customize the theme and styling
- Add a portfolio section
- Set up automated deployment

Stay tuned for more updates!

---

*This post demonstrates Jekyll's powerful features including syntax highlighting, front matter, and Markdown support.*
