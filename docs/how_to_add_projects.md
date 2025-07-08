# Hogyan adj hozzá új projekteket

## Lépések:

1. **Mappa létrehozása**: Hozz létre egy új mappát a `static/img/` könyvtárban, például `projekt4`, `projekt5`, stb.

2. **Képek feltöltése**: 
   - Töltsd fel a projekt képeit a létrehozott mappába
   - A képek lehetnek jpg, png formátumban
   - Ajánlott méret: legalább 800x600 pixel

3. **project_info.json létrehozása**: Hozz létre egy `project_info.json` fájlt a projekt mappájában a következő tartalommal:

```json
{
  "name": "Projekt neve",
  "description": "Projekt leírása - mi történt, milyen munkák voltak",
  "category": "lakasfelujitas", 
  "location": "Helység neve",
  "year": "2024",
  "date": "2024-03-15",
  "images": [
    "/static/img/projekt4/kep1.jpg",
    "/static/img/projekt4/kep2.jpg",
    "/static/img/projekt4/kep3.jpg"
  ]
}
```

## Kategóriák:
- `lakasfelujitas` - Lakásfelújítás
- `festés` - Festés
- `irodafelujitas` - Irodafelújítás  
- `egyeb` - Egyéb

## Fontos:
- A `date` mező alapján rendezi a rendszer a projekteket (újabb dátum = előrébb jelenik meg)
- Az `images` tömbben az első kép lesz a borítókép
- A képek útvonalát pontosan add meg (`/static/img/projektX/kepnev.jpg`)

## Példa mappastruktúra:
```
static/img/
├── projekt1/
│   ├── project_info.json
│   ├── kep1.jpg
│   └── kep2.jpg
├── projekt4/
│   ├── project_info.json
│   ├── nappali_elotte.jpg
│   ├── nappali_kozben.jpg
│   └── nappali_utan.jpg
```

A projekt automatikusan megjelenik a weboldal főoldalán és a referenciák között!