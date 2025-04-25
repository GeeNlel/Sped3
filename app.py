import os
import logging
from flask import Flask, render_template, request, flash, redirect, url_for
from forms import ContactForm
import json
from datetime import datetime

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

# Ensure the submissions directory exists
os.makedirs('submissions', exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html', active_page='home')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/references')
def references():
    return render_template('references.html', active_page='references')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html', active_page='pricing')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    
    if request.method == 'POST' and form.validate_on_submit():
        try:
            # Create submission data
            submission = {
                'name': form.name.data,
                'email': form.email.data,
                'phone': form.phone.data,
                'message': form.message.data,
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            }
            
            # Save submission to a JSON file
            filename = f"submissions/contact_{datetime.now().strftime('%Y%m%d%H%M%S')}.json"
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(submission, f, ensure_ascii=False, indent=4)
            
            flash('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.', 'success')
            return redirect(url_for('contact'))
        except Exception as e:
            app.logger.error(f"Error saving form submission: {str(e)}")
            flash('Sajnáljuk, hiba történt az üzenet elküldésekor. Kérjük próbálja újra később.', 'danger')
    
    return render_template('contact.html', form=form, active_page='contact')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500
