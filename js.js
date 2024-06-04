// Zieldatum und -zeit (hier Silvester 2024)
const zielDatum = new Date("2024-12-31 23:59:59");

// Funktion zum Aktualisieren des Countdowns
function aktualisiereCountdown() {
  const jetzt = new Date();
  const differenz = zielDatum.getTime() - jetzt.getTime();

  // Berechnen von Stunden, Minuten und Sekunden
  const stunden = Math.floor((differenz % (1000 * 60 * 60)) / (1000 * 60 * 60));
  const minuten = Math.floor((differenz % (1000 * 60)) / (1000 * 60));
  const sekunden = Math.floor((differenz % (1000 * 60)) / 1000);

  // Formatieren der Werte
  const formatierteStunden = stunden.toString().padStart(2, "0");
  const formatierteMinuten = minuten.toString().padStart(2, "0");
  const formatierteSekunden = sekunden.toString().padStart(2, "0");

  // Aktualisieren der Textelemente
  document.getElementById("zeit-stunden").textContent = formatierteStunden;
  document.getElementById("zeit-minuten").textContent = formatierteMinuten;
  document.getElementById("zeit-sekunden").textContent = formatierteSekunden;
}

// Countdown beim Laden der Seite initialisieren und alle 1 Sekunde aktualisieren
aktualisiereCountdown();
setInterval(aktualisiereCountdown, 1000);
