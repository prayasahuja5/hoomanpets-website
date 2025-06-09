#!/bin/bash

echo "🚀 Deploying Hooman Pets website..."

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit with timestamp
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to GitHub
    git push origin main
    
    echo "✅ Successfully deployed to GitHub!"
    echo "🌐 Vercel will automatically deploy your changes"
    echo "📱 Check your live site in a few moments"
fi 