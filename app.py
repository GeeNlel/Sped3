import os
import json
import logging
from flask import Flask, render_template, jsonify
from datetime import datetime

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

# Configure the app
# (No submissions directory needed anymore)

@app.route('/')
def index():
    recent_projects = get_recent_projects(3)
    return render_template('index.html', active_page='home', recent_projects=recent_projects)

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/references')
def references():
    projects = load_projects()
    return render_template('references.html', active_page='references', projects=projects)

@app.route('/api/project/<project_id>')
def get_project(project_id):
    project_path = f"static/img/{project_id}/project_info.json"
    if os.path.exists(project_path):
        with open(project_path, 'r', encoding='utf-8') as f:
            project_data = json.load(f)
            return jsonify(project_data)
    return jsonify({'error': 'Project not found'}), 404

def load_projects():
    projects = []
    img_dir = 'static/img'
    
    if os.path.exists(img_dir):
        for folder in os.listdir(img_dir):
            folder_path = os.path.join(img_dir, folder)
            if os.path.isdir(folder_path):
                project_info_path = os.path.join(folder_path, 'project_info.json')
                if os.path.exists(project_info_path):
                    with open(project_info_path, 'r', encoding='utf-8') as f:
                        project_data = json.load(f)
                        project_data['id'] = folder
                        projects.append(project_data)
    
    # Sort by date (newest first)
    projects.sort(key=lambda x: x.get('date', ''), reverse=True)
    return projects

def get_recent_projects(limit=3):
    projects = load_projects()
    return projects[:limit]

@app.route('/pricing')
def pricing():
    return render_template('pricing.html', active_page='pricing')

@app.route('/contact')
def contact():
    return render_template('contact.html', active_page='contact')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500
