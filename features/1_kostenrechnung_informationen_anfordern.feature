@id_1 @strom
Feature: Kostenrechnung Strom für Privatkunde
Als potenzieller Neukunde möchte ich eine Kostenrechnung Strom erstellen.

Dazu prüfe ich die Verfügbarkeit an meinem Wohnort und editiere meinen Verbauch.
Folgend befülle ich das Formular "Bezugsort" mit meinen persönlichen Daten und überprüfe die Zusammenfassung.

Background:
    Given ist die WWZ Startseite
    When ich auf Produkte Strom klicke


    Scenario: Such nach PLZ ausserhalb Versorgungsgebiet
        When ich die Verfügbarkeit für meine Postleitzahl "6400" prüfe
        Then erscheint die Fehlermeldung "Standort ausserhalb unseres Versorgungsgebietes."


    Scenario Outline: Änderung der Verbrauchsmenge beeinflusst Preis der angebotenen Stromprodukte
        When ich die Verfügbarkeit für meine Postleitzahl <plz> prüfe
        Then beträgt die vorgeschlagene Verbrauchsmenge "3500" kWh
        When ich ca <kWh> kWh Verbrauchsmenge angebe
        Then <result> sich der vorgeschlagene monatliche Preis der Produkte

        Examples:
        |plz|kWh|result|
        |"6300"|4000|erhöht|
        |"6300"|3000|verringert|

    Scenario Outline: Bezugsort-Formular valide ausfüllen
         When ich die Verfügbarkeit für meine Postleitzahl <plz> prüfe
         Then beträgt die vorgeschlagene Verbrauchsmenge "3500" kWh
         When ich "Weiter" klicke
         When ich folgende persönlichen Daten eintrage - <anrede>, <vorname>, <nachname>
         When ich folgende Adressdaten eintrage - <strasse>, <nr>, <ort>
         When ich folgende Kontaktdaten eintrage - <email>, <telefon>
         When ich "Weiter zur Zusammenfassung" klicke
         Then sehe ich die Zusammenfassung meiner Eingaben - <produkt>, <anrede>, <nachname>, <plz>, <ort>

        Examples:
        |plz|anrede|vorname|nachname|strasse|nr|ort|email|telefon|produkt|
        |"6300"|"Herr"|"Max"|"Mustermann"|"Musterstrasse"|"123"|"Teststadt"|"info.portal_test@wwz.ch"|"012345"|"SonnenStrom Basis"|
        |"6300"|"Frau"|"Maxi"|"Musterfrau"|"Musterstrasse"|"321"|"Teststadt"|"info.portal_test@wwz.ch"|"012345"|"SonnenStrom Basis"|
