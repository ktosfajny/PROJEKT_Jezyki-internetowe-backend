# FUTURE IS NOW

W tym repozytorium znajduje się backend do strony internetowej. 
Na heroku znajduje się deploy tego backendu z commita o nazwie: 
'move backend files to main dir, create procfile, update server.js, delete readme'

Link do servera na [heroku](https://future-is-now-server.herokuapp.com/)

---

### Struktura projektu i repozytorium:

Od początku tworzenia repozytorium aż to commita 'update README - possible hosting in the near future' (włącznie z nim) backend oraz frontend przechowywane były w jednym głównym katalogu. Utworzone były w nim specjalne podkatalogi: 'backend' dla backendu oraz 'frontend' dla frontendu.
Na tamten stan aby uruchomić projekt należało pobrać całe repozytorium i lokalnie uruchomić server oraz stronę. 

Nastepnie rozdzieliłem backend i frontend na osobne repozytoria, toteż commit 'update README - possible hosting in the near future' jest ich ostatnim współnym punktem w historii tych repo. 

---

### Linki do pozostałych części projektu:

W tym repo znajduje się backend. Linki do wersji lokalnej oraz frontendu:

1. [wersja lokalna](https://github.com/ktosfajny/PROJEKT_Jezyki-internetowe)
2. [frontend](https://github.com/ktosfajny/PROJEKT_Jezyki-internetowe-frontend)

---

### Instrukcja jak uruchomić server lokalnie

Server można też uruchomić lokalnie. Nie jest to konieczne do działania strony (gdyż znajduje się na heroku) lecz jeśli jest taka potrzeba, poniżej zamieściłem instrukcję:

1. Należy pobrać [Node.js](https://nodejs.org/en/)
2. Otworzyć katalog główny tego projektu np.: w programie [Visual Studio Code](https://code.visualstudio.com/)
3. W konsoli wpisać: `npm install`
4. W konsoli wpisać: `node server` (uruchomi server. Można też uruchomić przez nodemon, wtedy: `nodemon server`)*

    *Jeśli polecenie `nodemon server` nie działa z powodu braku zainstalowanego nodemon należy poprzedzić je `npm i nodemon`

---

W przypadku problemów lub pytań proszę o kontakt na BB

> wszystkie zdjęcia użyte w projekcie pochodzą ze stron udostępniających stockowe zdjęcia do dowolnego użytku bez żadnych ograniczeń oraz z mojej prywatnej kolekcji grafik