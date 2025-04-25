# Új referenciamunkák hozzáadása

Ez a dokumentáció bemutatja, hogyan adhatsz hozzá új referenciamunkákat a Spéder Felújítás weboldalához. A folyamat egyszerű, de néhány lépést követni kell a megfelelő formátum és megjelenés biztosításához.

## Lépések összefoglalása

1. Megfelelő képek kiválasztása és előkészítése
2. A kód módosítása a `templates/references.html` állományban
3. Adatok frissítése (projekt neve, leírása, kategóriája, stb.)
4. Tesztelés
5. Változtatások mentése és feltöltése a webtárhelyre

## Részletes útmutató

### 1. Képek előkészítése

Minden új referenciamunkához szükséged lesz legalább egy jó minőségű fényképre:

- A kép felbontása ideálisan **1200×800** pixel vagy nagyobb legyen
- Fekvő (landscape) tájolású képeket használj
- A fájlok mérete lehetőleg ne haladja meg a **500KB**-ot
- Optimális képarány: **3:2**

#### Helyezd el a képet

Két lehetőséged van:
1. **Online kép használata**: Ha a kép már elérhető online (pl. feltöltötted egy képmegosztó oldalra), akkor csak a URL-jére lesz szükséged.
2. **Helyi tárolás**: Ha a képet közvetlenül a weboldalon szeretnéd tárolni, töltsd fel a tárhelyre a `/static/img/references/` mappába, és használd a relatív hivatkozást.

### 2. A kód módosítása

Nyisd meg a `templates/references.html` fájlt egy szövegszerkesztővel (pl. Visual Studio Code).

Keresd meg a következő részt a kódban:
```html
<!-- References Gallery -->
<section class="references-gallery py-5">
    <div class="container">
        <div class="row g-4 references-container">
            <!-- Project 1 -->
            <!-- ... -->
            <!-- További projektek... -->
        </div>
    </div>
</section>
