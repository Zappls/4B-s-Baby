// const baseUrl = 'https://bruteforce.coolify.machma.app';
const baseUrl = 'http://localhost:3000';

export async function dataKraken(data) {

    try { 
      const response = await fetch(`${baseUrl}/dataKrakenTakes`, { // Backend-Server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Daten erfolgreich gesendet:', result);
      } else {
        console.error('Fehler beim Senden der Daten:', await response.text());
      }
    } catch (error) {
      console.error('Fehler beim Senden der Anfrage:', error);
    }
  }