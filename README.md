# GitHub-User-Repository-App
Recruitment task. 

Założenia zadania zostały spełnione w 100%. Aplikacja wykorzystuje:
>TypeScript
>React
>styled-components.

Do przechowywania globalnego stanu wykorzystany został hook useContext. Zgodnie z własnym założeniami planowałem wykorzystać w projekcie Redux, 
stwierdziłem jednak, że na potrzeby przechowania kilku zmiennych wykorzystywanie Redux'a mogłoby być overkillem. 

Problemem aplikacji jest dostęp do API GitHub, który jest ograniczony powyżej 10 requestów na minutę - niestety jest to odczuwalne nawet przy krótkim
używaniu aplikacji (w razie problemów wystarczy chwilę poczekać). Możliwa była autentykacja aplikacji z kontem GitHub, co zwiększyłoby nieco liczbę requestów na minutę, 
jednak okazało się to dość problematyczne i finalnie podjąłem decyzję, żeby tego nie implementować. Jako, że w zadaniu nie doprecyzowano ilości repozytoriów, które mają 
się jednocześnie pojawić na stronie, podjąłem decyzję o max. 50 repozytoriach, jako że jest to liczba wystarczajaca dla większości użytkowników GitHub, a zwiększenie 
tej liczby wiązało by się ze spowolnieniem działania strony. Niemniej można tę liczbę dowolnie wyskalować zmieniając wartość parametru w zapytaniu do API. 

W celu uruchomienia projektu wystarczy uruchomic komendę "npx create-react-app my-ts-app --template typescript", zainstalowac w folderze projektu "styled-components".
(kolejny komendy npm install --save styled-components oraz npm i @types/styled-components). 
