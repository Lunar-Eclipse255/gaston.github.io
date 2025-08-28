# Content Templates

This directory contains templates for creating new content easily. Use these templates as starting points for new pages.

## Available Templates

### 1. Guide Template (`guide-template.md`)
Use for step-by-step guides and how-to documentation.
- Copy to `docs/content/guides/your-guide-name.md`
- Update the frontmatter (title, description, permalink)
- Replace placeholder content

### 2. Tutorial Template (`tutorial-template.md`)
Use for hands-on tutorials where users build something.
- Copy to `docs/content/tutorials/your-tutorial-name.md`
- Update the frontmatter
- Replace placeholder content with tutorial steps

### 3. Blog Post Template (`blog-post-template.md`)
Use for blog posts and announcements.
- Copy to `docs/content/blog/YYYY-MM-DD-your-post-name.md`
- Update the frontmatter (date, author, categories, tags)
- Replace placeholder content

### 4. Reference Template (`reference-template.md`)
Use for technical reference documentation.
- Copy to `docs/content/reference/your-reference-name.md`
- Update the frontmatter
- Replace placeholder content with reference information

## How to Add New Content

### Step 1: Choose a Template
Pick the appropriate template based on your content type.

### Step 2: Copy the Template
```bash
# Example: Creating a new guide
cp docs/_templates/guide-template.md docs/content/guides/my-new-guide.md
```

### Step 3: Update the Frontmatter
Edit the YAML frontmatter at the top of the file:
- `title`: Your page title
- `description`: Brief description
- `permalink`: URL path (must be unique)

### Step 4: Add to Navigation
Edit `docs/_data/navigation.yml` to add your new page to the sidebar menu.

### Step 5: Write Your Content
Replace the placeholder content with your actual content.

## Content Organization

```
docs/content/
├── guides/          # Step-by-step guides
├── tutorials/       # Hands-on tutorials
├── reference/       # Technical reference docs
├── blog/           # Blog posts and announcements
└── about.md        # About page
```

## Navigation Management

Edit `docs/_data/navigation.yml` to:
- Add new pages to the sidebar
- Reorganize menu structure
- Create dropdown menus
- Set active page highlighting

The navigation file automatically generates the sidebar menu based on its structure.
