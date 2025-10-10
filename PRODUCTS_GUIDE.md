# Products Management Guide

## Come Aggiungere Nuovi Prodotti

I prodotti sono gestiti tramite i file di traduzione. Per aggiungere un nuovo prodotto, segui questi passaggi:

### 1. File da Modificare

- **Italiano**: `lib/translations/it.js`
- **Inglese**: `lib/translations/en.js`

### 2. Struttura del Prodotto

Ogni prodotto ha la seguente struttura:

```javascript
{
  id: 1, // ID univoco (numero incrementale)
  name: "Nome del Prodotto",
  description: "Descrizione dettagliata del prodotto e dei suoi benefici.",
  price: 1800, // Prezzo in EUR (senza simbolo)
  tags: ["Per Aziende", "Per E-commerce"] // Array di tag (opzionale)
}
```

### 2.1 Tag Disponibili

I tag aiutano a categorizzare i prodotti. Esempi comuni:
- **Italiano**: "Per Aziende", "Per Agenzie", "Per Consulenti", "Per E-commerce", "Per Startup"
- **Inglese**: "For Companies", "For Agencies", "For Consultants", "For E-commerce", "For Startups"

Ogni prodotto può avere uno o più tag.

### 3. Esempio di Aggiunta

#### In `lib/translations/it.js`:

Trova la sezione `products.items` e aggiungi un nuovo oggetto:

```javascript
products: {
  title: "Prodotti Creati In-House by LayerData",
  subtitle: "...",
  ctaButton: "Contattaci via Email",
  items: [
    // ... prodotti esistenti ...
    {
      id: 4, // Nuovo ID
      name: "Data Warehouse Setup",
      description: "Configurazione completa di un data warehouse moderno con BigQuery o Snowflake. Include modellazione dati, ETL e documentazione.",
      price: 4500,
      tags: ["Per Aziende", "Per Startup"]
    }
  ]
}
```

#### In `lib/translations/en.js`:

Aggiungi la traduzione inglese:

```javascript
products: {
  title: "In-House Products Created by LayerData",
  subtitle: "...",
  ctaButton: "Contact us via Email",
  items: [
    // ... existing products ...
    {
      id: 4, // Same ID
      name: "Data Warehouse Setup",
      description: "Complete setup of a modern data warehouse with BigQuery or Snowflake. Includes data modeling, ETL and documentation.",
      price: 4500,
      tags: ["For Companies", "For Startups"]
    }
  ]
}
```

### 4. Best Practices

- **ID univoci**: Assicurati che ogni prodotto abbia un ID univoco
- **Prezzo coerente**: Usa lo stesso prezzo nelle due lingue
- **Descrizioni chiare**: Spiega chiaramente cosa include il prodotto
- **Lunghezza equilibrata**: Mantieni descrizioni simili per tutti i prodotti
- **Tag appropriati**: Scegli tag pertinenti che descrivano il target del prodotto
- **Tag coerenti**: Usa tag simili tra italiano e inglese per mantenere la coerenza

### 5. Dopo le Modifiche

1. Salva entrambi i file
2. Il sito si aggiornerà automaticamente in development (`npm run dev`)
3. Per production, fai commit e push su GitHub

### 6. Layout delle Card

Le card prodotto mostrano:
- **Tag** (in alto, sfondo giallo con testo nero in grassetto)
- **Nome del prodotto** (titolo in grassetto)
- **Descrizione** (testo grigio)
- **Prezzo** (in viola, formato €X,XXX)
- **Bottone "Acquista"** (apre email con oggetto pre-compilato)

### 7. Email di Contatto

Quando un utente clicca "Acquista", si apre l'email client con:
- **A**: hello@layerdata.eu
- **Oggetto**: "Interesse per: [Nome Prodotto]"

Questo permette di identificare immediatamente quale prodotto interessa al cliente.

