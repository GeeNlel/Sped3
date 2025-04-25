from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, TelField
from wtforms.validators import DataRequired, Email, Length

class ContactForm(FlaskForm):
    name = StringField('Név', validators=[DataRequired(message="Kérjük adja meg a nevét."), 
                                         Length(min=2, max=100, message="A név 2-100 karakter hosszú lehet.")])
    email = StringField('Email cím', validators=[DataRequired(message="Kérjük adja meg az email címét."), 
                                                Email(message="Kérjük adjon meg egy érvényes email címet.")])
    phone = TelField('Telefonszám', validators=[DataRequired(message="Kérjük adja meg a telefonszámát."),
                                              Length(min=6, max=20, message="Kérjük adjon meg egy érvényes telefonszámot.")])
    message = TextAreaField('Üzenet', validators=[DataRequired(message="Kérjük írja le miben segíthetünk."),
                                                Length(min=10, max=1000, message="Az üzenet 10-1000 karakter hosszú lehet.")])
