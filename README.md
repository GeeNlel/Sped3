# sped3 Weboldal

Modern weboldal a sped3 Felújítás nevű építőipari vállalkozás számára.

## Helyi Futtatás VS Code-ban

A weboldal helyi futtatásához követd a következő lépéseket:

### Előfeltételek

1. [Python](https://www.python.org/downloads/) (3.8 vagy újabb verzió)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. VS Code Python és Pylance kiterjesztések (Extensions)

### Telepítési lépések

1. **Töltsd le és bontsd ki a projekt mappáját** a számítógépre.

2. **Nyisd meg a projekt mappáját VS Code-ban**:
   - Indítsd el a VS Code-ot
   - Menj a `File` -> `Open Folder` menüpontba
   - Válaszd ki a projekt mappáját

3. **Hozz létre egy virtuális környezetet** (opcionális, de javasolt):
   - Nyiss egy terminált a VS Code-ban (`Terminal` -> `New Terminal`)
   - Futtasd: `python -m venv venv`
   - Aktiváld:
     - Windows: `venv\Scripts\activate`
     - macOS/Linux: `source venv/bin/activate`

4. **Telepítsd a szükséges csomagokat**:
   ```bash
   pip install flask gunicorn
   ```

5. **Indítsd el a webszervert**:
   ```bash
   flask run --host=0.0.0.0 --port=5000
   ```
   vagy
   ```bash
   python -m flask run --host=0.0.0.0 --port=5000
   ```

6. **Nyisd meg a weboldalt** a böngészőben: [http://localhost:5000](http://localhost:5000)

### Projekt Struktúra

- `app.py` - Fő alkalmazás fájl
- `main.py` - Alkalmazás indító fájl
- `static/` - Statikus fájlok (CSS, JavaScript, képek)
- `templates/` - HTML sablonok
- `docs/` - Dokumentáció

## Testreszabás

A weboldal testreszabásához:

1. Az oldalak tartalma a `templates/` mappában található HTML fájlokban módosítható.
2. A stílusok a `static/css/style.css` fájlban találhatók.
3. A főbb funkciók a `static/js/main.js` fájlban találhatók.

## Megjegyzések

- A weboldal a Flask keretrendszert használja.
- A "Contact" oldalon nincs űrlap, csak elérhetőségi adatok.
- A dizájn reszponzív, így mobileszközökön is jól működik.
