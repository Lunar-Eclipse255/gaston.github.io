---
layout: right-sidebar
title: "Blog"
description: "Latest posts and updates"
permalink: /content/blog/
---

# {{ page.title }}

Welcome to the blog! Here you'll find the latest posts, tutorials, and updates.

## Recent Posts

{% assign blog_posts = site.pages | where_exp: "page", "page.path contains 'content/blog/'" | where_exp: "page", "page.name != 'index.md'" | sort: "date" | reverse %}

{% for post in blog_posts limit: 10 %}
<article class="post-preview">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  
  {% if post.date %}
  <p class="post-meta">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {% if post.author %} • by {{ post.author }}{% endif %}
  </p>
  {% endif %}
  
  {% if post.description %}
  <p>{{ post.description }}</p>
  {% endif %}
  
  {% if post.tags %}
  <p class="post-tags">
    Tags: {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% unless forloop.last %}, {% endunless %}{% endfor %}
  </p>
  {% endif %}
</article>
{% endfor %}

{% if blog_posts.size == 0 %}
<p>No blog posts yet. Check back soon!</p>
{% endif %}

<style>
.post-preview {
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px solid #eee;
}

.post-preview:last-child {
  border-bottom: none;
}

.post-preview h3 {
  margin-bottom: 0.5em;
}

.post-preview h3 a {
  text-decoration: none;
  color: #333;
}

.post-preview h3 a:hover {
  color: #0d6efd;
}

.post-meta {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}

.post-tags {
  font-size: 0.85em;
  color: #666;
}

.tag {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
